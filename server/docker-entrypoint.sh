#!/bin/sh
set -eu

prisma_log=/tmp/prisma-db-push.log
app_pid=""

cleanup() {
  if [ -n "${app_pid}" ] && kill -0 "${app_pid}" 2>/dev/null; then
    kill -TERM "${app_pid}" 2>/dev/null || true
    wait "${app_pid}" 2>/dev/null || true
  fi
}

trap cleanup INT TERM

if [ -z "${DATABASE_URL:-}" ]; then
  echo "DATABASE_URL is not set." >&2
  exit 1
fi

if [ "${RENDER:-}" = "true" ]; then
  case "${DATABASE_URL}" in
    *@localhost:*|*@127.0.0.1:*|*@localhost/*|*@127.0.0.1/*)
      echo "DATABASE_URL points to localhost. On Render, set it to your Render Postgres internal URL." >&2
      exit 1
      ;;
  esac
fi

"$@" &
app_pid=$!
echo "Application started with PID ${app_pid}."

echo "Waiting for database and applying schema..."
max_attempts=30
attempt=1
until bunx prisma db push >"${prisma_log}" 2>&1; do
  if ! kill -0 "${app_pid}" 2>/dev/null; then
    wait "${app_pid}"
    exit $?
  fi

  if [ "${attempt}" -ge "${max_attempts}" ]; then
    echo "Prisma db push failed after ${max_attempts} attempts:"
    cat "${prisma_log}"
    cleanup
    exit 1
  fi

  echo "Database not ready yet (attempt ${attempt}/${max_attempts}), retrying in 2s..."
  attempt=$((attempt + 1))
  sleep 2
done

echo "Database is ready and schema is in sync."
wait "${app_pid}"

#!/bin/sh
set -e

echo "Waiting for database and applying schema..."
max_attempts=30
attempt=1
until bunx prisma db push >/tmp/prisma-db-push.log 2>&1; do
  if [ "$attempt" -ge "$max_attempts" ]; then
    echo "Prisma db push failed after $max_attempts attempts:"
    cat /tmp/prisma-db-push.log
    exit 1
  fi
  echo "Database not ready yet (attempt $attempt/$max_attempts), retrying in 2s..."
  attempt=$((attempt + 1))
  sleep 2
done
echo "Database is ready and schema is in sync."

exec "$@"

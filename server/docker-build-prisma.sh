#!/bin/sh
set -eu

if [ -z "${DIRECT_URL:-}" ] && [ -z "${DATABASE_URL:-}" ]; then
  echo "DIRECT_URL or DATABASE_URL build arg is required for prisma generate" >&2
  exit 1
fi

bunx prisma generate

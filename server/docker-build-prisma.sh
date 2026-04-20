#!/bin/sh
set -eu

if [ -z "${DATABASE_URL:-}" ]; then
  echo "DATABASE_URL build arg is required for prisma generate" >&2
  exit 1
fi

bunx prisma generate

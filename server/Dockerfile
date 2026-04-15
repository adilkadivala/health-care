FROM oven/bun:1-alpine

RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY prisma/ ./prisma/
COPY prisma.config.ts tsconfig.json ./
COPY src ./src

# prisma.config.ts requires DATABASE_URL to load; generate does not connect to the DB
ENV DATABASE_URL=${DATABASE_URL}
RUN bunx prisma generate

ENV NODE_ENV=production
ENV PORT=8000

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["bun", "run", "src/index.ts"]

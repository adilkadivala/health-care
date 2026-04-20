FROM oven/bun:1-alpine

RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY prisma/ ./prisma/
COPY prisma.config.ts tsconfig.json ./
COPY src ./src
COPY docker-build-prisma.sh /usr/local/bin/docker-build-prisma.sh

# prisma.config.ts requires DATABASE_URL to load during generate.
ARG DATABASE_URL
RUN chmod +x /usr/local/bin/docker-build-prisma.sh \
  && /usr/local/bin/docker-build-prisma.sh

ENV NODE_ENV=production

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["bun", "run", "start"]

FROM node:22-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 app

COPY --from=builder --chown=app:nodejs /app/.output ./.output

USER app

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

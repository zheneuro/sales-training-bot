# Dockerfile for deploying the NestJS Backend (which includes the Telegraf Bot)
# Use this for Render, Railway, etc.

FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.30.3 --activate

# Copy workspace configuration
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

# Copy backend package and install dependencies
COPY apps/backend ./apps/backend/
RUN pnpm install --frozen-lockfile

# Generate Prisma Client
WORKDIR /app/apps/backend
ENV PRISMA_SKIP_ENV_VALIDATION=true
ENV DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"
RUN pnpm dlx prisma generate
RUN pnpm build

# --- Production Image ---
FROM node:20-alpine AS runner

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.30.3 --activate

# Copy workspace configuration
COPY --from=builder /app/package.json /app/pnpm-workspace.yaml /app/pnpm-lock.yaml ./
COPY --from=builder /app/apps/backend/package.json ./apps/backend/

# Only install prod dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy Dist from builder
COPY --from=builder /app/apps/backend/dist ./apps/backend/dist
COPY --from=builder /app/apps/backend/prisma ./apps/backend/prisma

WORKDIR /app/apps/backend

# Generate Prisma Client AGAIN in prod so it installs natively without symlink issues
ENV PRISMA_SKIP_ENV_VALIDATION=true
ENV DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"
RUN pnpm dlx prisma generate

# Need port for Healthchecks / API if any
EXPOSE 3000

CMD ["node", "dist/src/main"]

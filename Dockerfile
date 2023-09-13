# Specify the base image
FROM node:20.6-alpine3.17 AS base

ENV NODE_VERSION 20.6.1

FROM base as builder
RUN apk add --no-cache libc6-compat
# Install pnpm globally
RUN npm install -g pnpm
RUN apk update

# Set the working directory in the container
WORKDIR /app
COPY . .

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
# Install pnpm globally
RUN npm install -g pnpm
RUN apk update
WORKDIR /app
COPY . .

# First install dependencies (as they change less often)
RUN pnpm install

# Build the project and its dependencies
RUN pnpm build

FROM base AS runner
# Install pnpm globally
RUN npm install -g pnpm
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER nodejs
COPY --from=installer app/ .

CMD ["pnpm", "start"]
# Stage 1: build
FROM node:22-bullseye AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install && npm cache clean --force

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

# Stage 2: production image
FROM node:22-bullseye-slim

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

COPY --from=builder /app/dist ./dist

RUN useradd -m appuser
USER appuser

EXPOSE 3000
CMD ["node", "dist/src/server.js"]

FROM node:alpine AS builder

WORKDIR /app/static
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM alpine:latest
COPY --from=builder /app/static/build /app/static

# Stage 1: Build the Next.js app
FROM node:alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Run the Next.js app
FROM node:alpine

WORKDIR /app

COPY --from=build /app .

EXPOSE 3001

CMD ["npm", "start"]

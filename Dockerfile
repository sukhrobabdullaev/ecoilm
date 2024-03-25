# Node.js runtime imkoniyatlari
FROM node:latest

# Ishlash direktoriyasini aniqlash
WORKDIR /app

# Ilgari yuklangan fayllarni docker image-ga nusxalash
COPY package*.json ./

# Node.js ilovasi uchun modullarni o'rnatish
RUN npm install

# Ilgari yuklangan barcha kodlarni docker image-ga nusxalash
COPY . .

# Portni ajratish
EXPOSE 3001

# Ilova ishga tushirish
CMD ["npm", "start"]

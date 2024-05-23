# Rasm yaratish uchun bazaviy image sifatida Node.js rasmidan foydalanamiz
FROM node:14-alpine

# Ishchi katalog yaratish va unga o'tish
WORKDIR /app

# package.json va package-lock.json fayllarini ishchi katalogga nusxalash
COPY package*.json ./

# Node.js paketlarini o'rnatish
RUN npm install

# Ilovaning barcha kodini ishchi katalogga nusxalash
COPY . .

# Ilovani build qilish
RUN npm run build

# build katalogini Nginx serverda xizmat ko'rsatish uchun Nginx rasmini ishlatamiz
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Nginx konfiguratsiyasini sozlash (agar kerak bo'lsa)
# COPY nginx.conf /etc/nginx/nginx.conf

# Portni ochish
EXPOSE 3001

# Nginx serverni ishga tushirish
CMD ["nginx", "-g", "daemon off;"]


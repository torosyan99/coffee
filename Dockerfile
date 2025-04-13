FROM node:20

WORKDIR /app

# Копируем только зависимости
COPY package.json package-lock.json ./

# Установка (в Docker под Linux)
RUN npm install

# Теперь копируем всё остальное (src, public и т.д.)
COPY . .

EXPOSE 3000

ENV CHOKIDAR_USEPOLLING=true

CMD ["npm", "run", "dev"]

# Usa a imagem oficial do Nginx como base
FROM nginx:latest

#projeto -> container
COPY . /usr/share/nginx/html

# Expose porta 80 -> servidor
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

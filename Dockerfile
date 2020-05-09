FROM node:14.2.0-alpine as build-deps
WORKDIR /app
COPY . ./
ARG REACT_APP_BACKEND_URL
RUN npm run build

FROM nginx:1.18.0-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

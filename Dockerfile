# STAGE 1
# Build the react software which should be deploy into an NGINX server for stage 2
# Base image to be use to Build image is node
FROM node:16 as builder

# define the work directory to be the app dir
WORKDIR /app

# copy the package json for dependency installation
COPY package*.json .

# install the dependencies
#RUN install -g npm@9.8.1
RUN npm install --legacy-peer-deps

# copy the code into the container
COPY . .

#RUN npm run build

#RUN npm run dev

#EXPOSE 5173
EXPOSE 80

ENTRYPOINT ["npm", "run", "dev"]
#ENTRYPOINT ["npm", "start"]
###############################
# STAGE 2
# DEFINE base image
#FROM nginx

# Define work directory
#WORKDIR /usr/share/nginx/html

# remove the default rendering file
#RUN rm -rf ./*

# copy built file from stage 1 into the html folder
#COPY --from=builder /app/build .

#ENTRYPOINT ["nginx", "-g", "daemon off;"]




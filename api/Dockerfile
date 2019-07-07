# Use the latest version of Node
FROM mhart/alpine-node:latest

# Install Nodemon
RUN npm install nodemon -g

# Create app directory
WORKDIR /usr/src/api

# Copy package.json for build
COPY package.json ./
COPY package-lock.json ./

# Install npm dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port 4200
EXPOSE 4200

# Run process
CMD ["nodemon", "--exec", "npm", "run", "babel-node", "--", "src/index.js"]
# Use the latest version of Node
FROM mhart/alpine-node:latest

# Create app directory
WORKDIR /usr/src/app

# Copy package.json for build
COPY package.json ./
COPY package-lock.json ./

# Install npm dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port 4200
EXPOSE 3000

# Run process
CMD ["npm", "start"]
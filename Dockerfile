# NODE_VERSION 22.14.0
FROM node:lts-bullseye

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Serve the app
CMD ["npm", "run", "dev"]
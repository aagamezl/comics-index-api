FROM node:14.16.0

# Create Directory for the Container
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Run npm and install modules
RUN npm ci

# Copy all other source code to work directory
ADD . /usr/src/app

# Compile TypeScript
RUN npm run build

# Expose application port
EXPOSE 4000

# Run start command
CMD ["npm", "run", "start"]

FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production
RUN npm link test
# Install Mocha
RUN npm i --global mocha
#Install istanbul
RUN npm install --save-dev nyc
#Install HTML report generator
RUN npm install -g mochawesome mochawesome-report-generator
# Bundle app source
COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]

FROM node:12.16-alpine
WORKDIR /app
COPY package.json yarn.lock tsconfig.json /app/
COPY src /app/src
RUN yarn install --frozen-lockfile \
    && yarn tsc
CMD ["node", "."]

FROM node:18-alpine as development

USER node

WORKDIR /home/node
COPY --chown=node:node package*.json yarn.lock ./
RUN yarn
COPY --chown=node:node . .

RUN npm run build

CMD ["node", "dist/main.js"]
FROM node:20-slim

RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    iproute2 \
    net-tools \
    iputils-ping \
    dnsutils \
    vim \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /opt/node_modules
RUN npm config set cache /opt/npm-cache

WORKDIR /workspace

ENV NODE_ENV=development
ENV PATH=$PATH:/workspace/node_modules/.bin

CMD ["bash"] 
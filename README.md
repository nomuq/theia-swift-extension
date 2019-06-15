# Theia Swift Extension

An extension for the Theia-IDE to support the Swift language, using the
[Swift language server](https://github.com/apple/sourcekit-lsp).

## Getting started

### Local Development
Install [nvm](https://github.com/creationix/nvm#install-script).

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash

Install npm and node.

    nvm install 8
    nvm use 8

Install yarn.

    npm install -g yarn

## Running the browser example

    yarn rebuild:browser
    cd browser-app
    yarn start

Open http://localhost:3000 in the browser.

## Running the Electron example

    yarn rebuild:electron
    cd electron-app
    yarn start

## Developing with the browser example

Start watching of the swift extension.

    cd swift
    yarn watch

Start watching of the browser example.

    yarn rebuild:browser
    cd browser-app
    yarn watch
    yarn start

Open http://localhost:3000 in the browser.

## Developing with the Electron example

Start watching of the swift extension.

    cd swift
    yarn watch

Start watching of the electron example.

    yarn rebuild:electron
    cd electron-app
    yarn watch
    yarn start
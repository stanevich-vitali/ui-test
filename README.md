# Universal shopping cart (USC)

[![N|Solid](https://github.inbcu.com/avatars/u/5656?s=200)](https://www.nbc.com)

Universal shopping cart is an embeddable application used to buy goods in internet not leaving your favorite website.

## Components

This project consists of two major components:

-   usc-outlet - it's a container implemented via webcomponent with Stencil library and aimed to be injected to any website developed with any technology stack
-   usc-widget - it's React.js application embedded into the outlet and it contains the main logic of checkout mechanism

## Usage

1. Install nodejs platform. See node/npm versions in package.json of the root directory.
2. Before you start using packages, make sure you have **serverless** npm package installed globally:
    ```shell script
    npm i -g serverless
    ```
3. Then in the root directory run `npm i`. This will install linters and git hooks.
4. For building React application, please execute
    ```shell script
     cd ./usc-outlet && npm i && npm run build
    ```
5. In order to launch universal shopping cart locally, it's necessary to execute:
    ```shell script
     cd ./usc-outlet && npm i && npm start
    ```
6. If you would like to deploy the solution to AWS dev environment, then:
    ```shell script
     cd ./usc-outlet && npm i && npm run build && serverless client deploy
    ```

## Running tests

To run the tests for container, please launch the following command line:

```shell script
cd ./usc-outlet && run test
```

To run the tests for the application, please launch:

```shell script
cd ./usc-widget && run test
```
"# ui-test" 

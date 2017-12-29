# ⚡ serverless-heroku-addon

A starter template to provision heroku resources using serverless and dynamodb

## Features

* `serverless-offline` and `serverless-dynamodb-local` for local development.
* Uses local dynamo when running offline locally
* `Webpack` preconfigured for use of es6/7
* Premade and tested functions for all heroku resource requirements as specified on [Heroku - Building Add-on](https://devcenter.heroku.com/articles/building-an-add-on)


## Getting Started

See deployment for notes on how to deploy to AWS.

### Prerequisites

1. Make sure you're aws keys are set up in `~/.aws/credentials`
2. Make sure you have serveless installed.

```
npm install -g serverless
```

3. Also don't forget to:

```
npm install
```

4. Install dynamodb serverless libs
```
sls dynamodb install
```

5. Initialize your own heroku addon with:

```
gem install kensa
kensa init
```

6. Edit `addon-manifest.json` to fit your needs

## Running the tests

To run unit tests simply run

```
npm run test
```

To run heroku kensa tests run:

`npm run start` and then separately run `kensa test`

## Deployment

In order to run create the stack in AWS run:

```
npm run stack-create
```

## Tear down

To clean up run:

```
npm run stack-destroy
```


## Built With

* [serverless](https://github.com/serverless/serverless) - The Serverless Framework
* [serverless-offline](https://github.com/dherault/serverless-offline) - Emulate AWS λ and API Gateway locally when developing your Serverless project
* [webpack](https://github.com/webpack/webpack) - A bundler for javascript and friends

## Contributing

All contributions are welcome. Make a pull request wiihooo 🤠

## Authors

* **Kostas Vaggelakos**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

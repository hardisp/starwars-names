# Starwars names search

This is just tested to create new npm package

## Setup initial npm user globally

Maybe yo won't to repeat action to initialize yor identify every you create new npm package. So, you can initial your user data with npm init-[oprions].

```bash
npm set init-author-name 'Your name'
npm set init-author-email 'your-email@mail.com'
npm set init-author-url 'http://yoururl.com'
npm set init-license 'MIT' # Or other license you want

### Check all good with below command: ####
cat ~/.npmrc

# you will see all records you create before

# Save it exact to true

npm set save-exact true
```

## Login to your NPM account

To publish your npm package you neet to have a `npm account`. You can create account [here](https://www.npmjs.com). If you had an account, you can setup your account locally with below command: 

```bash
npm adduser
```

## Begin your project

Go to your project folder and initial your npm package with below command: 

```bash
npm init
```

## Publish project to NPM

In project folder run publish command:

```bash
npm publish
```

> Make sure you already logged in

Then you can check your npm package info with command below:

```bash
npm info beginner-starwars-search # your package name
```

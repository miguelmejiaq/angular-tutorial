# AngularTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project creation

First, you must install Angular CLI for build/work Angular projects.

```bash
npm i -g @angular/cli
```

Then, you can run the `ng new <project name>` for project creations.

``` bash
ng new angular-tutorial
```

## Add project to Github Repository

Before add this code to your Github repo. You must init and run an initial commit of code.

```bash
git init
git status
git add .
git commit -m "Initial commit"
```

Next, On github, create a repository and use the url in the next code lines:

```bash
git remote add origin <url of github repository>
git push origin 
```

Finally you can see your updated repository on Github.


## Project dependences

[Angular Material](https://material.angular.io/)

```bash
ng add @angular/material
```

This command ask you about typography and Animations. select Y in both questions. <br/>
Finally, you can use any theme of your preference.

[Angular Flex Layout](https://github.com/angular/flex-layout)

```bash
npm i -s @angular/flex-layout @angular/cdk

```
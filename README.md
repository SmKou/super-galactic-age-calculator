# Super Galactic Age Calculator

By: Stella Marie

App for calculating human and dog ages on other planets.

View on [Github Pages](https://username.github.io/super-galactic-age-calculator/)

## **Technologies Used**

- HTML5
- CSS3
- Skeleton 2.0.4 by Dave Gamache
- Node.js
  - Webpack
  - ESLint
  - Jest
  - Babel

## **Description**

Super Galactic Age Calculator converts age in earth years to the equivalent on other planets, namely Mercury, Venus, Mars and Jupiter. The age can either be in human years or dog years. The standard conversion is 1 to 7 for dog years, but this is adjusted if you choose to base it on a small- or giant-sized dog. For the given age, one can enter an actual age, or have an age calculated from a given year, so long as the year is not 150 or less.

View on [Github Pages](https://username.github.io/super-galactic-age-calculator/)

### Under Consideration

- Add celebrities and use their age in the calculator
- Calculate days between birthdays and total since birth

## **Features**

To run the test suite, use the command ```npm run test``` in the terminal. You can also use ```npx jest```.

To create the production ready code for your project, use the command ```npm run build``` in the terminal.

To build and preview your project, use either ```npm run start``` or ```npm start``` in the terminal.

## **Complete Setup**

This project will not be accepting pull requests, but you may fork the project for your own use.

- [repository page](https://github.com/SmKou/super-galactic-age-calculator)
- Fork the project: Click fork and fill out create repo form
- In newly made repo, click Code (clone) and get the .git url

Note when you clone a project, you don't need a local directory with the project's name. If you clone a repo, a directory will be created in the directory you're in unless the directory you clone into has the same name as the project. To clone the project in your terminal:

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

Since this project comes with Node libraries, you'll need to load the project:

```bash
npm install
```

Note:
Optionally, you can remove .DS_Store from .gitignore, if you are not using a Mac.

**Do not forget:**

- Remove unwanted fonts from assets/fonts
- Remove sample img from assets/img

### **Change project references**

package.json
- Line 2 project name

webpack.config.js
- Line 23 title in HtmlWebpackPlugin

README.md
- Line 1 title of project
- Line 3 developer(s) of project
- Line 7 username and repo name in link

index.html
- Line 6 title in head

Change this readme to reflect your project's purpose and setup. Also, do not forget to change the copyright, though I would appreciate some credit.

## **Rendering**

**Github Pages**

```bash
git add .
git commit -m "Save final changes"
git push origin main
git checkout -b gh-pages
git push origin gh-pages
```

**To update Github Pages**

```bash
git add .
git commit -m "Save changes in main"
git push origin main
git checkout gh-pages
git merge main
git push origin gh-pages
```

### **How to render from dist/**

1. Remove dist/ from .gitignore

2.  
```bash
git add dist
git commit -m "Initial dist subtree commit"
```

3.  
```bash
git subtree push --prefix dist origin gh-pages
```

## **Known Bugs**

Please report any issues in using this app.

- No UI

## **License**

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Sm Kou

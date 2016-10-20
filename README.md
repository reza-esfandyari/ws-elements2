# ws-elements project

## Elements for Worksignal Platform
Worksignal is a business platform which accepts adding components from npm website.
ws-elements (current project) hosts all official Worksignal elements in a public open source project which also can be used as a starting point for writing your own commercial components for the future release of Worksignal marketplace.
The components needs to be in a specific format so we created a sample element called el-test to show you an example of a typical Worksignal element.

## How to run this project
Please use the following commands to install the dependencies
```
npm install  (only needed once)
```

Once it downloaded the dependecies use this command to run the app
```
ng serve
```
Now open a browser and goto http://localhost:4200 to see the application in browser.
If the applicationed did not get loaded please press F12 and check the possible errors in console tab.

## What can I learn from this project?
In addition to the source code of official components, this project is a simple runtime to test your own Worksignal components written in typescript for Angular2 framework, compatible with angular-cli.
We have an example component that you can check and use as a reference and starting point:
- The example element `el-test` is located at https://github.com/metacoding/ws-elements/tree/develop/src/app/el-test
- The example element package can be found in this npm URL: https://www.npmjs.com/package/el-test

## List of all existing components 
| Component name | Purpose                                                                              | Link to source code                                                    | Official Worksignal component? |
|----------------|--------------------------------------------------------------------------------------|------------------------------------------------------------------------|--------------------------------|
| el-home        | Shows the first page of ws-elements                                                  | https://github.com/metacoding/ws-elements/tree/develop/src/app/el-home | No                             |
| el-test        | Example of a typical Worksignal component                                            | https://github.com/metacoding/ws-elements/tree/develop/src/app/el-test | No                             |
| el-appstate    | Acts as a common state object for the whole application with subscription to changes | Under construction                                                     | Yes                            |
| el-auth        | Authentication component based on Google API                                         | Under construction                                                     | Yes                            |
###### Table created by http://www.tablesgenerator.com/markdown_tables#

##Steps to add a new element to this project

###1- Generate a component using Angular CLI

- First make sure your current directory is `src/app`
- Use `ng g c el-ANYNAME` command to create your component which will be a Worksignal element


###2- Generate test page for your component using Angular CLI

  - You need to name the test page as `el-ANYNAME-page`
  - Go to `src/app/el-ANYNAME` folder and create a new component named as above as your test page.
  - Go to `src/app/el-ANYNAME-page` folder and open the HTML file
  As a starting point, just put two lines in it
    
      - A title in the first line like what you see in el-test example
      - Your component HTML tag in the second line: `<el-ANYNAME>`
      - To show how your component works, after a `<hr>` tag in third line, you can add any other control bound to your properties

###3- Add your test page to routing and menu

  - Open the file `app-routing.module.ts` and:
  
    - Import your test page as we did for ElTestPageComponent
    - add your test page to the routes array you need to choose a path (route) like test
    For example the test page we built for el-test can be shown by requesting http://localhost:4200/test
  
  - Open the file `app-component.html` and add a new menu item using the route you just added earlier
  - Now you should see your component name as a link in top of the main page. test the page by clicking on the link


###4- publish your component to npm website

  - Please add a README.md file to the root folder of your element
  - Add a package.json similar to the one we added for el-test example component. you need to change the repository URL to yours.
  - In command prompt go to the root folder of your element
  - Use `npm adduser` command to login to your npm account
  - Make sure your have a correct version increment in your package.json
  - If you want to exclude some files, please use .npmignore file
  - Use `npm publish` to publish all files into npm website
  - Update all .md documents


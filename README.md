# e2e testing frameworks overview - testcafe & cypress

## Setup project steps

1. `yarn create next-app --example with-typescript .`
1. `git init`

### Setup testcafe framework

1. `git checkout -b testcafe`
1. `yarn add -D testcafe testcafe-react-selectors` more info on [testcafe-react-selectors](https://github.com/DevExpress/testcafe-react-selectors)
1. create new file `.vscode/launch.json`
   ```json
   {
     "type": "node",
     "protocol": "inspector",
     "request": "launch",
     "name": "Launch test files with TestCafe",
     "program": "${workspaceRoot}/node_modules/testcafe/bin/testcafe.js",
     "args": ["chrome", "${relativeFile}"],
     "console": "integratedTerminal",
     "cwd": "${workspaceRoot}"
   }
   ```
1. Create test file `tests/main.ts`

   ```ts
   import { Selector } from "testcafe";

   fixture`Getting Started`
     .page`http://devexpress.github.io/testcafe/example`;

   test("My first test", async t => {
     await t
       .typeText("#developer-name", "John Smith")
       .click("#submit-button")

       // Use the assertion to check if the actual header text is equal to the expected one
       .expect(Selector("#article-header").innerText)
       .eql("Thank you, John Smith!");
   });
   ```

### Good to know

- Run mobile version `testcafe "chrome:emulation:device=iphone X" tests/sample-fixture.js`
- `-S`, `--screenshots-on-fails` take a screenshot whenever a test fails

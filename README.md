# cms-protractor-fw
Protractor javascript framework

## Setup framework

Preconditions: Ruby, Python, Node.js

Preconditions

    npm install -g grunt-cli

Open a command window and run:

    npm install 
    (Could be some errors with protractor. Just ignore it)
    
Then

    npm install --ignore=scripts
    
Then once more

    npm install
    
This install all necessary dependencies 

Then update webdriver:

    grunt webdriver:update
    or
    node_modules\.bin\webdriver-manager update

Then will be possible to execute tests using runner.bat or 

    grunt e2e 



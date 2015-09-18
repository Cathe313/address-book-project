var Promise = require('bluebird');
var prompt = require('prompt');
var request = require('request');
var inquirer = require('inquirer');
var cliTable = require('cli-table');

prompt = Promise.promisifyAll(prompt);
request = Promise.promisify(request);

//Address book constructor:

function addressBook (fn, ln, /*bd,*/ a1, c ) {
        this.firstName = fn;
        this.lastName = ln;
        //this.birthday = bd;
        this.address1 = a1;
        this.city = c;
}


//Main menu

function mainMenu() {
    console.log('This is the main menu. What do you want to do?')
    console.log('To create a new address book entry, press C.')
    console.log('To search for existing address book entries, press S.')
    console.log('To exit the program, press X.')
    
//Prompting the user for what they want to do:

    inquirer.prompt(['Your choice'], function( err, res ) {
        switch(res) {
            case ('C'):
                creator();
                break;
            case ('S'):
                searcher();
                break;
            case ('X'):
                quitter();
                break;
            default:
                console.log('Learn to spell.')
                break;
        }
    }).catch(function(err){
        console.log("There's something wrong!\n" + err);
    })
}

//The creator function is used to create new entries in the address book:

function creator() {};

//The searcher function is used to search entries in the address book:

function searcher() {
    prompt.get(['enter search item here: '], function(err1, res1){
        var userInput = res1;
    }).then //search in addressBook object
};

//The quitter function is used to leave the address book:

function quitter(){};

mainMenu()


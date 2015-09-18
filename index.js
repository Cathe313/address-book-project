var Promise = require('bluebird');
var prompt = require('prompt');
var request = require('request');
var inquirer = require('inquirer');
var cliTable = require('cli-table');

//prompt = Promise.promisifyAll('prompt');
//request = Promise.promisify('request');

//Main menu

function mainMenu() {
    console.log('This is the main menu. What do you want to do?')
    console.log('To create a new address book entry, press C.')
    console.log('To search for existing address book entries, press S.')
    console.log('To exit the program, press X.')
}

inquirer.prompt.getAsync(['Choice'], function( answers ) {
    switch(answers) {
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
})

function creator() {};

function searcher() {};

function quitter() {};

mainMenu()


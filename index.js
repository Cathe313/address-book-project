var Promise = require('bluebird');
var prompt = require('prompt');
var request = require('request');
var inquirer = require('inquirer');
var cliTable = require('cli-table');

prompt = Promise.promisifyAll(prompt);
request = Promise.promisify(request);

//Address book constructor:

function addressBook (fn, ln, bd, a1, a2, c, p, pc, pn, pt, e) {
    this.firstName = fn;
    this.lastName = ln;
    this.birthday = bd;
    this.homeAddress1 = a1;
    this.homeAddress2 = a2;
    this.homeCity = c;
    this.homeProvince = p
    this.homPostalCode = pc;
    this.homeCountry = 'Canada';
    this.phoneNumber = pn;
    this.phoneType = pt;
    this.email = e;
}

addressBook.prototype = {
}


//Main menu

function mainMenu() {
    console.log('This is the main menu. What do you want to do?')
    console.log('To create a new address book entry, press C.')
    console.log('To search for existing address book entries, press S.')
    console.log('To exit the program, press Q.')
    
//Prompting the user for what they want to do:

    inquirer.prompt(['Your choice (C, S or Q): '], function( err, res ) {
        switch(res) {
            case ('C'):
                creator();
                break;
            case ('S'):
                searcher();
                break;
            case ('Q'):
                console.log('ok bye');
                return;
            default:
                console.log('Learn to spell.')
                break;
        }
    })
}

//The creator function is used to create new entries in the address book:

function creator() {
    prompt.get(['First Name:', 'Last Name:', 'Birthday (optionnal):', 'Address:', 'Address(continued):', 
    'City:', 'Province:', 'Postal Code:'], function(err1, fn, ln, bd, a1, a2, c, p, pc, pn, pt, e) {
        if (!err1) {
            var obj = new addressBook (fn, ln, bd, a1, a2, c, p, pc, pn, pt, e);
            console.log(obj);
            mainMenu();
        }
        else {
            console.log('There has been an error with the address book entry creator: ' + err1)
        }
    })
};

//The searcher function is used to search entries in the address book:

function searcher() {
    prompt.get(['enter search item here: '], function(err2, res2){
        var userInput = res2;
    }).then (function(res){
        //search in addressBook object
    }).then (function(objectSelected){
        console.log('What do you want to do now with ' + objectSelected + '?');
        console.log('To edit this entry, press E');
        console.log('to delete this entry, press X.');
        console.log('To go back to the main menu, press M');
        prompt.getAsync(['Select an option (E, X or M:'], function(err3, res3){
            switch(res3) {
                case('E'):
                    editor(objectSelected);
                    break;
                case('X'):
                    delete objectSelected;  //need to define this variable for the object
                    break;
                case('M'):
                    mainMenu();
                    break;
                default:
                    console.log("Please enter a valid option!");
                    break;
            }
        }).catch(function (err){
            console.log('Error in the search function: ' + err);
        })
    })    
};

//This function is used to edit an entry in the address book:

function editor(objectSelected){
    console.log('Which property do you wish to change? Your choices are: \n')
    prompt.getAsync(['Property to change:', 'Changing it to: '], function (err4, res4, res5){
        if (!err) {
            objectSelected.res4 = res5;
        }
        else {
            console.log('Have you spelled your choice correctly? There has been an error: ' + err4);
        }
    }).then (function(res4){
        console.log('The' + res4 + 'has been modifed accordingly. Back to the main menu with you!');
        mainMenu();
    })
};


mainMenu()


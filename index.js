/**
  * THIS IS A NODE.JS ONLY SCRIPT.
**/
const {stdin,stdout} = require('process');
const readline = require('readline');
const chalk = require('chalk');

const rl = readline.createInterface({'input': stdin,'output': stdout})

function mainStep() {
    rl.question('String Length: ', (theLength) => {
        const stringLength = parseInt(theLength);
        if (!Number(theLength)){
            console.log(chalk.red('This is not a number.'))
            return mainStep()
        } else {
            secondStep()
        }
        function secondStep() {
            rl.question('String Amount: ', (theAmount) => {
                const numberOfStrings = parseInt(theAmount);
                if (!Number(theAmount)){
                    console.log(chalk.red('This is not a number.'))
                    return secondStep()
                } else {
                    let randomStringBase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_';

                    const randomStrings = Array.apply(null, Array(numberOfStrings)).map((x) => {
                        let randomString = "";
                        for (var i = 0, n = randomStringBase.length; i < stringLength; ++i) {
                          randomString += randomStringBase.charAt(Math.floor(Math.random() * n));
                        }
                        return randomString;
                    });
                      console.log(randomStrings.join("\n"))
                      rl.close()
                }
            })
        }
    })
    
}
mainStep()

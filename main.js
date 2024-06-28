import inquirer from "inquirer";
import chalk from "chalk";
//------------CURRENCY CONVERTOR-----------
const currency = {
    USD: 1, //Base currency
    PKR: 278,
    INR: 83,
    ZMK: 25,
    IQD: 1310,
    JPY: 156,
};
let User = await inquirer.prompt([
    {
        name: "from",
        message: "Enter Currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "ZMK", "IQD", "JPY"]
    },
    {
        name: "To",
        message: "Convert to",
        type: "list",
        choices: ["USD", "PKR", "INR", "ZMK", "IQD", "JPY"]
    },
    {
        name: "Amount",
        message: "Enter the amount you want to convert",
        type: "number"
    }
]);
let currencyFrom = currency[User.from];
let currencyTo = currency[User.To];
let Amount = User.Amount;
let baseAmount = Amount / currencyFrom;
let convertedAmount = baseAmount * currencyTo;
console.log(chalk.green `💱 -- Your converted amount is ${convertedAmount}`);

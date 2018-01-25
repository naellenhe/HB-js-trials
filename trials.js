// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printAccountInfo(name, number, business) {
    console.log(`Account Holder Name: ${name}`);
    console.log(`Account Holder Number: ${number}`);
    console.log(`Business Name: ${business}`);
}

// Add function to print all addresses, including a header

function showAddresses(addresses){
    console.log(`Addressess:`);
    for (let address of addresses){
        console.log(`${address}`);
    }
}

// Add function to print phone types and numbers
function showPhones(phoneNumbers){
    console.log(`Phone Numbers:`);
    for (let number of phoneNumbers){
        console.log(`${number[0]} : ${number[1]}`);
    }
}


// ///////////////////////////////////////////////////////
// Transactions:

// Create a map of transactions
let transactions = new Map ([
    ['May-2', -500],
    ['May-13', 1200],
    ['May-15', -100],
    ['May-21', -359],
    ['May-29', 2200]
    ]);


// Add function to add transactions
function addTransaction(date, amt) {
    transactions.set(date, amt);
}

// Add function to show balance status
function showBalanceStatus(balance){
    if (balance < 0){
        console.log(`YOU ARE OVERDRAWN`);
    } else if (balance < 20){
        console.log(`Warning: You are close to zero balance`);
    } else {
        console.log(`Thank you for your business.`);
    }
}

// Add function to show transactions
function showTransactions(transactionMap, startBalance) {
    let endBalance = startBalance;
    console.log(`Balance ${startBalance}`);
    for (let transaction of transactionMap) {
        console.log(`date: ${transaction[0]}`);
        if (transaction[1] > 0) {
            console.log(`deposit ${transaction[1]}`);
        }
        if (transaction[1] < 0) {
            console.log(`withdrawal ${transaction[1]}`);
        }
        endBalance = endBalance + transaction[1];
        console.log(`current balance: ${endBalance}`);
    }
    if (endBalance < 0) {
        endBalance = endBalance - 25;
    }
    console.log(`${endBalance}`);
    showBalanceStatus(endBalance);
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info
const account = {
    "Account Holder": accountHolder,
    "Account Number": accountNumber,
    "Business Name": businessName,
    "Addresses": addresses,
    "Phone Numbers": phoneNumbers,
    "Transactions": transactions,
    "Starting Balance": 26000
};

// Function to add customer attributes
function addInfo (melon='Canteloupe', pets=0) {
    account["Favorite melon"] = melon;
    account["Number of pets"] = pets;
}


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate
function getLoan(income) {
    let isPreferred = false;
    if (account["Favorite melon"] === "Casaba" ||
    account["Number of pets"] > 5) {
        isPreferred = true;
    }
    if (isPreferred === true) {
        if (income < 100000) {
            rate = 0.05;
        } else if (income > 200000) {
            rate = 0.04;
        } else {
            rate = 0.04;
        }
    }
    else {
         if (income < 100000) {
            rate = 0.08;
        } else if (income > 200000) {
            rate = 0.04;
        } else {
            rate = 0.07;
        }
    }

    return rate;
}

// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours







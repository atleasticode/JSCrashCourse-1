//  A Banking System
//  Relations: 1 bank <-> n clients, 1 bank <-> n accounts, 1 client <-> 1 account


var Bank = class {
    constructor(instituteName){
        this.instituteName=instituteName
        this.clientList = []
        console.log("New Bank created: " + instituteName)
    }
    addClient(newClient){
        this.clientList.push(newClient)
        console.log("New Client added to", this.instituteName, ":", newClient.name)
    }
}


var Client = class {
    constructor(clientName){
        this.name = clientName
        console.log("New Client created:", clientName)
    }
    createAccount(){
        var account = new Account()
        this.balance = 0
        console.log("New account created with account number", account.accountNumber, "for", this.name)
    }
    getBalance(){
        return this.balance
    }
    setBalance(newBalance){
        this.balance = newBalance
    }
    increaseBalance(amount){
        var currentBalance = this.getBalance()
        this.setBalance(currentBalance += amount)
        console.log("Account balance of", this.name, "increased by", amount,". New Balance:", this.balance)
    }
    decreaseBalance(amount){
        var currentBalance = this.getBalance()
        this.setBalance(currentBalance -= amount)
        console.log("Account balance of", this.name, "decreased by", amount,". New Balance:", this.balance)
    }
}


var Account = class {
    constructor(){
        this.accountNumber = Math.floor(Math.random() * 9999) + 1000   
    } 
}

//The Friendly Bank
var friendlyBank = new Bank("The Friendly Bank")

var client1 = new Client("Hans Miller")
friendlyBank.addClient(client1)
client1.createAccount()
client1.increaseBalance(100.13)
client1.decreaseBalance(200)

console.log(" ")

var client2 = new Client("Anna Smith")
friendlyBank.addClient(client2)
client2.createAccount()
client2.increaseBalance(3000)
client2.decreaseBalance(499.60)

console.log(" ")

var client3 = new Client("Nina Gomez")
friendlyBank.addClient(client3)
client3.createAccount()
client3.increaseBalance(1200)
client3.decreaseBalance(13.99)

console.log(" ")
console.log(friendlyBank)
console.log(" ")

//The Better Bank
var betterBank = new Bank("The Better Bank")

var client4 = new Client("Zachariah Goldstein")
betterBank.addClient(client4)
client4.createAccount()
client4.increaseBalance(6000)

console.log(" ")

var client5 = new Client("Li Jin")
betterBank.addClient(client5)
client5.createAccount()
client5.increaseBalance(8000)
client5.decreaseBalance(799.60)

console.log(" ")

var client6 = new Client("Anjali Kumar")
betterBank.addClient(client6)
client6.createAccount()
client6.increaseBalance(4000)
client6.decreaseBalance(500)

console.log(" ")
console.log(betterBank)
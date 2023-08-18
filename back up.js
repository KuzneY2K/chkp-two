// Global Variables
let cheese = 0
let cheeseOutput = document.querySelector('.cheese-total')
let clickUpgradeCostOne = document.querySelector('.click-upgrade-cost-1')
let clickUpgradeCostTwo = document.querySelector('.click-upgrade-cost-2')
let autoUpgradeCostOne = document.querySelector('.auto-upgrade-cost-1')
let autoUpgradeCostTwo = document.querySelector('.auto-upgrade-cost-2')
let cheesePerClickOut = document.querySelector('.cheese-pc')
let cheesePerSecOut = document.querySelector('.cheese-ps')
let qtyKnivesOut = document.querySelector('.qty-knives-out')
let qtyKnivesPC = document.querySelector('.qty-knives-out-2')
let qtyFriendsOut = document.querySelector('.qty-friends-out')
let qtyFriendsPS = document.querySelector('.qty-friends-out-2')
let buyKnifeButton = document.querySelector('.buy-knife-btn')
let buyKnifeButton2 = document.querySelector('.buy-knife-btn-2')
let buyFriendsButton = document.querySelector('.buy-friend-btn')
let buyFriendsButton2 = document.querySelector('.buy-friend-btn-2')

// Arrays
let clickUpgrades = [{
    name: 'Cheese Knife',
    price: 50,
    quantity: 1,
    multiplier: 1,
}]

let autoUpgrades = [{
    name: 'Friend',
    price: 200,
    quantity: 1,
    multiplier: 2,
}]

// Functions
function mine() {
    cheese += clickUpgrades[0].quantity * clickUpgrades[0].multiplier
    updateDOM()
}

function updateDOM() {
    cheeseOutput.innerHTML = cheese
    clickUpgradeCostOne.innerHTML = clickUpgrades[0].price
    clickUpgradeCostTwo.innerHTML = clickUpgrades[0].price * 2
    autoUpgradeCostOne.innerHTML = autoUpgrades[0].price
    autoUpgradeCostTwo.innerHTML = autoUpgrades[0].price * 4
}

function buyCheeseKnife() {
    if (cheese >= clickUpgrades[0].price) {
        cheese -= clickUpgrades[0].price
        clickUpgrades[0].quantity += 1
        clickUpgrades[0].price *= 2
    } else if (cheese < clickUpgrades[0].price) {
        buyKnifeButton.classList.toggle('disabled')
    }
    // DISABLE BUTTONS IS CHEESE IS LESS
    updateDOM()
}

function buyFriend() {
    if (cheese >= autoUpgrades[0].price) {
        cheese -= autoUpgrades[0].price
        autoUpgrades[0].quantity += 1
        autoUpgrades[0].price *= autoUpgrades[0].quantity
    } else if (cheese < clickUpgrades[0].price) {
        buyKnifeButton2.classList.toggle('disabled')
    }
    updateDOM()
}

function buyMoreKnives() {
    if (cheese >= clickUpgrades[0].price * 5) {
        cheese -= clickUpgrades[0].price * 5
        clickUpgrades[0].quantity += 5
        clickUpgrades[0].price *= 4
    } else if (cheese < autoUpgrades[0].price) {
        buyFriendsButton.classList.toggle('disabled')
    }
    updateDOM()
}

function buyMoreFriends() {
    if (cheese >= autoUpgrades[0].price * 5) {
        cheese -= clickUpgrades[0].price * 5
        autoUpgrades[0].quantity += 5
        autoUpgrades[0].price *= autoUpgrades[0].quantity
    } else if (cheese < autoUpgrades[0].price) {
        buyFriendsButton2.classList.toggle('disabled')
    }
    updateDOM()
}

// Intervals

setInterval(function () {
    cheese += autoUpgrades[0].quantity * autoUpgrades[0].multiplier
    updateDOM()
}, 1000)

setInterval(function () {
    cheesePerClickOut.innerHTML = clickUpgrades[0].quantity * clickUpgrades[0].multiplier
    cheesePerSecOut.innerHTML = autoUpgrades[0].quantity * autoUpgrades[0].multiplier
}, 100)

setInterval(function () {
    qtyKnivesOut.innerHTML = clickUpgrades[0].quantity
    qtyFriendsOut.innerHTML = autoUpgrades[0].quantity
    qtyKnivesPC.innerHTML = clickUpgrades[0].quantity * clickUpgrades[0].multiplier
    qtyFriendsPS.innerHTML = autoUpgrades[0].quantity * autoUpgrades[0].multiplier
}, 100)

setInterval(function () {
    if (cheese < clickUpgrades[0].price) {
        buyKnifeButton.classList.add('disabled')
    }
    if (cheese < clickUpgrades[0].price * 5) {
        buyKnifeButton2.classList.add('disabled')
    }
    if (cheese >= clickUpgrades[0].price) {
        buyKnifeButton.classList.remove('disabled')
    }
    if (cheese >= clickUpgrades[0].price * 5) {
        buyKnifeButton2.classList.remove('disabled')
    }
}, 100)

setInterval(function () {
    if (cheese < autoUpgrades[0].price) {
        buyFriendsButton.classList.add('disabled')
    }
    if (cheese < autoUpgrades[0].price * 5) {
        buyFriendsButton2.classList.add('disabled')
    }
    if (cheese >= autoUpgrades[0].price) {
        buyFriendsButton.classList.remove('disabled')
    }
    if (cheese >= autoUpgrades[0].price * 5) {
        buyFriendsButton2.classList.remove('disabled')
    }
}, 100)

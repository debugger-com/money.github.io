let flopMoneyBalance = 0;
let boxesPurchased = 0;

const updateBalance = () => {
  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = flopMoneyBalance;
};

const updateBoxesPurchased = () => {
  const boxesPurchasedElement = document.getElementById('boxesPurchased');
  boxesPurchasedElement.innerText = boxesPurchased;
};

const workForFlopMoney = () => {
  flopMoneyBalance += 5; // You can set the amount earned from work here.
  updateBalance();
};

const purchaseBox = () => {
  if (flopMoneyBalance >= 10) {
    flopMoneyBalance -= 10;
    boxesPurchased++;
    updateBalance();
    updateBoxesPurchased();
  } else {
    alert("Not enough FlopMoney to purchase a box!");
  }
};

const eatBox = () => {
  if (boxesPurchased >= 1) {
    flopMoneyBalance += 10; // You can set the amount earned from eating a box here.
    boxesPurchased--;
    updateBalance();
    updateBoxesPurchased();
    alert("Yum! You just ate a box and gained some FlopMoney!");
  } else {
    alert("You don't have any boxes to eat!");
  }
};

const saveData = () => {
  const data = {
    balance: flopMoneyBalance,
    boxesPurchased: boxesPurchased
  };
  localStorage.setItem('flopMoneyData', JSON.stringify(data));
  alert('Data saved successfully!');
};

const loadData = () => {
  const savedData = localStorage.getItem('flopMoneyData');
  if (savedData) {
    const data = JSON.parse(savedData);
    flopMoneyBalance = data.balance;
    boxesPurchased = data.boxesPurchased;
    updateBalance();
    updateBoxesPurchased();
    alert('Data loaded successfully!');
  } else {
    alert('No saved data found!');
  }
};

document.getElementById('workButton').addEventListener('click', workForFlopMoney);
document.getElementById('purchaseButton').addEventListener('click', purchaseBox);
document.getElementById('eatBoxButton').addEventListener('click', eatBox);
document.getElementById('saveButton').addEventListener('click', saveData);
document.getElementById('loadButton').addEventListener('click', loadData);

// Initial load data from local storage
loadData();

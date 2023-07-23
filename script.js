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
  saveData(); // Save the updated data to local storage
};

const purchaseBox = () => {
  if (flopMoneyBalance >= 10) {
    flopMoneyBalance -= 10;
    boxesPurchased++;
    updateBalance();
    updateBoxesPurchased();
    saveData(); // Save the updated data to local storage
  } else {
    alert("Not enough FlopMoney to purchase a box!");
  }
};

const saveData = () => {
  const data = {
    balance: flopMoneyBalance,
    boxesPurchased: boxesPurchased
  };
  localStorage.setItem('flopMoneyData', JSON.stringify(data));
};

const loadData = () => {
  const savedData = localStorage.getItem('flopMoneyData');
  if (savedData) {
    const data = JSON.parse(savedData);
    flopMoneyBalance = data.balance;
    boxesPurchased = data.boxesPurchased;
    updateBalance();
    updateBoxesPurchased();
  }
};

document.getElementById('workButton').addEventListener('click', workForFlopMoney);
document.getElementById('purchaseButton').addEventListener('click', purchaseBox);
document.getElementById('saveButton').addEventListener('click', saveData);
document.getElementById('loadButton').addEventListener('click', loadData);

// Initial load data from local storage
loadData();

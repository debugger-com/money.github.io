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

document.getElementById('workButton').addEventListener('click', workForFlopMoney);
document.getElementById('purchaseButton').addEventListener('click', purchaseBox);

// Initial updates
updateBalance();
updateBoxesPurchased();

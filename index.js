function expenses() {
    const expArray = [];

    const add = (name, amount) => {
        return { name, amount };
    };

    return {
        expArray,
        add
    };
}

function totalExpenses(expArray) {
    let total = 0;
    for (let i = 0; i < expArray.length; i++) {
        total += expArray[i].amount;
    }
    return total;
}

function visible(form) {
    form.classList.toggle('pop-hidden');
}

function addingExpense(subBtn) {
    const pop = document.querySelector('.pop-hidden');
    const exp = expenses(); 
    const expArr = exp.expArray;
    
    subBtn.addEventListener('click', () => {
        const name = document.querySelector('.name').value;
        const amount = parseFloat(document.querySelector('.number').value); 

        if (name === '' || isNaN(amount)) {
            alert("Enter valid input")
            return;
        }

        const expense = exp.add(name, amount); 
        expArr.push(expense);
        visible(pop);
        createCard(name, amount);
        updateTotal(expArr);
    });

    return {
        expArr
    };
}

function createCard(name, amount){
    const list = document.querySelector('.list');
    const card = document.createElement('div');
    const leftSpan = document.createElement('span');
    const rightSpan = document.createElement('span');
    leftSpan.textContent = name;
    leftSpan.style.marginRight = '4em';
    rightSpan.textContent = amount;
    rightSpan.style.marginLeft = '4em';
    card.appendChild(leftSpan);
    card.appendChild(rightSpan);
    card.classList.add('card');
    list.appendChild(card);
}

function updateTotal(expArray) {
    const totalDisplay = document.querySelector('.total-display');
    totalDisplay.textContent = 'Total: ' + totalExpenses(expArray);
}

function appFlow() {
    const addBtn = document.querySelector('.addBtn');
    const form = document.querySelector('.pop-hidden');
    const subBtn = document.querySelector('.subBtn');

    addBtn.addEventListener('click', () => {
        visible(form);
    });

    addingExpense(subBtn);
}

appFlow();

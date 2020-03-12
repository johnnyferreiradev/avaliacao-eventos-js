const inputsNumberContainer = document.querySelector('#number');
const inputsNumber = inputsNumberContainer.querySelectorAll('input');

const eyeButton = document.querySelector("#show");

function toggleTypePassword() {
    for(let i=0; i<inputsNumber.length; i++) {
        if (inputsNumber[i].type == 'password') {
            inputsNumber[i].type = 'text';
        } else {
            inputsNumber[i].type = 'password';
        }
    }
}

eyeButton.addEventListener('click', toggleTypePassword);


const inputCardName = document.querySelector("#holder input");
const dateInputs = document.querySelectorAll("#date input");
const cvvInput = document.querySelector("#cvv input");

dateInputs.forEach((dateInput) => {
    dateInput.required = 'required';
});

inputCardName.required = 'required';

inputsNumber.forEach((inputNumber) => {
    inputNumber.required = 'required';
});

cvvInput.required = 'required';

const addButton = document.querySelector("form > input");

const cardList = document.querySelector("#card-lists");

addButton.addEventListener('click', (e) => {
    e.preventDefault();

    const divItem = document.createElement('div');
    divItem.classList.value += 'item ';
    const pContainer = document.createElement('p');
    // const strong = document.createElement('strong');
    const small1 = document.createElement('small');
    const small2 = document.createElement('small');
    const span = document.createElement('span');
   
    const numberSide1 = inputsNumber[0].value;
    const numberSide2 = inputsNumber[1].value;
    const numberSide3 = inputsNumber[2].value;
    const numberSide4 = inputsNumber[3].value;
    const cardName = inputCardName.value;
    const dateSide1 = dateInputs[0].value;
    const dateSide2 = dateInputs[1].value;
    const cvv = cvvInput.value;

    if (
        numberSide1 === '' ||
        numberSide2 === '' ||
        numberSide3 === '' ||
        numberSide4 === '' ||
        cardName === '' ||
        dateSide1 === '' ||
        dateSide2 === '' ||
        cvv === ''
    ) {
        alert('Todos os campos são obrigatorios');
        return;
    }

    small1.append(cardName);
    
    small2.append('vencimento ');
    span.append(`${dateSide1}/${dateSide2}`);
    small2.append(span);

    pContainer.append(small1);
    pContainer.append(small2);

    divItem.append(pContainer);

    cardList.append(divItem);
});

const listContainer = document.querySelector('.wrapper');
const listItem = document.querySelectorAll('.wrapper .item');

// Remoção de itens da lista
listItem.forEach((item) => {
    item.addEventListener('click', () => {
        item.remove();
    });
});

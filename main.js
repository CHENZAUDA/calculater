let userInputStr = "";
let leftSide = undefined;
let rightSide = undefined;
let operator = undefined;

let mainInput = document.querySelector('#mainInput');

// Event delegation
document.body.addEventListener('click', function (event) {
    const { target, currentTarget } = event;

    if (target.value) {
        userInputStr += target.value;
        mainInput.value = userInputStr;
        // console.log(userInputStr);
    } else if (target.classList.contains('numbersUp')) {
        operator = target.id;
        leftSide = Number.parseFloat(userInputStr);
        userInputStr = '';
     

    } else if (target.id === 'even') {
        rightSide = Number.parseFloat(userInputStr);
        const result = applyOperator(leftSide, rightSide, operator);
        mainInput.value = result;
     
    }

    else if(target.id === 'recet'){
        rightSide = "";
        leftSide ="";
        userInputStr = "";
        mainInput.value = "";
    }
});


function applyOperator(leftSide, rightSide, operator) {
    switch (operator) {
        case 'mulOpertaor':
            return leftSide * rightSide;

        case 'addOpertaor':
            return leftSide + rightSide;

        case 'divOpertaor':
            return leftSide / rightSide;

        case 'minosOpertaor':
            return leftSide - rightSide;
    }
}



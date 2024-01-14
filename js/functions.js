'use strict'
function showModal () {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
}
function showOrder () {
    const size = getSelectedSize();
    const selectedStuffing = getSelectedStuff();
    const selectedToppings = getSelectedTopping();
    const burger = new Burger(size);
    const parent = document.querySelector('.modal-body');
    const priceContainer = createElement('div', parent, '', {className: 'total__price'});
    const caloriesContainer = createElement('div', parent, '', {className: 'total__calories'});

    burger.addTopping(selectedStuffing);

    selectedToppings.forEach( (topping) => {
        burger.addTopping(topping);
    })

    priceContainer.textContent = `Price: ${burger.showPrice()}`;
    caloriesContainer.textContent = `Calories: ${burger.showCalories()}`;

    showModal();
}
function handleShowOrder () {
    const getCheckedStuffing = document.querySelector('input[name="stuffing"]:checked');
    const getCheckedSize = document.querySelector('input[name="burgerSize"]:checked');
    if (getCheckedStuffing && getCheckedSize !== null) {
        this.setAttribute('data-bs-toggle', 'modal');
        showOrder();
    }
}
function getSelectedSize () {
    const burgerGiant = document.getElementById('burgerGiant').checked;
    const burgerMini = document.getElementById('burgerMini').checked;
    let burger;

    if (burgerGiant) {
        burger = Burger.SIZE_GIANT
    } else if (burgerMini) {
        burger = Burger.SIZE_MINI
    }
    return burger;
}
function getSelectedStuff () {
    const cheese = document.getElementById('cheese').checked;
    const salad = document.getElementById('salad').checked;
    const potato = document.getElementById('potato').checked;

    if (cheese) {
        return Burger.STUFFING_CHEESE;
    } else if (salad) {
        return Burger.STUFFING_SALAD;
    } else if (potato) {
        return Burger.STUFFING_POTATO
    }
}
function getSelectedTopping() {
    const spices = document.getElementById('spices').checked;
    const mayo = document.getElementById('mayo').checked;
    const selectedToppings = [];

    if (spices && mayo) {
        selectedToppings.push(Burger.TOPPING_SPICES, Burger.TOPPING_MAYO);
    } else if (spices) {
        selectedToppings.push(Burger.TOPPING_SPICES);
    } else if (mayo) {
        selectedToppings.push(Burger.TOPPING_MAYO);
    }

    return selectedToppings;
}
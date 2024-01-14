'use strict'

class Burger {
    constructor(size) {
        this.params = {
            size: size,
            topping: [],
        }
    }

    static SIZE_MINI = {
       name: 'SIZE_MINI',
       price: 50,
       calories: 20
    }

    static SIZE_GIANT = {
        name: 'SIZE_GIANT',
        price: 100,
        calories: 40
    }

    static STUFFING_CHEESE = {
        name: 'STUFFING_CHEESE',
        price: 10,
        calories: 20
    }

    static STUFFING_SALAD = {
        name: 'STUFFING_SALAD',
        price: 20,
        calories: 5
    }

    static STUFFING_POTATO = {
        name: 'STUFFING_POTATO',
        price: 15,
        calories: 10
    }

    static TOPPING_SPICES = {
        name: 'TOPPING_SPICES',
        price: 15,
        calories: 0
    }

    static TOPPING_MAYO = {
        name: 'TOPPING_MAYO',
        price: 20,
        calories: 5
    }

    addTopping (topping) {
        const selectedTopping = this.params.topping;
        selectedTopping.push(topping);
    }

    showPrice () {
        const selectedParams = this.params;
        let totalSum = 0;
        selectedParams.topping.forEach(topping => {
            totalSum += topping.price;
        });
        return selectedParams.size.price + totalSum + ' UAH';
    }

    showCalories () {
        const selectedParams = this.params;
        let totalAmountOfCalories = 0;
        selectedParams.topping.forEach(topping => {
            totalAmountOfCalories += topping.calories;
        })
        return selectedParams.size.calories + totalAmountOfCalories + ' Calories';
    }
}
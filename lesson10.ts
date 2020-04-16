var getBonus = function (value = 10, tax = value + 22) {
    console.log(value + tax);
}

getBonus();
getBonus(undefined, 2);
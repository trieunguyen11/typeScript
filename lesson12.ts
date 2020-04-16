let displayColorsSpread = function (message: any, ...colors: string[]) {
    for (let i in colors) {
        console.log(colors[i]);
    }
}
let messSpead = 'Hello';
let colors = ['red', 'blue', 'green'];
displayColorsSpread(messSpead, ...colors);

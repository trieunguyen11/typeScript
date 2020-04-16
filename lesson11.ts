let displayColors = function (...colors: any) {
    for (let i in colors) {
        console.log(colors[i]);
    }
}
displayColors('Red');
displayColors('Red', 'Green');
displayColors('Red', 'Green', 'Blue');
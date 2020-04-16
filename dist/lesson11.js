"use strict";
var displayColors = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
};
displayColors('Red');
displayColors('Red', 'Green');
displayColors('Red', 'Green', 'Blue');
//# sourceMappingURL=lesson11.js.map
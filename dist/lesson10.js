"use strict";
var getBonus = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value + 22; }
    console.log(value + tax);
};
getBonus();
getBonus(undefined, 2);
//# sourceMappingURL=lesson10.js.map
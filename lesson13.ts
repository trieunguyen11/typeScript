var employees = ['A', 'B', 'C'];
// let [emp1, emp2, emp3] = employees;
let [emp1, ...emp2] = employees;
console.log(emp1);
console.log(emp2);
// console.log(emp3);
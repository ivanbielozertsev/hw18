function mainFunction(callback) {
    let num1 = +prompt("Введите число 1")
    let num2 = +prompt('Введите число 2')
    return callback(num1, num2)
}
 
function exponentiation(arg1, arg2) {
    let exp = Math.pow(arg1, arg2);
    alert(exp)
 }

mainFunction(exponentiation)
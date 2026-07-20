function calculate(operation, num1, num2) {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  switch (operation) {
    case "plus":
      return n1 + n2;
    case "minus":
      return n1 - n2;
    case "mnozenje":
      return n1 * n2;
    case "delenje":
      return n2 !== 0 ? n1 / n2 : "Zabranjeno delenje sa 0";
    case "modul":
      return n2 !== 0 ? n1 % n2 : "Zabranjeno delenje sa 0";
    case "kvadrat":
      return n1 * n1; 
    case "kub":
      return n1 * n1 * n1; 
    default:
      return "Nepoznata operacija";
  }
}

module.exports = { calculate };

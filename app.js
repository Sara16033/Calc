// app.js
const readline = require("readline");
const { add, subtract, multiply, divide } = require("./math");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Benvenuto nella Calcolatrice CLI!");
console.log("Operazioni disponibili: add, subtract, multiply, divide");

rl.question("Scegli un'operazione: ", (operation) => {
  if (!["add", "subtract", "multiply", "divide"].includes(operation)) {
    console.log("Operazione non valida.");
    rl.close();
    return;
  }

  rl.question("Inserisci il primo numero: ", (num1) => {
    rl.question("Inserisci il secondo numero: ", (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);

      if (isNaN(a) || isNaN(b)) {
        console.log("Parametri non validi.");
        rl.close();
        return;
      }

      let result;
      try {
        switch (operation) {
          case "add":
            result = add(a, b);
            break;
          case "subtract":
            result = subtract(a, b);
            break;
          case "multiply":
            result = multiply(a, b);
            break;
          case "divide":
            result = divide(a, b);
            break;
        }
        console.log(`Risultato: ${result}`);
      } catch (err) {
        console.log(`Errore: ${err.message}`);
      }
      console.log("Grazie per aver usato la calcolatrice!");
      rl.close();
    });
  });
});

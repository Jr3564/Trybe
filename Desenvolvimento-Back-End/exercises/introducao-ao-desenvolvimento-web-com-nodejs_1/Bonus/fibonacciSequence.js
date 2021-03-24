function fibonacciListTo (number) {
  const listFibonacci = [1, 1];

  let lastIndex = listFibonacci.length - 1;

  do {
    const nextNumber = listFibonacci[lastIndex] + listFibonacci[lastIndex - 1];
    listFibonacci.push(nextNumber);
    lastIndex++;
    
  } while (listFibonacci[lastIndex] < +number); 

  return listFibonacci;
};


const fibonacciListToString = (number) => {
  const message = fibonacciListTo(number).reduce((acc,crr) => acc + ", " + crr);
  return message;
};

const isFibonacci = (number) => {
  const listFibonacci = fibonacciListTo(number);
  return listFibonacci.includes(+number);
};

const isFibonacciMessage = (number) => {
  const isFibonacciValid = isFibonacci(number);
  const message = `O número ${number} ${isFibonacciValid ? "faz" : "não faz"} parte da sequencia Fibonacci.\n`
  return message;
};

const validNumber = (number) => {
  if (!!number && Number.isInteger(number)) return true;
  const message = `O número ${number} não é válido.\n`;
  console.log(message);
  return false;
};

module.exports= { isFibonacciMessage, validNumber, fibonacciListToString };

const imcType = (imc) => {
  if (imc < 18.5) {
    return "Abaixo do peso (magreza)";
  } else if (imc < 24.9) {
    return "Peso normal";
  } else if (imc < 29.9) {
    return "Acima do peso (sobrepeso)";
  } else if (imc < 34.9) {
    return "Obesidade grau I";
  } else if (imc < 39.9) {
    return "Obesidade grau II";
  } else if (imc > 39.9) {
    return "Obesidade graus III e IV";
  } else {
    return "IMC inválido!"
  }
}

const imcCalculation = (weight, height) => (+weight / Math.pow(+height, 2));


const imcMessage = (weight, height) => {
  const imc = imcCalculation(weight, height).toFixed(2);
  const type = imcType(imc);
  const message = `Seu IMC é ${imc}kg/m2.\nO seu grau de IMC é: ${type}.`;
  return message;
};


module.exports= { imcMessage, imcType, imcCalculation };

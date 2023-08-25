const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isEven = (number) => {
  if (number % 2 !== 0) {
    return false;
  }
  return true;
};

const randomNumber = () => Math.ceil((Math.random() * 10));

export { isPrime, isEven, randomNumber };

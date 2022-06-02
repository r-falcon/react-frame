const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

const reset = () => {
  return {
    type: 'RESET',
  };
};

module.exports = {
  increment,
  decrement,
  reset,
};

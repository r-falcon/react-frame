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

const incrementAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 2000);
  };
};

module.exports = {
  increment,
  decrement,
  incrementAsync,
};

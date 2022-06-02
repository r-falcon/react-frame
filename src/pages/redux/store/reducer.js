const defaultState = {
  num: 0,
};

let originNum = defaultState.num;

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      state.num += 1;
      return { ...state };
    case 'DECREMENT':
      state.num -= 1;
      return { ...state };
    case 'RESET':
      state.num = originNum;
      return { ...state };
    default:
      return state;
  }
};

export default counter;

const defaultState = {
  num: 1,
};

const number = (state = defaultState, action) => {
  switch (action.type) {
    case 'DOUBLE':
      state.num *= 2;
      return { ...state };
    case 'TREBLE':
      state.num *= 3;
      return { ...state };
    default:
      return state;
  }
};

export default number;

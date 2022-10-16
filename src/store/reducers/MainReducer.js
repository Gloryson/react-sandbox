

export function MainReducer (state, action) {
  switch (action.type) {
    case `gg`: return {...state, array: [1]};
    default: return state;
  }
}
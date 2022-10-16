

export function MainReducer (state, action) {
  switch (action.type) {
    case `gg`: return {...state};
    default: return state;
  }
}
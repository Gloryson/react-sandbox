

export function reducer (state, action) {
  switch (action.type) {
    case 'clickButton': return {...state, buttonName: `button`, inputValue: `button`};
    case 'onChange': return {...state, inputValue: action.text, buttonName: action.text};
    default: return state;
  }
}
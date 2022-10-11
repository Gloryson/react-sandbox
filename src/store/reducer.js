import uuid from 'react-uuid';

function handleButtonOk (state) {

  if (!state.isEdit) {
    return [...state.notesArray, {id: uuid(), value: state.inputValue, completed: false}]
  }

  return [...state.notesArray.map(note => {
    if (note.id === state.isEdit) note.value = state.inputValue;
    return note;
  })]
                        
}

export function reducer (state, action) {
  switch (action.type) {
    case `clickOk` : return {...state, notesArray: handleButtonOk(state), inputValue: ``, isEdit: false, visible: false};
    case `inputValue`: return {...state, inputValue: action.text};
    case `del`: return {...state, notesArray: [...state.notesArray.filter(note => note.id != action.id)]};
    case `edit`: return {...state, isEdit: action.id, inputValue: action.value, visible: true};
    case `add`: return {...state, visible: true}
    default: return state;
  }
}
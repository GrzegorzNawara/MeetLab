export const loadState = (defaultState) => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null){
      return defaultState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return defaultState;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    
  }
};

export const loadState = (version, defaultState) => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null){
      return defaultState;
    }
    const oldState=JSON.parse(serializedState);
    if(version!==oldState.version)
      return defaultState;
    return oldState;
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

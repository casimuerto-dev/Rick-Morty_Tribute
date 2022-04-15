const Reducer = (currentState, action) => {
  if (currentState.name === action.type) {
    return { ...currentState, loading: false };
  }

  switch (action.type) {
    case "Rick":
      return currentState.selected
        ? { ...currentState, name: "Rick", loading: true }
        : { ...currentState, name: "Rick", selected: true, loading: true };

    case "Morty":
      return currentState.selected
        ? { ...currentState, name: "Morty", loading: true }
        : { ...currentState, name: "Morty", selected: true, loading: true };

    case "Summer":
      return currentState.selected
        ? { ...currentState, name: "Summer", loading: true }
        : { ...currentState, name: "Summer", selected: true, loading: true };

    case "Beth":
      return currentState.selected
        ? { ...currentState, name: "Beth", loading: true }
        : { ...currentState, name: "Beth", selected: true, loading: true };

    case "Jerry":
      return currentState.selected
        ? { ...currentState, name: "Jerry", loading: true }
        : { ...currentState, name: "Jerry", selected: true, loading: true };

    case "FETCH_INFO":
      return { ...currentState, character: action.payload, loading: false };
    default:
      return currentState;
  }
};

export { Reducer };

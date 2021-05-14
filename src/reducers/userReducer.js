export const userReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_FAV":
      return [
        ...state,
        {
          id: action.favourite.id,
          data: { ...action.favourite },
        },
      ];
    case "DELETE_FAV":
      return state.filter((favourite) => favourite.id !== action.id);

    default:
      return state;
  }
};

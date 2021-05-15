export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return [
        {
          id: action.favourite.id,
          data: { ...action.favourite },
        },
        ...state,
      ];
    case "DELETE_FAV":
      return state.filter((favourite) => favourite.id !== action.id);

    default:
      return state;
  }
};

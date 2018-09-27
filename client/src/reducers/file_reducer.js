export default function(state = {}, action) {
  switch (action.type) {
    case "GET_FILES":
      return { ...state, file: action.payload };

    default:
      return state;
  }
}

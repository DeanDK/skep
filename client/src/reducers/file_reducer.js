export default function(state = {}, action) {
  switch (action.type) {
    case "GET_FILES":
      return { ...state, file: action.payload };
    case "ADD_FILES":
      return { ...state, file_add: action.payload };
    default:
      return state;
  }
}

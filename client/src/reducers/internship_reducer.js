export default function(state = {}, action) {
  switch (action.type) {
    case "GET_INTERNSHIPS":
      return { ...state, internship: action.payload };
    default:
      return state;
  }
}

export default function(state = {}, action) {
  switch (action.type) {
    case "GET_INTERNSHIPS":
      return { ...state, internship: action.payload };
    case "ADD_INTERNSHIP":
      return { ...state, internship_add: action.payload };

    default:
      return state;
  }
}

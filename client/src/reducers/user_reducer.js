export default function(state = {}, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, user: action.payload };

    default:
      return state;
  }
}

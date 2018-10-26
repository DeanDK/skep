export default function(state = {}, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, login: action.payload };
    case "USER_AUTH":
      return { ...state, auth: action.payload };
    case "ADD_ADMIN":
      return { ...state, add_admin: action.payload };
    case "GET_USER_FILES":
      return { ...state, get_user_files: action.payload };
    default:
      return state;
  }
}

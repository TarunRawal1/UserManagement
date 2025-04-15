const Userreducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_USER":
      return { ...state, user: payload.user };
    case "ROLE_USER":
      return { ...state, roleUser: payload.roleUser };
    case "ROLE_ADMIN":
      return { ...state, roleUser: payload.roleAdmin };
    default:
      return state;
  }
};
export default Userreducer;

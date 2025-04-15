const pagereducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PAGE":
      return { ...state, page: payload.page };
    default:
      return state;
  }
};
export default pagereducer;

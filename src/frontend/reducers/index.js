const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_BLOG':
      return {
        ...state,
        blog: action.payload,
      };
    case 'LOAD_HOME':
      return {
        ...state,
        mainPost: action.payload,
      };
    case 'LOAD_CURRENT_POST':
      return {
        ...state,
        currentPost: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

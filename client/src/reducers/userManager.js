const userManager = (state = {
  isFetching: false,
  user: {},
  userid: 0
}, action) => {
  switch (action.type) {
    case 'REQUEST_USER':
      return {
        ...state,
        userid: action.userid,
        isFetching: true
      }
    case 'RECEIVE_USER':
      return {
        ...state,
        user: action.user,
        isFetching: false
      }
    default:
      return state
  }
}

export default userManager;
import fetch from 'isomorphic-fetch';


export const changeView = (view) => {
  return {
    type: 'CHANGE_VIEW',
    view
  }
}

export const changeUser = (user) => {
  return {
    type: 'CHANGE_USER',
    user
  }
}

function requestUser(userid) {
  return {
    type: 'REQUEST_USER',
    userid
  }
}

function receiveUser(json) {
  return {
    type: 'RECEIVE_USER',
    user: json
  }
}

export function fetchUser(userid) {
  return dispatch => {
    dispatch(requestUser(userid));
    return fetch(`http://localhost:3000/api/Users/${userid}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)))
  }
}

function requestFood() {
  return {
    type: 'REQUEST_FOOD'
  }
}

function receiveFood(json) {
  return {
    type: 'RECEIVE_FOOD',
    food: json
  }
}

export function fetchFood() {
  return dispatch => {
    dispatch(requestFood());
    return fetch(`http://localhost:3000/api/food`)
      .then(response => response.json())
      .then(json => dispatch(receiveFood(json)))
  }
}
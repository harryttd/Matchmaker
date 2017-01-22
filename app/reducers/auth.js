import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET = 'SET_CURRENT_USER';
const REMOVE = 'REMOVE_CURRENT_USER';

/* ------------   ACTION CREATORS     ------------------ */

const set     = user => ({ type: SET, user });
const remove  = () => ({ type: REMOVE });

/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser = null, action) {
  switch (action.type) {

    case SET:
      return action.user;

    case REMOVE:
      return null;

    default:
      return currentUser;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const login = credentials => dispatch => {
  axios.post('/api/login', credentials)
       .then(res => {
         console.log("RES>DATA", res.data);
         dispatch(set(res.data))
       })
       .catch(err => console.error('Login unsuccesful', err));
};

export const signup = credentials => dispatch => {
  axios.post('/api/signup', credentials)
       .then(res => dispatch(set(res.data)))
       .catch(err => console.error('Signup unsuccesful', err));
};

export const getLoggedInUser = () => dispatch => {
  axios.get('/api/me')
      .then(res => dispatch(set(res.data)))
      .catch(err => console.error('retrieveLoggedInUser unsuccesful', err));
};

// optimistic
export const logout = () => dispatch => {
  dispatch(remove());
  axios.get('/api/logout')
       .catch(err => console.error('logout unsuccesful', err));
};

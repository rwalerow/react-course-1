import axios from 'axions';

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: 'FETCH_PROFILES', payload: data })
    });
  };
}

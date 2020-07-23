import axiosAuth from './auth';
import { signOut } from '../actions/Auth';
import { notification } from './../actions/App';

export default (dispatch, url, data) => {
  return new Promise((resolve, reject) => {
    axiosAuth(url, data)
      .then(response => response.data.state
        ? resolve(response.data.payload)
        : reject(response.data.payload.errorMessage.length > 0
          ? response.data.payload.errorMessage
          : response.data.error
        )
      )
      .catch(error => {
        if (error && error.response && error.response.status && error.response.status === 401) {
          dispatch(signOut());
        } else {
          console.log('AXIOS_DISPATCH_ERROR', error);
          notification('error', 'Network Error');
        }
      });
  });
};

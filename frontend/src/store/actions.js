import axios from 'axios';

export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';

export const fetchMessagesSuccess = messages => ({type: FETCH_MESSAGES_SUCCESS, messages});
export const postMessageSuccess = () => ({type: POST_MESSAGE_SUCCESS});

export const fetchMessages = () => {
  return async dispatch => {
    try{
      const response = await axios.get('http://localhost:8080/messages');

      dispatch(fetchMessagesSuccess(response.data))
    }catch(e){
      console.log(e);
    }
  }
};

export const postMessage = (message) => {
  return async dispatch => {
    try{
      await axios.post('http://localhost:8080/messages', message);

      dispatch(postMessageSuccess());
    }catch(e){
      console.log(e);
    }
  }
};

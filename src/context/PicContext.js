import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const picReducer = (state, action) => {
  switch (action.type) {
    case 'get_picposts':
      return action.payload;
    case 'edit_picpost':
      return state.map(picPost => {
        return picPost.id === action.payload.id ? action.payload : picPost;
      });
    case 'delete_picpost':
      return state.filter(picPost => picPost.id !== action.payload);
    case 'add_picpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    default:
      return state;
  }
};

const getPicPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/picposts');

    dispatch({ type: 'get_picposts', payload: response.data });
  };
};

const addPicPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post('/picposts', { title, content });
    // dispatch({ type: 'add_picpost', payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};
const deletePicPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_picpost', payload: id });
  };
};
const editPicPost = dispatch => {
  return (id, title, content) => {
    dispatch({
      type: 'edit_picblogpost',
      payload: { id, title, content }
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  picReducer,
  { addPicPost, deletePicPost, editPicPost, getPicPosts },
  []
);
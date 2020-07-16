import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexPost from './src/screens/IndexPost';
import { Provider } from './src/context/PicContext';
import ShowPost from './src/screens/ShowPost';
import CreatePost from './src/screens/CreatePost';
import EditPost from './src/screens/EditPost';

const navigator = createStackNavigator(
  {
    Index: IndexPost,
    Show: ShowPost,
    Create: CreatePost,
    Edit: EditPost
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Begrato',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
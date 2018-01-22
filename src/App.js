import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
      const config = {
        apiKey: 'AIzaSyDHP6PxL3qi656bakYyZ794cGVIy3JBrxI',
        authDomain: 'manager-ad505.firebaseapp.com',
        databaseURL: 'https://manager-ad505.firebaseio.com',
        projectId: 'manager-ad505',
        storageBucket: '',
        messagingSenderId: '305684529093'
      };
      firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;

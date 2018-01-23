import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


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
          <Router />
      </Provider>
    );
  }
}

export default App;

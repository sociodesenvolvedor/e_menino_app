import React, { Component } from 'react';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init('6fb2a5b6-ae5c-46ea-ae76-461cc97c0f58');
    OneSignal.registerForPushNotifications();

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {}

  onOpened(openResult) {}

  onIds(device) {}

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);

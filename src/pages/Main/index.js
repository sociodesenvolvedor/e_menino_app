import React, { Component } from 'react';

import {
  StatusBar,
  WebView,
  NetInfo,
  Platform,
  View,
  Text,
  ActivityIndicator,
  Button,
} from 'react-native';

/* Styles */
import styles from './styles';

class Main extends Component {
  state = {
    internet: false,
    loading: true,
  };

  componentWillMount() {
    setInterval(() => {
      this.CheckConnectivity();
    }, 1000);
  }

  CheckConnectivity = () => {
    // For Android devices
    if (Platform.OS === 'android') {
      NetInfo.isConnected.fetch().then((isConnected) => {
        if (isConnected) {
          this.setState({ internet: true, loading: false });
        } else {
          this.setState({ internet: false, loading: false });
        }
      });
    } else {
      // For iOS devices
      NetInfo.isConnected.addEventListener('connectionChange', this.handleFirstConnectivityChange);
    }
  };

  handleFirstConnectivityChange = (isConnected) => {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleFirstConnectivityChange);

    if (isConnected === false) {
      this.setState({ internet: true, loading: false });
    } else {
      this.setState({ internet: false, loading: false });
    }
  };

  renderViewInternet = () => (
    <>
      <WebView source={{ uri: 'http://3911c.iluria.com/' }} />
    </>
  );

  renderViewNotInternet = () => (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text style={styles.titleLoading}>Sem conexão.</Text>
      <Text style={styles.titleLoading}>Esperando acesso a Internet.</Text>
    </View>
  );

  renderViewLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text style={styles.titleLoading}>Carregando...</Text>
    </View>
  );

  renderLoading = () => (this.state.loading === true ? this.renderViewLoading() : this.renderView());

  renderView = () => (this.state.internet === true ? this.renderViewInternet() : this.renderViewNotInternet());

  render() {
    return (
      <>
        <StatusBar hidden />
        {this.renderLoading()}
      </>
    );
  }
}

export default Main;

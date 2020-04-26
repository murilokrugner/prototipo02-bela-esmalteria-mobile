import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import App from './App';
import './config/ReactotronConfig';

import { store, persistor } from './store';

console.disableYellowBox = true;

function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor={'#f08080'} />
        <App />
      </PersistGate>
    </Provider>
  );
}

export default Index;

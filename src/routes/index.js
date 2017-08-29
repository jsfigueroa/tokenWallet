import React, { Component } from 'react';
import { ActionConst, Scene, Reducer, Router } from 'react-native-router-flux';
import { Root } from "native-base";

import Events from './Events';
import Wallet from './Wallet';
import Send from './Wallet/Send';
import Receive from './Wallet/Receive';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log("ACTION:", action);
    return defaultReducer(state, action);
  };
};

export default class AppRouter extends Component {

  render() {
    return (
      <Root>
        <Router createReducer={reducerCreate}>
            <Scene key="main">
                <Scene key="events" component={Events} title="Events"  hideNavBar initial/>
                <Scene key="wallet" component={Wallet} title="Wallet"  hideNavBar/>
            </Scene>
        </Router>
      </Root>
    )
  }
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, Fab, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import { addPrivKey, addPubKey } from '../../../modules/wallet/actions';
import { scanQR } from '../../../modules/qrscanner/actions';
import QRCode from 'react-native-qrcode-svg';


class Receive extends Component {
  constructor() {
    super();
    this.state = {
      active: 'true'
    };
  }
  _handleClick() {
    this.setState({ active: !this.state.active })
    console.log(this.props)
    //this.props.dispatch(addPrivKey)
    this.props.addPrivKey();
  }
  render() {
    let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

    return (
      <View style= {{flex:1}}>
          <Content contentContainerStyle= {{justifyContent:'center', alignItems:'center'}}>
              <QRCode
                  value="Just some string value"
                  logo={{uri: base64Logo}}
                  logoSize={30}
                  logoBackgroundColor='transparent'
                />
            </Content>
        <Fab
            active={this.state.active}
            position="bottomRight"
            onPress={this._handleClick.bind(this)}>
          <Icon name="ios-add" />
        </Fab>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    wallet: state.wallet,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPrivKey,
    addPubKey
  }, dispatch);
}


Receive.propTypes = {
  addPrivKey: PropTypes.func.isRequired,
  addPubKey: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Receive);

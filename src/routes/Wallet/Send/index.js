import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, View } from 'react-native';
import { ActionSheet, Card, CardItem, Container, Fab, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ADD_PUB_KEY, REMOVE_PUB_KEY, addPubKey, removePubKey } from '../../../modules/wallet/actions';
import { scanQR } from '../../../modules/qrscanner/actions';
import QRScanner from '../../../components/QRScanner';

import store from '../../../store';

const removeAlert = (index) => {
  return (
    Alert.alert(
      'Remove Alert',
      'Are you sure you want to remove the public key from your Address book?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => store.dispatch({type:REMOVE_PUB_KEY, data:index})},
      ],
      { cancelable: false }
    )
  )
}

class Send extends Component {
  constructor() {
    super();
    this.state = {
      scanning: false,
      clicked: 'none'
    };
    this._renderCardItem = this._renderCardItem.bind(this);
    this._handleRemoveClick = this._handleRemoveClick.bind(this);
    this._showActionSheet = this._showActionSheet.bind(this);

  }
    _showActionSheet = () => {
      console.log("showing as")
      const BUTTONS = ["Send Tokens", "Change Name", "Cancel"];
      const CANCEL_INDEX = 2;
      ActionSheet.show(
                 {
                   options: BUTTONS,
                   cancelButtonIndex: CANCEL_INDEX,
                   title: "What would you like to do?"
                 },
                 (buttonIndex) => {
                   switch(buttonIndex) {
                     case 0:
                     console.log("Send Token!")
                     break;
                     case 1:
                     console.log("Change name!")
                     break;
                   }

                 }
               )
    }
  _handleRemoveClick(element, index) {
    removeAlert(index);
  }
  _handleClick() {
    if(!this.state.scanning) {
      this.setState({ scanning: true });
    }

  }
  _onSuccess(e) {
    //e is a redux action!
    store.dispatch(e)
    this.setState({ scanning: false });
    //handling effect here instead of saga
    if(e.data) store.dispatch({type:ADD_PUB_KEY, data:e.data});

   }
  _renderCardItem(e,i) {
      return (
        <CardItem key={i} button onPress={this._showActionSheet.bind(this)}>
          <Icon active name="ios-remove-circle" style={{color:'#FF0000'}} onPress={this._handleRemoveClick.bind(null,e,i)}/>
          <Text>{e}</Text>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
         </CardItem>
      )
  }
  componentWillReceiveProps(newProps) {
    console.log(newProps)
  }
  render() {
    return (
      <View style= {{flex:1}}>
        <Content>
          <Text style={{alignItems:'center'}}> Address Book: </Text>
          { this.state.scanning && <QRScanner onRead={ this._onSuccess.bind(this)}></QRScanner> }
          { this.props.wallet.publicKeys.length > 0 &&
             <Card>
                { this.props.wallet.publicKeys.map(this._renderCardItem)}
             </Card>
           }
        </Content>
        { !this.state.scanning &&
          <Fab
            active={this.state.active}
            position="bottomRight"
            onPress={this._handleClick.bind(this)}>
          <Icon name="ios-add" />
        </Fab>}
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
    addPubKey,
    removePubKey,
  }, dispatch);
}


Send.propTypes = {
  removePubKey: PropTypes.func.isRequired,
  addPubKey: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Send);

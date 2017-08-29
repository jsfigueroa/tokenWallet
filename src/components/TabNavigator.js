import React from 'react';
import {Button, Footer, Icon, Text, FooterTab } from 'native-base';
import {View} from 'react-native';
import {Actions} from 'react-native-router-flux';

const fontSize = 32;

export default ( { currentPage } ) => {
  return (
    <Footer>
      <FooterTab>
        <Button onPress={() => {
            Actions.events({})
          }}
          active={currentPage === 'events'} dark>
            <Icon name="ios-notifications" style={{ fontSize }} active={currentPage === 'events'} />
            <Text style={{color:'white', fontSize:10}}>Events</Text>
          </Button>
          <Button onPress={() =>{
              Actions.wallet({})
            }}
            active={currentPage === 'wallet'} dark>
            <Icon name="ios-barcode" style={{ fontSize }} active={currentPage === 'wallet'} />
            <Text style={{color:'white', fontSize:10}}>Wallet</Text>
          </Button>
      </FooterTab>
    </Footer>
  );
}

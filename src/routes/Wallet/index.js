import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Tab, Tabs, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import TabNavigator from '../../components/TabNavigator';
import Send from './Send';
import Receive from './Receive';


export default class Wallet extends Component {
  componentWillMount() {
    console.log("Hai wallet!")
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="ios-barcode"/>
            </Button>
          </Left>
          <Body>
            <Title>Wallet</Title>
          </Body>
          <Right />
        </Header>
          <Tabs>
              <Tab heading="Send">
                  <Send/>
              </Tab>
              <Tab heading="Receive">
                  <Receive/>
              </Tab>
          </Tabs>

        <TabNavigator currentPage="wallet"/>
      </Container>
    );
  }
  componentWillUnnount() {
    console.log("Goodbye wallet!")
  }
}

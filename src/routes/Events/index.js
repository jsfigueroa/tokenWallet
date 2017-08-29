import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import TabNavigator from '../../components/TabNavigator';
import {default as Web3} from 'web3';

export default class Events extends Component {
  componentWillMount() {
    console.log("hello events!")
    const web3 = new Web3();
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="ios-notifications" />
            </Button>
          </Left>
          <Body>
            <Title>Events</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            Events
          </Text>
        </Content>
        <TabNavigator currentPage="events"/>
      </Container>
    );
  }
  componentWillUnnount() {
    console.log("Goodbye eventscreen!")
  }
}

import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default ({onRead}) => {
  return (
    <QRCodeScanner onRead={ onRead }/>
  );
}

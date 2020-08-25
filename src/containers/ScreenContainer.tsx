import React from 'react';
import { StyleSheet } from 'react-native';
import { Col } from '../components/primitives';
import theme from '../theme';

const style = StyleSheet.create({ screen: { padding: theme.spacing[4] } });

export const ScreenContainer: React.FC = ({ children }) => (
  <Col style={style.screen}>{children}</Col>
);

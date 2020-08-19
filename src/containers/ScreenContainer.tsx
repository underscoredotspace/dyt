import React from "react";
import { StyleSheet } from "react-native";
import { Col } from "../primitives";

const style = StyleSheet.create({ screen: { padding: 16 } });

export const ScreenContainer: React.FC = ({ children }) => (
  <Col style={style.screen}>{children}</Col>
);

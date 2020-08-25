import React from 'react';
import { View, ViewProps } from 'react-native';

export const Box: React.FC<ViewProps> = ({ children, ...props }) => (
  <View {...props}>{children}</View>
);

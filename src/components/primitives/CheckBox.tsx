import React from 'react';
import { CheckBoxProps, Pressable, StyleSheet, Text } from 'react-native';

export const CheckBox: React.FC<CheckBoxProps> = ({
  value,
  onValueChange,
  style,
}) => {
  const styles = StyleSheet.create({
    button: {
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      textAlignVertical: 'center',
      textAlign: 'center',
      width: 28,
      height: 28,
      borderWidth: 2,
      borderRadius: 4,
      fontSize: 16,
    },
  });

  return (
    <Pressable
      onPress={() => onValueChange && onValueChange(!value)}
      style={[styles.button, style]}
      android_ripple={{ color: 'silver', borderless: true, radius: 18 }}
    >
      <Text style={styles.text}>{value ? '' : 'X'}</Text>
    </Pressable>
  );
};

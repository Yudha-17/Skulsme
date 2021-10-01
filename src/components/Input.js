import React, {useState} from 'react';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {colorInputBlack, colorLabel, colorPrimary} from '../styles/Colors';
import Gap from './Gap';

const Input = ({
  label, value, height = 40, secureTextEntry, onChangeText, icon,
}) => {
  const [border, setBorder] = useState(colorInputBlack);
  const onFocusForm = () => {
    setBorder(colorLabel);
  };
  const onBlurForm = () => {
    setBorder(colorInputBlack);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.content}>
        <TextInput
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          style={styles.input(height, border)}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
        />
        <Gap width={7} />
        {
          icon ? <FAIcon name={icon} size={26} color={colorPrimary} /> : null
        }

      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  content: {
    flexDirection: 'row',
  },
  input: (height, border) => ({
    height,
    padding: 12,
    borderWidth: 0.5,
    borderColor: border,
    borderRadius: 7,
    width: '97%',
  }),
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: colorInputBlack,
  },
});

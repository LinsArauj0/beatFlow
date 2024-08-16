import React from "react";
import { View, TextInput, StyleSheet, TextInputProps, Text} from 'react-native';

interface CustomInputProsps
extends
TextInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
}

const CustomInput: React.FC<CustomInputProsps> = ({label, ...props}) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput style={styles.input} {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: 20,
      paddingHorizontal: 20
    },
    label: {
      marginBottom: 8,
      fontSize: 16,
      color: '#FFFFFF',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 8,
      backgroundColor: "#FFFFFF"
    },
  });

export { CustomInput };

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps{
    title: string;
    onPress: () => void;
}


const CustomButton: React.FC<CustomButtonProps> = ({ title, ...props}) => {
    return (
        <TouchableOpacity style={styles.button} { ...props }>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    width: '70%',
    height: 56,
    backgroundColor: '#1e1e1e',
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 0.3,
    borderColor: '#ffffff',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export { CustomButton };

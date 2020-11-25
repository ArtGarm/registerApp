import React from 'react';
import {useField, useFormikContext} from 'formik';
import {View, TextInput, Text} from 'react-native';

import classes from './styles';

const Index = ({name, ...props}) => {
  console.log(name, props, useFormikContext());
  const [field, meta] = useField(name);
  const {handleChange, handleBlur, setFieldTouched} = useFormikContext();

  return (
    <View style={classes.inputRow}>
      <Text>{props.label}</Text>
      <View style={classes.inputWrap}>
        <TextInput
          {...props}
          name={name}
          value={field.value}
          style={classes.input}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          onTouch={() => setFieldTouched(name)}
        />
        {meta.touched && meta.error ? <Text>{meta.error}</Text> : null}
      </View>
    </View>
  );
};

export default Index;

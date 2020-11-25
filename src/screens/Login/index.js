import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';

import {Button} from 'react-native-material-ui';

import classes from './styles';
import FormikInput from '../../components/Input/index';

const LoginPage = () => {
  return (
    <View style={classes.root}>
      <View style={classes.formWrapper}>
        <Formik
          initialValues={{email: '13123#@faf.ff', password: ''}}
          onSubmit={(val) => console.log(val)}>
          {({handleSubmit}) => (
            <>
              <FormikInput name="email" placeholder="email" label="Email" />
              <FormikInput
                secureTextEntry
                name="password"
                placeholder="password"
                label="Password"
              />
              <View>
                <Button raised primary text="Primary" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default LoginPage;

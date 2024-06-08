
// TODO! implement this
// TODO! introduce component properties if required

// IMPORT React
import React, { useState } from 'react';
// IMPORT React-Native
import {
    View,
    Text,
    TextInput,
    Button,
    Pressable
} from 'react-native';

///////////////////////////////////////////////////////////////////////////////
// TODO! inspect and if required replace current navigation implementation
// Import React Navigation
import { useNavigation } from '@react-navigation/native';
///////////////////////////////////////////////////////////////////////////////

// IMPORT Firebase Auth
// TODO! import after validating Firebase Auth is working as intended
/*
import { auth } from '../../services/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
*/

// IMPORT Styles
import EStyleSheet from 'react-native-extended-stylesheet';
import PROJECT_STYLES from '../../../styles';

/**
 * Login screen of the application
 * @returns
 */
const PageAuthLogin = () => {

    // NAVIGATION
    const navigation = useNavigation();

    // STATE to manage user credentials
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // HANDLE login operation
    // TODO! consider implementing dummy and firebase logins as separate functions elsewhere
    const handleLogin = async () => {
        try {
            // Firebase authentication
            await signInWithEmailAndPassword(auth, email, password);
            // Navigate to home screen upon successful login
            navigation.navigate('ScreenHome');
        } catch (error) {
            // Handle login error
            console.error('Login Error:', error);
            // Alert or display error message to the user
        }
    };

    // PAGE COMPOSITION
    return (

        /* CONTAINER Page */
        <View style={PROJECT_STYLES.containers['containerPageDefault']}>

            {/* LABEL Application */}
            <Text style={PROJECT_STYLES.typography['labelHeaderCommon']}>NativEcom</Text>

            {/* TEXT Welcome Message */}
            <Text style={PROJECT_STYLES.typography['titleDefault']}>Welcome, User!</Text>

            {/* FORM Login */}
            <View style={screenAuthLogin.containerInputs}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={screenAuthLogin.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    style={screenAuthLogin.input}
                    secureTextEntry
                />
                <Button title="Login" onPress={handleLogin} />
            </View>

            {/* LINK Reset Password */}
            <Pressable onPress={() => navigation.navigate('ScreenPassword')}>
                <Text style={PROJECT_STYLES.typography['labelLink']}>Forgot your password?</Text>
            </Pressable>
            <Text style={'' /* //TODO select or implement appropriate */ }>if you forgot it</Text>

            {/* LINK Registration */}
            <Pressable onPress={() => navigation.navigate('ScreenRegister')}>
                <Text style={PROJECT_STYLES.typography['labelLink']}>Register here and now</Text>
            </Pressable>
            <Text style={'' /* //TODO select or implement appropriate */ }>if you're new here</Text>
        </View>
    );

};

export default PageAuthLogin;

// TODO consider merging with other auth screen styling objects
// TODO* have mitigated component specific styling to own component here
// TODO? consider pulling remainder stylings in PROJECT_STYLES here
export const screenAuthLogin = EStyleSheet.create({
  // TODO reconsider implementations here
  containerInputs: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '$colorBorder',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

// TODO! implement this
// TODO! introduce component properties if required

// IMPORT React
import React, { useState } from 'react';
// IMPORT React-Native
import {
    View,
    Text,
    TextInput,
    Pressable,
    Button,
    Alert,
    StyleSheet
} from 'react-native';

///////////////////////////////////////////////////////////////////////////////
// TODO! inspect and if required replace current navigation implementation
// Import React Navigation
import { useNavigation } from '@react-navigation/native';
///////////////////////////////////////////////////////////////////////////////

// IMPORT Firebase Auth
// TODO! import after validating Firebase Auth is working as intended
/*
import { auth } from '../../services/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
*/

// IMPORT Styles
import EStyleSheet from 'react-native-extended-stylesheet';
import PROJECT_STYLES from '../../../styles';

/**
 * Registration page of the application
 * @returns 
 */
const ScreenAuthRegister = () => {

    // NAVIGATION
    const navigation = useNavigation();

    // STATE to manage user credentials
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // HANDLE Register operation
    // TODO! consider implementing dummy and firebase registers as separate functions elsewhere
    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Registration successful, navigate to ScreenHome or wherever needed
            navigation.navigate('ScreenHome');
        } catch (error) {
            // Registration failed, show error message
            Alert.alert('Registration Failed', error.message);
        }
    };

    // PAGE COMPOSITION
    return (
        /* CONTAINER Page */
        <View style={PROJECT_STYLES.containers['containerPageDefault']}>

            {/* LABEL Application */}
            <Text style={PROJECT_STYLES.typography['labelHeaderCommon']}>NativEcom</Text>

            {/* TEXT Welcome */}
            <Text style={PROJECT_STYLES.typography['labelTitleDefault']}>Welcome Abroad!</Text>

            {/* FORM Registration */}
            <View style={PROJECT_STYLES.containers['containerDefault'] /* TODO: find or implement */ }>
                <TextInput
                    style={screenAuthRegister.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={screenAuthRegister.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Button
                    title="Register"
                    onPress={handleRegister}
                />
            </View>

            {/* LINK Reset Password */}
            <Pressable onPress={() => navigation.navigate('ScreenPassword')}>
                <Text style={PROJECT_STYLES.typography['labelLink']}>Forgot your password?</Text>
            </Pressable>
            <Text style={'' /* //TODO select or implement appropriate */ }>if you forgot it</Text>
            
            {/* LINK Login */}
            <Pressable onPress={() => navigation.navigate('ScreenLogin')}>
                <Text style={PROJECT_STYLES.typography['labelLink']}>Already have an account? Login</Text>
            </Pressable>
            <Text style={'' /* //TODO select or implement appropriate */ }>if you already belong</Text>

        </View>
    );
};

export default ScreenAuthRegister;

// TODO consider merging with other auth screen styling objects
// TODO* have mitigated component specific styling to own component here
// TODO? consider pulling remainder stylings in PROJECT_STYLES here
export const screenAuthRegister = EStyleSheet.create({
  // TODO reconsider implementations here
  containerInputs: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});

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
import { sendPasswordResetEmail } from 'firebase/auth';
*/

// IMPORT Styles
import EStyleSheet from 'react-native-extended-stylesheet';
import PROJECT_STYLES from '../../../styles';

/**
 * Password reset page of the application
 * @returns 
 */
const ScreenAuthPassword = () => {

    // STATE to manage user credentials
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    // HANDLE Password reset
    // TODO! consider implementing dummy and firebase resets as separate functions elsewhere
    const handleResetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            // Password reset email sent successfully
            Alert.alert('Password Reset', 'Check your email for password reset instructions.');
            // Navigate to ScreenLogin or wherever needed
            navigation.navigate('ScreenLogin');
        } catch (error) {
            // Password reset failed, show error message
            Alert.alert('Password Reset Failed', error.message);
        }
    };

    // PAGE COMPOSITION
    return (
        // CONTAINER Page
        <View style={PROJECT_STYLES.containers['containerPageDefault']}>

            {/* LABEL Application */}
            <Text style={PROJECT_STYLES.typography['labelHeaderCommon']}>NativEcom</Text>

            {/* FORM Reset Password */}
            <Text style={PROJECT_STYLES.typography['titleDefault']}>Forgot Your Password?</Text>
            <Text style={PROJECT_STYLES.typography['titleSectionDefault']}>Enter your email address below to reset your password.</Text>
            <TextInput
                style={screenAuthPassword.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Button
                title="Reset Password"
                onPress={handleResetPassword}
            />

            {/* LINK Login */}
            <Pressable onPress={() => navigation.navigate('ScreenLogin')}>
                <Text style={PROJECT_STYLES.typography['labelLink']}>Already have an account? Login</Text>
            </Pressable>
            <Text style={'' /* //TODO select or implement appropriate */ }>if you already belong</Text>

            {/* LINK Registration */}
            <Pressable onPress={() => navigation.navigate('ScreenRegister')}>
                <Text style={PROJECT_STYLES.typography['labelLink']}>Register here and now</Text>
            </Pressable>
            <Text style={'' /* //TODO select or implement appropriate */ }>if you're new here</Text>

        </View>
    );
};

export default ScreenAuthPassword;

// TODO consider merging with other auth screen styling objects
// TODO* have mitigated component specific styling to own component here
// TODO? consider pulling remainder stylings in PROJECT_STYLES here
export const screenAuthPassword = EStyleSheet.create({
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
});
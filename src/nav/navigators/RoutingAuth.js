
// TODO: Implement

// IMPORT Dependencies
import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native";

// IMPORT Provider & Store // TODO whether required here or down
import { Provider } from "react-redux"
import store from "../../store/store"

// IMPORT Firebase Auth
// import useAuth from ... // TODO! import when ready

// IMPORT Routers
import AppletAuth, { statesAuth, utilsAuth, dataAuth } from "../applets/AppletAuth";
import AppletMain, { statesMain, utilsMain, dataMain } from "../applets/AppletMain";

const RoutingAuth = () => {

	// TODO! finalize auth login through either local store or firebase

	// STATE init & user
	const [init, setInit] = useState(true);
	const [user, setUser] = useState(null);

	// HANDLE auth status change
	const onAuthStateChange = (user) => {
		setUser(user);
		setInit(user ? false : true);
	}

	// EFFECT Firebase Auth //TODO implement when Firebase Auth ready
	/*
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    return subscriber; // unsubscribe on unmount
  }, []);
	*/

	// if (init) return null;

	// TODO! utilizing dummy auth handling until final implementation ready
  useEffect(() => {
    setUser(true);
  }, []);

	// TODO! utilizing dummy theme switch until proper functionality is available
	useEffect(() => {
		
	})

	// TODO! revise implementation due jigged rendering behaviour
	return(
		// TODO! whether or if can move provider down for safety
		<Provider store={store}>
			<NavigationContainer>
				{
				user ?
				<AppletMain
				states={AppletMain.statesMain}
				utils={AppletMain.utilsMain}
				data={AppletMain.dataMain}
				// TODO take props as needed
				/>
				:
				<AppletAuth
				states={AppletAuth.statesAuth}
				utils={AppletAuth.statesAuth}
				data={AppletAuth.dataAuth}
				// TODO take props as needed
				/>
				}
			</NavigationContainer>
		</Provider>
	);
}

export default RoutingAuth
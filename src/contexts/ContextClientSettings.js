
// IMPORT React
import React, { createContext, useState, useEffect, useContext } from 'react';
// IMPORT AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @typedef {Object} Settings
 * @property {string} theme - Indicates if dark mode is enabled.
 * @property {string} language - Selected language.
 * @property {boolean} notificationsEnabled - Indicates if notifications are enabled.
 */

/**
 * Context for client settings.
 * @type {React.Context<{clientSettings: Settings, setClientSettings: (key: string, value: any) => void}>}
 */
const ContextSettings = createContext();

/**
 * Provider component for client settings.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The child components that will be wrapped by the provider.
 * @returns {JSX.Element} The provider component.
 */ // TODO! reconsider defining default values here
export const ProviderClientSettings = ({ children }) => {
  const [clientSettings, setClientSettings] = useState({
    theme: 'dark',
    language: 'en',
    notificationsEnabled: true,
  });

  useEffect(() => {
    /**
     * Loads the settings from AsyncStorage and updates the state.
     */
    const loadSettings = async () => {
      try {
        const savedSettings = await AsyncStorage.getItem('clientSettings');
        if (savedSettings) {
          setClientSettings(JSON.parse(savedSettings));
        }
      } catch (error) {
        console.error('Failed to load client settings', error);
      }
    };

    loadSettings();
  }, []);

  useEffect(() => {
    /**
     * Saves the current settings to AsyncStorage.
     */
    const saveSettings = async () => {
      try {
        await AsyncStorage.setItem('clientSettings', JSON.stringify(clientSettings));
      } catch (error) {
        console.error('Failed to save client settings', error);
      }
    };

    saveSettings();
  }, [clientSettings]);

  /**
   * Updates a specific setting.
   * @param {string} key - The key of the setting to update.
   * @param {any} value - The new value of the setting.
   */
  const updateSettings = (key, value) => {
    setClientSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  return (
    <ContextSettings.Provider value={{ clientSettings, setClientSettings }}>
      {children}
    </ContextSettings.Provider>
  );
};

/**
 * Custom hook to use the client settings.
 * @returns {{clientSettings: Settings, setClientSettings: (key: string, value: any) => void}} The settings and updateSettings function.
 */
export const useSettings = () => useContext(ContextSettings);

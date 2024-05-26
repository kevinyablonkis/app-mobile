import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

function GlobalFont() {
    const [fontsLoaded, fontError] = useFonts({
        'InriaSans': require('@/assets/fonts/InriaSans-Regular.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }
}

export default GlobalFont;
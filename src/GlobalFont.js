import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

function GlobalFont() {
    const [fontsLoaded, fontError] = useFonts({
        'InriaSans': require('@/assets/fonts/InriaSans-Regular.ttf'),
        'Danfo': require('@/assets/fonts/Danfo-Regular-VariableFont_ELSH.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }
}

export default GlobalFont;
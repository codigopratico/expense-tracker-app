import { Stack } from "expo-router";
import { HeaderShownContext } from "expo-router/build/react-navigation";
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { PaperProvider, useTheme } from 'react-native-paper';
import { primaryColor } from "@/constants";

NavigationBar.setStyle("dark");

export default function RootLayout() {
  const theme = useTheme();
  theme.colors.primary = primaryColor;
  return (
    <PaperProvider
    theme={theme}>
      <StatusBar style="dark" />

      <Stack
      screenOptions={{
        headerShown: false,
        }}
      >

      </Stack>
    </PaperProvider>
  )
  
}

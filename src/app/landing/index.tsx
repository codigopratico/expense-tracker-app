import CostumButton from "@/components/costum-button";
import CostumText from "@/components/costum-text";
import { primaryColor } from "@/constants";
import SafeAreaLayoutWrapper from "@/safe-area-layout-wrapper";
import { Link, RelativePathString, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "react-native-paper";

const LandingScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaLayoutWrapper>
      <View style={styles.container}>
        <View style={styles.branding}>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              padding: 20,
              marginBottom: 20,
            }}
          >
            <Icon source="finance" size={60} color={primaryColor} />
          </View>
          <CostumText
            value="FinTrack"
            color="white"
            fontSize={40}
            fontWeight="700"
          />
          <CostumText
            value="Take control of your finances FinTrack - your personal finance companion."
            color="#c1c0c0ff"
            fontSize={16}
            textAlign="center"
            marginTop={10}
            marginHorizontal={40}
          />
        </View>

        <View style={styles.navigation}>
          <CostumButton
            mode="outlined"
            onPress={() => router.push("/register" as RelativePathString)}
          >
            Get Started
          </CostumButton>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <CostumText
              value="Already have an account? "
              color="white"
              fontSize={16}
            />
            <Link href="/login" style={{ textDecorationLine: "underline" }}>
              <CostumText
              value="Login"
              color="white"
              fontSize={16}
              />
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaLayoutWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: primaryColor,
  },
  branding: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navigation: {
    display: "flex",
    padding: 20,
    gap: 10,
  },
});

export default LandingScreen;

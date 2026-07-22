import { primaryColor } from "@/constants";
import { Text } from "react-native";
import { Button, ButtonProps } from "react-native-paper";

interface CostumButtonProps extends ButtonProps {}

const CostumButton = (props: CostumButtonProps) => {
  return (
    <Button
      {...props}
      style={{
        borderRadius: 5,
        height: 50,
        justifyContent: "center",
        backgroundColor: props.mode === "outlined" ? "white" : primaryColor,
      }}
      mode={props.mode || "contained"}
    >
      <Text
        style={{
          fontWeight: "700",
          color: props.mode === "outlined" ? primaryColor : "white",
          fontSize: 16,
        }}
      >
        {props.children}
      </Text>
    </Button>
  );
};

export default CostumButton;

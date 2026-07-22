import { Text } from "react-native-paper";

interface CostumTextProps {
  value: string;
  color?: string;
  fontSize?: number;
  fontWeight?: "400" | "500" | "600" | "700";
  marginTop?: number;
  marginHorizontal?: number;
  marginBottom?: number;
  textAlign?: "left" | "center" | "right";
}

const CostumText = ({
  value,
  color = "black",
  fontSize = 14,
  fontWeight = "600",
  marginTop = 0,
  marginHorizontal = 0,
  marginBottom = 0,
  textAlign = "left",
}: CostumTextProps) => {
  return (
    <Text
      style={{
        color,
        fontSize,
        fontWeight,
        marginTop,
        marginHorizontal,
        marginBottom,
        textAlign,
      }}
    >
      {value}
    </Text>
  );
};

export default CostumText;

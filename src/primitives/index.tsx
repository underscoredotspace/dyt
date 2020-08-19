import { StyleSheet, ViewProps } from "react-native";
import { Box } from "./Box";

const boxStyle = StyleSheet.create({
  row: { flexDirection: "row" },
  col: { flexDirection: "column" },
});

const Col: React.FC<ViewProps> = ({ style, ...props }) =>
  Box({ ...props, style: [style, boxStyle.col] });
const Row: React.FC<ViewProps> = ({ style, ...props }) =>
  Box({ ...props, style: [style, boxStyle.row] });

export { Col, Row };

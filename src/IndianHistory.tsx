import "./font.css";
import { AbsoluteFill } from "remotion";

export const IndianHistory: React.FC<{}> = ({}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="tillana-extrabold" style={{ fontSize: "50px" }}>
        Hello There
      </h1>
    </AbsoluteFill>
  );
};

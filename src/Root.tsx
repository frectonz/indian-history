import { Composition } from "remotion";
import { IndianHistory } from "./IndianHistory";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="IndianHistory"
        component={IndianHistory}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

import "./font.css";

import { TransitionSeries, linearTiming } from "@remotion/transitions";
import {
  AbsoluteFill,
  Video,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { slide } from "@remotion/transitions/slide";

export const IndianHistory: React.FC<{}> = ({}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({
    fps,
    frame,
  });

  return (
    <AbsoluteFill
      style={{
        backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='hsla(0, 0%, 0%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={160}>
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              boxShadow: "10px 10px black",
              border: "2px solid black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transform: `scale(${scale})`,
            }}
          >
            <h1 className="tillana-regular" style={{ fontSize: "2rem" }}>
              EiABC History of Architecture Final Assignment
            </h1>
            <h3
              className="tillana-extrabold"
              style={{ fontSize: "4rem", margin: "1rem 0" }}
            >
              Indian Architecture
            </h3>
          </div>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />

        <TransitionSeries.Sequence durationInFrames={1600}>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "grid",
              gridTemplateRows: "90% 10%",
              gap: 30,
              padding: "2rem",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                padding: "2rem",
                border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Video
                src={staticFile("indian-mughal.mp4")}
                style={{ width: "100%" }}
              />
            </div>

            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                boxShadow: "10px 10px black",
                border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 className="tillana-bold" style={{ fontSize: 30 }}>
                Indian Mughal
              </h3>
            </div>
          </div>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />

        <TransitionSeries.Sequence durationInFrames={1900}>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "grid",
              gridTemplateRows: "90% 10%",
              gap: 30,
              padding: "2rem",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                padding: "2rem",
                border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Video
                src={staticFile("indian-temples.mp4")}
                style={{ width: "100%" }}
              />
            </div>

            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                boxShadow: "10px 10px black",
                border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 className="tillana-bold" style={{ fontSize: 30 }}>
                Indian Temples
              </h3>
            </div>
          </div>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />

        <TransitionSeries.Sequence durationInFrames={1200}>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "grid",
              gridTemplateRows: "90% 10%",
              gap: 30,
              padding: "2rem",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                padding: "2rem",
                border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Video
                src={staticFile("hindu-temple.mp4")}
                style={{ width: "100%" }}
              />
            </div>

            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                boxShadow: "10px 10px black",
                border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 className="tillana-bold" style={{ fontSize: 30 }}>
                Hindu Temple
              </h3>
            </div>
          </div>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: 30 })}
        />

        <TransitionSeries.Sequence durationInFrames={2400}>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "grid",
              gridTemplateRows: "90% 10%",
              gap: 30,
              padding: "2rem",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                padding: "2rem",
                border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <Video
                src={staticFile("tajmahal.mp4")}
                style={{ width: "100%" }}
              />
            </div>

            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                boxShadow: "10px 10px black",
                border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 className="tillana-bold" style={{ fontSize: 30 }}>
                Taj Mahal
              </h3>
            </div>
          </div>
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

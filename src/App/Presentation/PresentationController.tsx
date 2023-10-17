import {
  NavigateBeforeTwoTone,
  NavigateNextTwoTone,
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import "./PresentationController.css";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import BaseSlide from "./BaseSlide";
import TooltippedText from "./TooltippedText";

export default function SlideControls() {
  const navigation_actions = [
    {
      icon: <NavigateBeforeTwoTone />,
      label: "Previous",
      onClick: () => {
        if (slides[currentSlide - 1] != null) {
          setCurrentSlide(currentSlide - 1);
        }
      },
    },
    {
      icon: <NavigateNextTwoTone />,
      label: "Next",
      onClick: () => {
        if (slides[currentSlide + 1] != null) {
          setCurrentSlide(currentSlide + 1);
        }
      },
    },
  ];

  const slides = [
    [
      <Spline scene="https://prod.spline.design/Ya4PVoyg5dHBiTja/scene.splinecode"></Spline>,
    ],
    [
      <BaseSlide
        children={[
          <Typography variant="h3">Overview</Typography>,
          <Typography variant="h5">
            What they are and their purpose.
          </Typography>,
          <Divider />,
          <Typography variant="h6" textAlign={"center"} >
            Industrial robots are robots that are used in{" "}
            {
              <TooltippedText
                text="manufacturing"
                textVariant="body"
                definition="Manufacturing is the creation or production of goods."
              />
            }. Industrial robots can be programmed to do {
              <TooltippedText
                text="menial"
                textVariant="body"
                definition="Not requiring much skill and lacking prestige."
              />
            } tasks. Industrial robots can do many tasks such as welding, painting, assembly, and pick-and-place. <br />
            
          </Typography>,
        ]}
      />,
    ],
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Paper id="Presentation">
      <BottomNavigation showLabels id="Presentation_Bottom_Bar">
        {navigation_actions.map((props) => {
          return <BottomNavigationAction {...props} />;
        })}
      </BottomNavigation>
      <div id="Presentation_Container">{slides[currentSlide]}</div>
    </Paper>
  );
}

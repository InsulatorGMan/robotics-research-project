import {
  NavigateBeforeTwoTone,
  NavigateNextTwoTone,
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Typography,
} from "@mui/material";
import "./PresentationController.css";
import { useState } from "react";

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
      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@0.9.480/build/spline-viewer.js"
      ></script>,
      <spline-viewer url="https://prod.spline.design/Ya4PVoyg5dHBiTja/scene.splinecode"></spline-viewer>,
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

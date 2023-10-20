import {
  ExpandMore,
  FormatListBulleted,
  NavigateBeforeTwoTone,
  NavigateNextTwoTone,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import "./PresentationController.css";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import BaseSlide from "./BaseSlide";
import TooltippedText from "./TooltippedText";
import "./Slides.css";

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
      icon: <NavigateNextTwoTone/>,
      label: "Next",
      onClick: () => {
        if (slides[currentSlide + 1] != null) {
          setCurrentSlide(currentSlide + 1);
        }
      },
    },
  ];

  const questions = [
    {
      title: "What are the pros & cons?",
      content: (
        <Stack spacing={2}>
          <Typography color={"#60f71b"}>+ They are very precise</Typography>
          <Typography color={"#60f71b"}>
            + Millions are produced each year
          </Typography>
          <Typography color={"#f7591b"}>- They are expensive</Typography>
          <Typography color={"#f7591b"}>- Limited Speed</Typography>
          <Typography color={"#f7591b"}>- They take up a big space</Typography>
        </Stack>
      ),
    },
    {
      title: "Who is this intended for?",
      content: (
        <Typography>
          This technology is intended to be used in several industries, some examples include:<br/>
           * Automotive/Cars<br/>
           * Computer components<br/>
           * Sometimes used in <b>bomb defusing robots</b>
        </Typography>
      ),
    },
  ];

  const slides = [
    [
      <Spline scene="https://prod.spline.design/kUba3WvVow1WGhQB/scene.splinecode"></Spline>,
    ],
    [
      <BaseSlide
        children={[
          <Typography variant="h3">Overview</Typography>,
          <Typography variant="h5">
            What they are and their purpose.
          </Typography>,
          <Divider />,
          <Typography variant="h6" textAlign={"center"}>
            Industrial robots are robots that are used in{" "}
            {
              <TooltippedText
                text="manufacturing"
                textVariant="body"
                definition="Manufacturing is the creation or production of goods."
              />
            }
            . <br /> Industrial robots can be programmed to do{" "}
            {
              <TooltippedText
                text="menial"
                textVariant="body"
                definition="Not requiring much skill and lacking prestige."
              />
            }{" "}
            tasks. Industrial robots can do many tasks such as welding,
            painting, assembly, and pick-and-place. <br />
          </Typography>,
          <Paper elevation={5} id="Slide1_Image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Automation_of_foundry_with_robot.jpg/220px-Automation_of_foundry_with_robot.jpg" />
            <Typography variant="h5">
              Articulated industrial robot operating in a foundry
            </Typography>
          </Paper>,
        ]}
      />,
    ],
    [
      <BaseSlide
        children={[
          <Typography variant="h3">Automation</Typography>,
          <Typography variant="h5">How they are used.</Typography>,
          <Divider />,
          <Typography variant="h6" textAlign={"center"}>
            Robots exhibit differing amounts of{" "}
            {
              <TooltippedText
                text="autonomy"
                textVariant="body"
                definition="The ability to act."
              />
            }{" "}
            this can vary from using preset instructions to adapting on the fly
            <br />
            using{" "}
            {
              <TooltippedText
                text="machine learning"
                textVariant="body"
                definition="A way of teaching a computer to 'think'"
              />
            }
            . A type of machine learning called image recognition can be used
            for the robot to adapt to new information on the fly.
            <Paper
              elevation={5}
              style={{
                position: "absolute",
                bottom: "10%",
                width: "40%",
                height: "50%",
                left: "30%",
              }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPyHEqhCxEa77DPRGzbkKOLY9lPYCnB80KFg&usqp=CAU" />
              <Typography variant="h5" textAlign={"center"}>
                Robot using machine learning technology to sort industrial
                materials
              </Typography>
            </Paper>
            ,
          </Typography>,
        ]}
      />,
    ],
    [
      <BaseSlide
        children={[
          <Typography variant="h3">Questions</Typography>,
          <Typography variant="h5">
            Important questions to these problems.
          </Typography>,
          <Divider />,
          <Paper id="QuestionsContainer">
            {questions.map((question) => {
              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{question.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>{question.content}</AccordionDetails>
                </Accordion>
              );
            })}
          </Paper>,
        ]}
      />,
    ],
  ];
  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPyHEqhCxEa77DPRGzbkKOLY9lPYCnB80KFg&usqp=CAU
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

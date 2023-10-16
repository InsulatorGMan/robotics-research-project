import { Paper } from "@mui/material";
import Theme from "./Theme/Theme";
import "./App.css";
import SlideControls from "./Presentation/PresentationController";
export default function App() {
  return (
    <Theme>
      <Paper style={{ borderRadius: 0 }} id="App">
        <SlideControls></SlideControls>
      </Paper>
    </Theme>
  );
}

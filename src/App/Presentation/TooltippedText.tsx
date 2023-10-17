import {
  Tooltip,
  Typography,
  TypographyPropsVariantOverrides,
} from "@mui/material";

interface TooltippedTextProps {
  text: string;
  textVariant: any;
  definition: string;
}

export default function TooltippedText(props: TooltippedTextProps) {
  return (
    <Tooltip title={props.definition} >
      <Typography variant={props.textVariant} color={'lightblue'}>{props.text}</Typography>
    </Tooltip>
  );
}

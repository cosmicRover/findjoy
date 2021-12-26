import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TypeAnimation from "./TypeAnimation.js";
import constants from "../constants.js";

const handleResumeClick = () => {
  window.open(constants.resume);
};

export default function IntroCardComponent({ sample_content, speed }) {
  return (
    <Card
      sx={{ minWidth: 575, height: 250, border: "none", boxShadow: "none" }}
      onClick={handleResumeClick}
    >
      <CardContent>
        <Typography sx={{ fontSize: 36 }} color="text.primary" gutterBottom>
          <TypeAnimation content={sample_content} speed={speed} />
        </Typography>
      </CardContent>
    </Card>
  );
}

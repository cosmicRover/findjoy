import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import GithubIcon from "@mui/icons-material/Github";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PDFIcon from "@mui/icons-material/PictureAsPdf";
import Typography from "@mui/material/Typography";
import constants from "../link_constants/constants.js";

function handleGitClick() {
  window.open(constants.git);
}

const handleINClick = () => {
  window.open(constants.in);
};

const handleResumeClick = () => {
  window.open(constants.resume);
};

export default function SocialCardComponent({ quote }) {
  return (
    <Card sx={{ width: 575, border: "none", boxShadow: "none" }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Connect with me
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          I ♥ this
        </Typography>
        <Typography variant="body2">
          {quote["text"]}
          <br />― {quote["author"]}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="LinkedIn" onClick={handleINClick}>
          <LinkedInIcon style={{ height: "40px", width: "40px" }} />
        </IconButton>
        <IconButton aria-label="Github" onClick={handleGitClick}>
          <GithubIcon style={{ height: "40px", width: "40px" }} />
        </IconButton>
        <IconButton aria-label="Resume" onClick={handleResumeClick}>
          <PDFIcon style={{ height: "40px", width: "40px" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

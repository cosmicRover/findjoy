import IntroCardComponent from "../TypeAnimationComponent/IntroCardComponent";
import SocialCardComponent from "../TypeAnimationComponent/SocialCardComponent";
import Grid from "@mui/material/Grid";

const TEXT_RESOURCES = {
  intro: `Hello! 👋
My name is Joy, 
view my résumé 👈`,
  quote: {
    text: "“A person's life may be a lonely thing by nature, but it is not isolated. To that life other lives are linked.”",
    author: "Haruki Murakami",
  },
};

const Home = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <IntroCardComponent sample_content={TEXT_RESOURCES["intro"]} speed={90} />
      <SocialCardComponent quote={TEXT_RESOURCES["quote"]} />
    </Grid>
  );
};

export default Home;

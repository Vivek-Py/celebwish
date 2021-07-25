// Create a page for celeb list, just keep 4-5 cards for now
// Utilise dummy images for the same, just to see how it looks

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Details from "./Details";
import actorsData from "../utilis/actorsData";
import Layout from "./Layout";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Homepage() {
  const [actorProfile, setActorProfile] = useState(false);
  const [selected, setSelected] = useState(null);
  const classes = useStyles();

  return (
    <Layout>
      {!actorProfile ? (
        actorsData.map((e, index) => (
          <Card
            className={classes.root}
            key={index}
            onClick={() => {
              setActorProfile(!actorProfile);
              setSelected(index);
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Actors"
                height="140"
                image={e.image}
                title={e.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {e.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {e.about}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      ) : (
        <Details
          selected={selected}
          actorProfile={actorProfile}
          setActorProfile={setActorProfile}
        />
      )}
    </Layout>
  );
}

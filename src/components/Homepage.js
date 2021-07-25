// Create a page for celeb list, just keep 4-5 cards for now
// Utilise dummy images for the same, just to see how it looks
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:"0 10%",
  },
});
export default function Homepage() {
  const classes = useStyles();
  const actorsData = [
    {
      name: "Jim Carrey",
      about:
        "Jim Carrey, Canadian-born and a U.S. citizen since 2004, is an actor and producer famous for his rubbery body movements and flexible facial expressions. The two-time Golden Globe-winner rose to fame as a cast member of the Fox sketch comedy In Living Color (1990) but leading roles in Ace Ventura",
      image: "/assets/Jim-Carrey.jpg",
    },
    {
      name: "Arnold Schwarzenegger",
      about:
        "With an almost unpronounceable surname and a thick Austrian accent, who would have ever believed that a brash, quick talking bodybuilder from a small European village would become one of Hollywood's biggest stars, marry into the prestigious Kennedy family, amass a fortune via shrewd investments",
      image: "/assets/Arnold-Schwarzenegger.jpg",
    },
    {
      name: "Johnny Depp",
      about:
        "Johnny Depp is perhaps one of the most versatile actors of his day and age in Hollywood.He was born John Christopher Depp II in Owensboro, Kentucky, on June 9, 1963, to Betty Sue (Wells), who worked as a waitress, and John Christopher Depp, a civil engineer.Depp was raised in Florida.",
      image: "/assets/Johnny-Depp.jpg",
    },
  ];
  return (
    <>
      {actorsData.map((e, index) => (
        <Card className={classes.root} key={index}>
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
      ))}
    </>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    card: {
      maxWidth: '100%',
      height: '100%',
    },
    media: {
        height: 140,
    }
  });

function MediaCard({data}) {
    const classes = useStyles();
    const  {url, title, img_url, source_name} = data

  return (
    <Card className={classes.card}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt="Noticia"
          height="140"
          image={img_url}
          title={title}
        />
        <CardContent >
          <Typography gutterBottom variant="body1" component="h4">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            {source_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Ver Más
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard

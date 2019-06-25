import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

function MadeWithLove() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Hecho con <3 utlizando '}
        <Link color="inherit" href="https://material-ui.com/">
          Pair Programming
        </Link>
        {' XP.'}
      </Typography>
    );
  }

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div style={{margin: '10px'}} >

    <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            News Feed
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Todas las noticias en un solo lugar!
          </Typography>
          <MadeWithLove />
        </Container>
      </footer>
    </div>
  );
}

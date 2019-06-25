import React from 'react';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const StyledFooter = styled(Container)`
  .MuiContainer-root .MuiContainer-maxWidthLg {
    margin-top:50px;
  }
`

function PaperSheet() {

  return (
    <div style={{margin: '50px'}} >

    <StyledFooter >
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Proyecto News Feed
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Todas las noticias en un solo lugar!
          </Typography>
        </Container>
      </StyledFooter>
    </div>
  );
}

export default PaperSheet
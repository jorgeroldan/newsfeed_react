import React from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const StyledToolbar = styled(Toolbar)`
  h6 {
    flex-grow: 1;
  }
`

const StyledTextField = styled(TextField)`
    .MuiInputBase-root  {
        color: white;
    }

    .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
        border-color: white;
    }
 
    .MuiInputLabel-outlined.MuiInputLabel-marginDense {
        color: white;
    }
`

function ButtonAppBar(props) {
  // const { history } = this.props
  // console.log('props en ButtonAppBar',this.props)
  

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Typography variant="h6"> News Feeds</Typography>
          <StyledTextField
                onKeyPress={(event)=>event.key === 'Enter' ? props.history.push(`search/${event.target.value}`):null}
                label="Buscar noticias"
                margin="dense"
                variant="outlined"
            />       
        </StyledToolbar>
      </AppBar>
  );
}

export default withRouter(ButtonAppBar);
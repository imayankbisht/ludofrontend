import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Main from './Main';

const RoomManagement =()=>(
      <BrowserRouter>
         <Container>
            <Main/>
         </Container>
         <CssBaseline/>
      </BrowserRouter>
)

export default RoomManagement;
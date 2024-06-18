import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Top Products</Link>
        </Typography>
        <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Register</Button>
        </Link>
      </Toolbar>
    </AppBar>
    <Container>
      {children}
    </Container>
  </>
);

export default Layout;

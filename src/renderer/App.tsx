import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WindowPortal from './WindowPortal';

const Home = () => {
  const [isPopoutOpen, setIsPopoutOpen] = React.useState(false);
  const handleClose = React.useCallback(() => {
    setIsPopoutOpen(false);
  }, []);

  return (
    <>
      <Box>
        <Typography variant="h1">Home</Typography>
        <Button variant="contained" onClick={() => setIsPopoutOpen(true)}>
          Open Popout
        </Button>
      </Box>
      {isPopoutOpen && (
        <WindowPortal
          id="popout"
          title="Hello World"
          width={400}
          height={300}
          onClose={handleClose}
        >
          <Box>
            <Typography variant="h1">Popout</Typography>
            <Button variant="contained" onClick={handleClose}>
              Close Popout
            </Button>
          </Box>
        </WindowPortal>
      )}
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

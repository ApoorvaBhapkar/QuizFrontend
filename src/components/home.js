import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box mt={4}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to the Quiz Application
      </Typography>
      <Typography variant="h5" component="p">
        Use the navigation bar to add questions, create quizzes, or attempt quizzes.
      </Typography>
    </Box>
  );
};

export default Home;

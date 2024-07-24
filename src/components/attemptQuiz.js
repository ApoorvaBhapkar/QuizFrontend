// AttemptQuiz.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const AttemptQuiz = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Attempt Quiz
      </Typography>
      <Typography variant="body1">
        This is the page where you can attempt a quiz.
      </Typography>
    </Box>
  );
};

export default AttemptQuiz;

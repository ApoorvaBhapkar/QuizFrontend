// CreateQuiz.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const CreateQuiz = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create Quiz
      </Typography>
      <Typography variant="body1">
        This is the page where you can create a new quiz.
      </Typography>
    </Box>
  );
};

export default CreateQuiz;

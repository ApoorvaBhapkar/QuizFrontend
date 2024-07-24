import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const AddQuestion = ({ onAddQuestion }) => {
  const [questionTitle, setQuestionTitle] = useState('');
  const [category, setCategory] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [rightAnswer, setRightAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuestion = {
      question_title: questionTitle,
      category,
      difficulty_level: difficultyLevel,
      option1,
      option2,
      option3,
      option4,
      right_answer: rightAnswer,
    };

    try {
      const response = await axios.post('http://localhost:8080/question/addQuestion', newQuestion);
      console.log(response.data);
      onAddQuestion(newQuestion);
      
      // Clear the form fields
      setQuestionTitle('');
      setCategory('');
      setDifficultyLevel('');
      setOption1('');
      setOption2('');
      setOption3('');
      setOption4('');
      setRightAnswer('');
    } catch (error) {
      console.error('There was an error adding the question:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& .MuiTextField-root': { m: 1, width: '100%' },
          '& .MuiButton-root': { m: 2 },
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Add a New Question
        </Typography>
        <TextField
          label="Question"
          variant="outlined"
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
          required
        />
        <TextField
          label="Category"
          variant="outlined"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <TextField
          label="Difficulty"
          variant="outlined"
          value={difficultyLevel}
          onChange={(e) => setDifficultyLevel(e.target.value)}
          required
        />
        <TextField
          label="Option 1"
          variant="outlined"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
          required
        />
        <TextField
          label="Option 2"
          variant="outlined"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
          required
        />
        <TextField
          label="Option 3"
          variant="outlined"
          value={option3}
          onChange={(e) => setOption3(e.target.value)}
          required
        />
        <TextField
          label="Option 4"
          variant="outlined"
          value={option4}
          onChange={(e) => setOption4(e.target.value)}
          required
        />
        <TextField
          label="Right Answer"
          variant="outlined"
          value={rightAnswer}
          onChange={(e) => setRightAnswer(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Question
        </Button>
      </Box>
    </Container>
  );
};

export default AddQuestion;

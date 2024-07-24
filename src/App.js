import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddQuestion from './components/questionForm';
import CreateQuiz from './components/createQuiz';
import AttemptQuiz from './components/attemptQuiz';
import Home from './components/home';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/add-question">Add Question</Button>
          <Button color="inherit" component={Link} to="/create-quiz">Create Quiz</Button>
          <Button color="inherit" component={Link} to="/attempt-quiz">Attempt Quiz</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-question" element={<AddQuestion />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />
          <Route path="/attempt-quiz" element={<AttemptQuiz />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

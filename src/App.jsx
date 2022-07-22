import React from 'react'
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom"
import Main from './routes/Main';
import Menu from "./components/Menu";
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
      <Router>
          <AuthProvider>
              <Menu />
              <Container>
                  <Main/>
                  <Footer/>
              </Container>
          </AuthProvider>
      </Router>
  );
}

export default App;



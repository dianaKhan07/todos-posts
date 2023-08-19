import { Box, Container } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Posts from "./screens/posts";
import Todos from "./screens/todo";
import Header from "./components/Header";

function App() {
  
  return (
    <Box>
      <Container sx={{ mt: '100px'}}>
        <Header/>
        <Routes>
          <Route path="/" element={<Todos/>}/>
          <Route path="/posts" element={<Posts/>}/>
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
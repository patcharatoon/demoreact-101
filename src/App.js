import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Header />
      <Container className="my-5" style={{ minHeight: "90vh" }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;

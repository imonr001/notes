import Login from "./pages/Login";
import { Route, Routes } from "react-router";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home"
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" exact={true} element={<Login />}></Route>
        <Route path="/signup"  element={<SignUp />}></Route>
        <Route path="/"  element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;

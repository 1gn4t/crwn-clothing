import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SingIn from "./routes/sign-in/sing-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>I am the shop page</h1>} />
        <Route path="sign-in" element={<SingIn />} />
      </Route>
    </Routes>
  );
}

export default App;

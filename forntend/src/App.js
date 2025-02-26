import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup.js";
import MyOrder from "./screens/MyOrder.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { CardProvider } from "./components/Contextreducer.js";

function App() {
  return (
    <CardProvider>

    <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/createuser" element={<Signup/>} />
      <Route exact path="/myOrder" element={<MyOrder/>} />
    </Routes>
    </Router>
    </CardProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Auth from "./layouts/Auth";
import Dashboard from "./layouts/Dashboard"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/SignIn";
import Books from "./pages/dashboard/books/Books";
import Characters from "./pages/dashboard/characters/Characters";
import George from "./pages/dashboard/george/George";
import Houses from "./pages/dashboard/houses/Houses";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<George />} />
            <Route path="/books" element={<Books />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/characters" element={<Characters />} />
          </Route>
          <Route path="auth" element={<Auth/>}>
            <Route index element={<Login/>}/>
            <Route path="signin" element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

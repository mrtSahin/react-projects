import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Auth from "./layouts/Auth";
import Dashboard from "./layouts/Dashboard"
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/SignIn/SignIn";
import Books from "./pages/dashboard/books/Books";
import CharacterDetails from "./pages/dashboard/characters/CharacterDetails";
import Characters from "./pages/dashboard/characters/Characters";
import George from "./pages/dashboard/george/George";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}>{/** PrivateRoute ile localeStorage dan kullanıcının daha önceden giriş yapıp yapmadığına bakarak; eğer yapmamışsa login sayfasına yönlendiriyoruz. */}
            <Route index element={<George />} /> {/** normalde index sayfa olarak George componenti olduğu için Bu sayfayı PrivateRoute içine almıştım ama kullanıcı Books sayfasındayken çıkış yaptıktan sonra gerş tuşuna basınca Books sayfasına geri yönlendiriyordu. */}
            <Route path="/books" element={<Books />} /> {/** çünkü sadece George saysafında kullanıcının daha öne giriş yapıp yapmadığı kontrol ediliyordu. Bu kontrolün diğer sayfalarıda  kapsaması için Dashboar layoutunu Privateroute içerisine aldık. */}
            <Route path="/characters" element={<Characters />} />
            <Route path="/characterDetails" element={<CharacterDetails />}></Route>
          </Route>
          <Route path="auth" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="signin" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

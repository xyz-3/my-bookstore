//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import "./App.css";
import HomeView from "./View/HomeView";
import BookView from "./View/BookView";
// import Book from "./Components/Book";
import CartView from "./View/CartView";
import UserView from "./View/UserView";
import OrderView from "./View/OrderView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/Cart"  element={<CartView />}/>
        <Route path="/Order" element={<OrderView />}/>
        <Route path="/Profile" element={<UserView />}/>
        <Route path="/Book/:id" element={<BookView />}/>
      </Routes>
    </Router>
  );
}

export default App;

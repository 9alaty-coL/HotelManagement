import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import BookRoom from "./pages/BookRoom";
import Bill from "./pages/Bill";
import Room from "./pages/Room"
import RoomList from "./pages/RoomList";
import ServiceList from "./pages/ServiceList";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Messenger from "./pages/Messenger";
import Logout from "./pages/Logout";
import _AuthContext from "./context/AuthContext"
import { useContext } from "react";

function App() {
  const AuthContext = useContext(_AuthContext)
  return (

    <Routes>
      {AuthContext.isLoggedIn && <Route path="/" element={<Home />} />}
      {AuthContext.isLoggedIn && <Route path="/room" element={<Room />}>
        <Route path=":RoomId" element={<Room />} />
      </Route>}
      {AuthContext.isLoggedIn && <Route path="/book-room" element={<BookRoom />} />}
      {AuthContext.isLoggedIn && <Route path="/bills" element={<Bill />} />}
      {AuthContext.isLoggedIn && <Route path="/room-list" element={<RoomList />} />}
      {AuthContext.isLoggedIn && <Route path="/service-list" element={<ServiceList />} />}
      {AuthContext.isLoggedIn && <Route path="/account" element={<Account />} />}
      {AuthContext.isLoggedIn && <Route path="/messenger" element={<Messenger />} >
        <Route path=":recieverId" element={<Messenger />} />
      </Route>}
      {AuthContext.isLoggedIn && <Route path="/logout" element={<Logout />} />}
      {!AuthContext.isLoggedIn && <Route path="/auth" element={<Login />} />}
      <Route path="*" element={<Navigate replace to={`${AuthContext.isLoggedIn ? '/' : 'auth'}`} />} />
    </Routes>
  );
}

export default App;

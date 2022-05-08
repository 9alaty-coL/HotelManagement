import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BookRoom from "./pages/BookRoom";
import Bill from "./pages/Bill";
import Room from "./pages/Room"
import RoomList from "./pages/RoomList";
import ServiceList from "./pages/ServiceList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room" element={<Room />}>
        <Route path=":RoomId" element={<Room />} />
      </Route>
      <Route path="/book-room" element={<BookRoom />} />
      <Route path="/bills" element={<Bill />} />
      <Route path="/room-list" element={<RoomList />} />
      <Route path="/service-list" element={<ServiceList />} />
    </Routes>
  );
}

export default App;

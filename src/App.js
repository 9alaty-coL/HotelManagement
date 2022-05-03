import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BookRoom from "./pages/BookRoom";
import Bill from "./pages/Bill";
import Room from "./pages/Room"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room" element={<Room />}>
        <Route path=":RoomId" element={<Home />} />
      </Route>
      <Route path="/book-room" element={<BookRoom />} />
      <Route path="/bills" element={<Bill />} />
    </Routes>
  );
}

export default App;

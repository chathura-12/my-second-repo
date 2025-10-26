import { Routes, Route, Link } from "react-router-dom";
import BookingPage from "./BookingPage";
import Homepage from "./Homepage";
import About from "./pages/About";

export default function Navbar() {
    return (
        <>
            <nav>
                <Link to="/" className="nav_item">Home</Link>
                <Link to="/booking" className="nav_item">Booking</Link>
                <Link to="/about" className="nav_item">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/booking" element={<BookingPage/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </>

    )
}
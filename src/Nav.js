import { Routes, Route, Link } from "react-router-dom";
import BookingPage from "./BookingPage";
import Homepage from "./Homepage";
export default function Nav() {
    return (
        <>
            <nav>
                <Link to="/" className="nav_item">Home</Link>
                <Link to="/booking" className="nav_item">Booking</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/booking" element={<BookingPage/>} />
            </Routes>
        </>

    )
}
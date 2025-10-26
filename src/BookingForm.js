import React, {useState} from "react";

export default function BookingForm({availableTime, dispatch}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occation, setOccation] = useState("");
    const [state, setState] = useState(true)

    const occations = ["Birthday", "Anniversary"];

    const handleState = () => {
        setState(!state);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
    }

    const handleDate = (e) => {
        setDate(e.target.value);
        dispatch({type: 'Update_time', payload: {date: e.target.value}});
    }
    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                onChange={handleDate}
                type="date"
                id="res-date"
            />
            <p>date is: {date}</p>
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time "
                onChange={(e) => setTime(e.target.value)}>
                {Array.isArray(availableTime) &&
                    availableTime.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            <p>Time is: {time}</p>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                onChange={(e) => setGuests(e.target.value)}
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
            />
            <p>guests: {guests}</p>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => setOccation(e.target.value)}>
                {occations.map((oc) => (
                    <option value={oc}>{oc}</option>
                ))}
            </select>
            <p>Occation is: {occation}</p>
            <p>This seat is: {state ? 'Yes':'No'}</p>
            <button onClick={handleState} type="submit">Submit</button>
        </form>
    )
}
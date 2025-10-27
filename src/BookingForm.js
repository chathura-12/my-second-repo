import React, {useState} from "react";

const BookingForm = (props) => {

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("Reservation successful!")
    setDate("")
    setTime("")
    setGuests(1)
    setOccasion("")
  }

  const handleChange = (e) => {
    setDate(e)
    props.dispatch(e)
  }
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
            </div>
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select id='book-time' value={time} onChange={e => setTime(e.target.value)}>
                 <option value="">Select a Time</option>
                 {
                    (props.availableTimes || ["19:00", "20:00", "21:00", "22:00"]).map(timeOption => (
                      <option key={timeOption} value={timeOption}>
                        {timeOption}
                      </option>
                    ))
                 }
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of guests</label>
              <input
                id="book-guests"
                min='1' max='10'
                value={guests}
                onChange={e => setGuests(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select id='book-occasion' value={occasion} onChange={e => setOccasion(e.target.value)}>
                 <option>Birthday</option>
                 <option>Anniversary</option>
              </select>
            </div>
            <div className="btnRecieve">
              <input aria-label="On Click" type="submit" value={"Make Your Reservation"}/>
            </div>
            {success && <p className="success-message">{success}</p>}
          </fieldset>
        </form>
      </section>
    </header>
  );
}

export default BookingForm;
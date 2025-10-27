import BookingForm from "./BookingForm";
import React, {useReducer} from "react";

export default function Main() {
    

    function updateTimes(state, action) {
        if (action.type === 'Update_time') {
            return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        }
        else {
            return state;
        }
    }

    const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }
    



    const[availableTime, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
            <main>
                <BookingForm availableTime={availableTime} dispatch={dispatch}/>
            </main>
        )

    }
    

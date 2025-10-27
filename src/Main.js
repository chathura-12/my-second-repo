import React, {useReducer} from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Booking from "./Booking";

export default function Main() {

    const seedRandom = function(seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function() {
            return (s = s * a % m) /m;
        }
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i <=23; i++) {
            if(random() < 0.5){
                result.push(i + ':00');
            }
            if(random() > 0.5){
                result.push(i + '30');
            }
        }
        return result;
    }



    const initialState = () => {return fetchAPI(new Date())}

    function updateTimes(state, action) {
        return {availableTimes: fetchAPI(new Date())};
    }


    const [state, dispatch] = useReducer(updateTimes, initialState);
    return (
        <main>
            <Routes>
                <Route path="/" element={<Header/>}/>
                <Route path="/booking"
                    element={
                    <Booking
                        availabletTimes={state}
                        dispatch={dispatch}
                    />}
                />
                <Route path="/" element={<Header/>}/>
            </Routes>
        </main>
    )
}
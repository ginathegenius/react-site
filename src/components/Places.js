import React from "react";
import "./Places.css";
import {seacoastData} from "../data/seacoast"

export default function Places() {
    let tmp = {};
    seacoastData.forEach(item => {
        if (tmp[item.location]) {
            tmp[item.location].push(item);
            // console.log(item)
            // console.log(tmp)
        } else {
            tmp[item.location]=[item];
        }
        
    });
    console.log(tmp);
    let keys = Object.keys(tmp)
  return (
    <>
    <div className="places-container">
        {/* {keys.map(place => <h4>{place}</h4>)} */}
        {keys.map(place=>
            <div><h4 className="location-header">{place}</h4>
            {tmp[place].map(place2 => {
                return (
                <div><h5 className="place-name">{place2.name}</h5> <p className="place-description">{place2.recommendation}</p></div>)
            })}</div>
        )}

        {/* {tmp.map(i => {
            return {keys.map(j => <h5> {i[j]}</h5>)}
        })} */}
    </div>
    </>
  );
}
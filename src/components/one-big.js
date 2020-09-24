import React, {Component} from "react";
import {useDispatch} from "react-redux"
import {increment} from "../actions/actions";

export const OneBig = new Component(()=>{
    const dispatch = useDispatch();
    return (
        <div>
            <h1>redux!</h1>
            <h2>0</h2>
            <button onClick={()=>dispatch(increment)}>add</button>
        </div>
    );
});
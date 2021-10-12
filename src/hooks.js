import axios from "axios";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";


const useFlip = (isFacingUp=true) => {
    const [flip, setFlip] = useState(isFacingUp);
    const toggleFlip = () => {
        setFlip(flip => !flip)
    }
    return [flip, toggleFlip]
};

const useAxios = (url) => {
    const [data, setData] = useState([]);
    const addRes = async (name = "") => {
        const res = await axios.get(`${url}${name}`);
        setData(data => [...data, {...res.data, id: uuid()}]);
    }
    return [data, addRes];
}

// i cheated on useAxios
// have to use () => to do ...data type stuff to fill out arrays
// head hurts

export { useFlip, useAxios };
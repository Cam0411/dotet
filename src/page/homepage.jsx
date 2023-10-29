import {IoIosCall} from "react-icons/io"
import {AiOutlineMail,AiOutlineSearch} from "react-icons/ai"
import {CiLocationOn} from "react-icons/ci"
import React, { useState, useEffect } from 'react';
import Header from "../component/header";
import Slider from "../component/slider";
import Container from "../component/container";
const HomePage = () => {

    return (
        <div>
           <Header />
           <Slider />
           <Container />
        </div>
    )
}

export default HomePage
import {IoIosCall} from "react-icons/io"
import {AiOutlineMail,AiOutlineSearch} from "react-icons/ai"
import {CiLocationOn} from "react-icons/ci"
import React, { useState, useEffect } from 'react';
import Header from "../component/header";
import Slider from "../component/slider";
import Container from "../component/container";
import Footer from "../component/footer"
import Social from "../component/social/social";
import { Helmet } from 'react-helmet';
const HomePage = () => {

    return (
        <div>
            <Helmet>
       
            <title>Trang Trí Tết Nguyên Đán 2024: Mẫu Mới Nhất, Giá Tốt Nhất</title>
            </Helmet>
           <Header />
           <Slider />
           <Container />
           <Social />
           <Footer />
        </div>
    )
}

export default HomePage
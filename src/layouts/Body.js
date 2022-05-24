import React from "react";
import { Button } from "react-bootstrap";
// import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { jobposting } from "../ controller/jobposting";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export default function Body() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide>
          <div className="title yellow underline" data-swiper-parallax="-300">
            나에게 딱 맞는 회사는?
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            채용 정보 추천
          </div>
          <div className="detail_btn" data-swiper-parallax="-200">
            <Button variant="outline-light" href="/my_resume">
              자세히 보기
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title yellow underline" data-swiper-parallax="-300">
            비대면 면접 솔루션
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            모의면접 바로가기
          </div>
          <div className="detail_btn" data-swiper-parallax="-200">
            <Button variant="outline-light" href="/interview">
              자세히 보기
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title yellow underline" data-swiper-parallax="-300">
            나에게 어울리는 IT 직군은?
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            it-mbti 바로가기
          </div>
          <div className="detail_btn" data-swiper-parallax="-200">
            <Button variant="outline-light" href="/it-mbti">
              자세히 보기
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>{jobposting}</div>
    </>
  );
}

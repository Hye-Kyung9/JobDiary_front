import React from "react";
import { Button } from "react-bootstrap";
// import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
            <Button variant="outline-light">자세히 보기</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title yellow" data-swiper-parallax="-300">
            나에게 딱 맞는 회사는?
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            채용 정보 추천
          </div>
          <div className="detail_btn" data-swiper-parallax="-200">
            <Button variant="outline-light">자세히 보기</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title yellow underline" data-swiper-parallax="-300">
            나에게 어울리는 IT 직군은?
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            it-mbti
          </div>
          <div className="detail_btn" data-swiper-parallax="-200">
            <Button variant="outline-light">자세히 보기</Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

// import React from "react";
// import { Carousel } from "react-bootstrap";
// import banner3 from "./imgs/it-mbti.png";
// // import {Helmet} from "react-helmet";
// // import {mbti} from '../pages/it-mbti'

// function Body() {
//   return (
//     <div className="dbody">
//       <Carousel>
//         <Carousel.Item interval={2000}>
//           <a href="">
//             <img className="d-block w-100" src="" alt="기업추천 바로가기" />
//           </a>
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item interval={2000}>
//           <a href="">
//             <img className="d-block w-100" src="" alt="모의면접 바로가기" />
//           </a>
//         </Carousel.Item>
//         <Carousel.Item interval={2000}>
//           {/* <Helmet>
//               <script src="/pages/it-mbti/javascript.js" type="text/javascript" />
//             </Helmet> */}
//           <a href="">
//             <img
//               className="d-block w-100"
//               src={banner3}
//               alt="나에게 맞는 직군"
//             />
//           </a>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }
// export default Body;

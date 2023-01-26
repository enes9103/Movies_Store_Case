// React imports
import React from "react";
import { Link } from "react-router-dom";

// Image imports
import Ticket from "../assets/Blue Illustration Festival Ticket.png";
import Ticket2 from "../assets/Yellow Brown Illustration Cinema Ticket.png";
import Movie1 from "../assets/Antique White Minimalist Sci-Fi Movie Poster.png";
import Movie2 from "../assets/Futuristic sci-fi film poster.png";
import Movie3 from "../assets/Blue Horror Movie Poster.png";
import Movie4 from "../assets/White Navy Drama Romance Story Promotion Movie Poster.png";
import Movie5 from "../assets/Black And White Horror Movie Poster.png";
import logo from "../assets/logo.png";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Swiper modules imports
import { FreeMode, Pagination } from "swiper";

const Home = () => {
  return (
    <div className="">
      <div className="border border-b-2">
        <marquee
          onmouseout="this.start();"
          onmouseover="this.stop();"
          className="mt-2"
        >
          <div className="flex">
            <img
              className="w-7 h-6 mr-3"
              src={logo}
              alt=""
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <p>
              Rafadan Tayfa: Galaktik Tayfa | Seanslar: 17.00 / 20.00 ----
              Kutsal Damacana 4 | Seanslar: 18.00 / 21.00 ---- Avatar: Suyun
              Yolu | Seanslar: 16.00 / 19.00 | Servet Operasyonu | Seanslar:
              15.00 / 18.00
            </p>
          </div>
        </marquee>
      </div>

      <div className="mt-5 text-blue-800">
        <h1 className="text-3xl">Roam Freely In Our Movie App</h1>
        <h2 className="text-2xl mt-1">Choose Your Side</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-4">
        <Link to={`/search-movies`} className="text-link">
          <img src={Ticket2} alt="" className="w-[320px] h-[160px] mt-2" />
        </Link>
        <Link to={`/add-movies`} className="text-link">
          <img src={Ticket} alt="" className="w-[320px] h-[155px] " />
        </Link>
      </div>

      <div className=" max-w-[90%] flex justify-center flex-col items-center flex-wrap mx-auto mt-10 pb-5">
        <h1 className="mb-5 p-2 md:p-0 text-20 md:text-[60px] bg-slate-300 w-full rounded-md">
          COMİNG SOON
        </h1>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Movie1} alt="movie" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie2} alt="movie" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie3} alt="movie" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie4} alt="movie" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie5} alt="movie" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie1} alt="movie" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie2} alt="movie" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie3} alt="movie" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie4} alt="movie" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Movie5} alt="movie" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/hero.css";
import { FaCog, FaCheckCircle, FaGem } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="slide slide1">
            <p>Welcome to</p>
            <h1>Metric Mechanical</h1>
            <p>Engineering Excellence in Hydraulic Solutions</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide2">
             <p>Welcome to</p>
            <h1>Metric Mechanical</h1>
            <p>Trusted by Leading Industries Worldwide</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide3">
             <p>Welcome to</p>
            <h1>Metric Mechanical</h1>
            <p>Advanced Hydraulic Systems</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide4">
             <p>Welcome to</p>
            <h1>Metric Mechanical</h1>
            <p>Reliable Engineering Support</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide5">
             <p>Welcome to</p>
            <h1>Metric Mechanical</h1>
            <p>Industrial Spare Parts</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide6">
             <p>Welcome to</p>
            <h1>Metric Mechanical</h1>
            <p>Quality You Can Trust</p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* ===== OVERLAPPING CARDS ===== */}
      <div className="hero-cards">
        <div className="hero-card">
          <FaCog className="hero-icon" />
          <h3>Quality Policy</h3>
          <p>
            Perfect teamwork to provide high-quality products to our valuable
            customers as per their requirements, on time, every time.
          </p>
        </div>

        <div className="hero-card">
          <FaCheckCircle className="hero-icon" />
          <h3>Quality Objective</h3>
          <p>
            Quality checking at every stage. Increase market share by 2% every
            year. Immediate action on customer complaints within 24 hours.
          </p>
        </div>

        <div className="hero-card">
          <FaGem className="hero-icon" />
          <h3>Quality Assurance</h3>
          <p>
            Ensure training and awareness of safe working methods for new
            employees before assumption of duty.
          </p>
        </div>
      </div>
    </section>
  );
}

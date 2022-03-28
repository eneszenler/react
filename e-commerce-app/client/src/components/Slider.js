import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {Autoplay} from "swiper";
import {Box, Container} from "@chakra-ui/react";

function Slider() {
  return (
    <Box w="100%" h="80%">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide tag="Product1">
          <div
            style={{
              bacgroundImage:
                "url(https://fashion-slider.uiinitiative.com/images/puma.jpg)",
              backgroundAttachment: "cover",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fashion-slider.uiinitiative.com/images/puma.jpg"
            alt=""
            width="100%"
          />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default Slider;

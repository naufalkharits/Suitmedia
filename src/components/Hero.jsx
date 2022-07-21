import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import bg from "../images/bg.jpg"
import about_bg from "../images/about-bg.jpg"

const Hero = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide className="relative">
                <div className="absolute left-4 bottom-16 block w-96 bg-black bg-opacity-50 p-2 font-bold text-white md:bottom-24 md:left-8 md:w-[30rem] md:text-xl lg:left-16 xl:left-32 2xl:left-64">
                    THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO
                    DIGITAL CHEMISTRY
                </div>
                <img
                    className="h-96 w-full object-cover object-center xl:h-[28rem] 2xl:h-[30rem] 3xl:h-[32rem]"
                    src={bg}
                    alt=""
                />
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div className="absolute bottom-16 block w-96 bg-black bg-opacity-50 p-2 font-bold text-white md:bottom-24 md:left-8 md:w-[30rem] md:text-xl lg:left-16 xl:left-32 2xl:left-64">
                    WE DON'T HAVE THE BEST BUT WE HAVE THE GRATEST TEAM
                </div>
                <img
                    className="h-96 w-full object-cover object-center"
                    src={about_bg}
                    alt=""
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default Hero

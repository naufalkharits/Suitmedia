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
                <div className="absolute bottom-24 left-4 hidden w-[30rem] bg-black bg-opacity-50 p-2 text-xl font-bold text-white md:left-8 md:block lg:left-16 xl:left-32 2xl:left-64">
                    THIS IS A PLACE WHERE TECHNOLOGY & CREATIVITY FUSED INTO
                    DIGITAL CHEMISTRY
                </div>
                <img
                    className="h-96 w-full object-cover object-center"
                    src={bg}
                    alt=""
                />
            </SwiperSlide>
            <SwiperSlide className="relative">
                <div className="absolute bottom-24 left-4 hidden w-[30rem] bg-black bg-opacity-50 p-2 text-xl font-bold text-white md:left-8 md:block lg:left-16 xl:left-32 2xl:left-64">
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

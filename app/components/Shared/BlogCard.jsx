import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSingleCard from "./BlogSingleCard";

export default function BlogCard({ contents, swiperRef }) {
    return (
        <>
            <div className="px-[5%] xl:px-[10%]  relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        1040: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        1480: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {contents.map((content, index) => (
                        <>
                            <SwiperSlide
                                key={index}
                                className="overflow-hidden"
                            >
                                <BlogSingleCard content={content} />
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

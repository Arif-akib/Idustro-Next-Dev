import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSingleCard from "./BlogSingleCard";

export default function BlogCard({ contents, swiperRef }) {
    return (
        <>
            <div className="px-[10%]  relative">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}
                    modules={[Navigation, Pagination]}
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

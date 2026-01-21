import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";
import Banner_img from "../../assets/banner/banner_image.png"

const Banner = () => {
    
    const products=[
        {
            id:1,
            title: "Best Furniture collection for your interior",
            subTitle:"Welcome to chairs",
            img: Banner_img

        },
         {
            id:2,
            title: "Best Furniture collection for your interior",
            subTitle:"Welcome to chairs",
            img: Banner_img

        },
         {
            id:3,
            title: "Best Furniture collection for your interior",
            subTitle:"Welcome to chairs",
            img: Banner_img

        },
         {
            id:4,
            title: "Best Furniture collection for your interior",
            subTitle:"Welcome to chairs",
            img: Banner_img

        },
    ]

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
    };

    return (
        <div className='lg:container mt-4'>
            <div className="slider-container w-full h-full">
                <Slider {...settings}>
                    {
                      products?.map((product)=> (
                            <div key={product?.id} 
                            className="banner_slide_item !flex items-center justify-between bg-[#F0F2F3] rounded-bl-[40px] px-12 lg:px-24 py-16 lg:py-24"
                           >
                            {/* banner text */}
                                <div className="banner_text">
                                    <p className="text-sm font-inter text-[#272343] uppercase font-normal tracking-widest mb-4">{product?.subTitle}</p>
                                    <h3 className="text-4xl lg:text-6xl text-[#272343] font-inter capitalize leading-tight max-w-[557px] w-full font-bold mb-10">{product?.title}</h3>
                                    <button className="max-w-[171px] w-full flex items-center justify-center gap-5 h-[52px] bg-[#029FA1] rounded-lg capitalize text-white cursor-pointer text-sm font-semibold group">
                                        shop now
                                        <MoveRight size={24}/>
                                    </button>
                                </div>

                                {/* banner image */}
                                <div className="banner_image hidden lg:block relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#E1E3E5] rounded-full -z-10"></div>
                                    <img src={product?.img} alt={product?.title} className="w-[434px] h-auto object-contain" />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
        </div>

        </div>
    );
};

export default Banner
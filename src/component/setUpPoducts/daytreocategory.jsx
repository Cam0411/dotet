import { useEffect,useState } from "react";
import axios from "axios";
import { List } from 'react-content-loader';
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import '../../style/swiper.css'
const Daytreocategory = () => {
    const [products,setProduct] = useState();
    const [category,setCategory] = useState("day-treo-viet-nam");
    const [visibleProducts, setVisibleProducts] = useState(10);
   
   
    const apiHaweb = `https://haweb-api.onrender.com/api/product`;
    useEffect(() => {
    const apiHawebcategory = `${apiHaweb}/category/${category}`;
    axios.get(`${apiHawebcategory}`)
        .then((res) => {
           setProduct(res.data.product)  
           
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
    },[category])
    const handleCategory = (cate) => {
        setCategory(cate)
     
     }
  
    return (
        <div class="min-h-[500px]  md:p-3 p-2   " >
        <div class=" max-w-[1200px] mr-auto ml-auto h-auto">
            <div class="w-full text-[#000] flex justify-start items-center mt-5 flex-col md:flex-row">
       
        
          <ul class=" font-medium flex md:text-[18px] text-[14px] ">
          <li class={`mr-5 ml-5  cursor-pointer text-center border-2 p-2 border-[#000]   ${category === "day-treo-viet-nam" ? " text-[#700114] font-bold" : ""} `} onClick={() => handleCategory("day-treo-viet-nam")}>Dây treo Việt Nam</li>
             <li class={`mr-5 cursor-pointer text-center border-2 p-2 border-[#000]   ${category === "day-treo-trung-quoc" ? " text-[#700114] font-bold" : ""} `} onClick={() => handleCategory("day-treo-trung-quoc")}>Dây Treo Trung Quốc</li>

            
          </ul>
  
      
            </div>
           {
            products ? (
                <div class="md:ml-5 Md:mr-5 ml-1 mr-1">
                       <Swiper
                modules={[Navigation, Pagination,Autoplay]}
                slidesPerView={2}
                spaceBetween={10}
                auto={true}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay:4000,
                    disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
                  }}
                breakpoints={{
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
          
              >
                {products.slice(0, visibleProducts).map((product) => (
                  <SwiperSlide key={product.id}>
                    <Link rel="canonical" to={`/product/${product.slug}`}   onClick={() => {window.scroll(0, 0)}} >
                    <div
                      className="cursor-pointer   w-full min-h-[350px] shadow-lg mt-5 mb-10 text-left p-3 text-[14px] sm:text-[16px] bg-white  relative rounded overflow-hidden group border-2 border-[#f2f2f2]"
                    >
                       <img
                        alt={product.photo}
                        src={product.photo}
                        className="mt-5 mb-5 md:max-w-[180px] w-full  ml-auto mr-auto shadow-lg border-2"
                      />
                      <div className="min-h-[100px]">
                        <span className="mt-5">{product.category}</span>
                        <h2 className="font-bold">{product.title}</h2>
                        <p>
                          <span className="font-bold">Mã sản phẩm: </span> {product.codeProduct}
                        </p>
                        <p>
                          <span className="font-bold"> Liên hệ:</span> 0903-133-689
                        </p>
                      </div>
                    </div>
                    </Link>
                  </SwiperSlide>
                ))}
                 </Swiper>
                </div>
             
            ) : <div class="font-bold mt-5"><p><List /></p></div>
           }
        

    
        </div>
      </div>
    )
}

export default Daytreocategory;
import { useEffect,useState } from "react";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { List } from 'react-content-loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import {Link} from "react-router-dom"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import '../../style/swiper.css'
const BestProduct = () => {
    const [products,setProduct] = useState();
    const [category,setCategory] = useState("li-xi");
    const [visibleProducts, setVisibleProducts] = useState(20);
    const [modal,setModal] = useState(false);
    function toggleMenu() {
      setModal(!modal);
    }
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
        <div class="min-h-[500px] bg-gradient-to-r from-[#bb2d0d] to-[#700114] py-3 sm:px-3 px-1 mt-[40px]" >
        <div class=" max-w-[1200px] mr-auto ml-auto h-auto">
        <div class="w-full text-white flex justify-between items-center mt-5 flex-col md:flex-row">
               <h2 class="ml-[20px] text-[22px] font-bold text-[#ffd84b] underline underline-offset-8">Sản phẩm bán chạy</h2>
        
          <ul class="hidden  font-medium md:flex ">
          <li class={`mr-5 cursor-pointer text-center  ${category === "li-xi" ? " text-[#ffd84b] font-bold" : ""} `} onClick={() => handleCategory("li-xi")}>Lì Xì</li>
             <li class={`mr-5 cursor-pointer text-center  ${category === "day-treo-trung-quoc" ? " text-[#ffd84b] font-bold" : ""} `} onClick={() => handleCategory("day-treo-trung-quoc")}>Dây Treo Trung Quốc</li>
             <li class={`mr-5 cursor-pointer text-center  ${category === "day-treo-viet-nam" ? " text-[#ffd84b] font-bold" : ""} `} onClick={() => handleCategory("day-treo-viet-nam")}>Dây treo Việt Nam</li>
             <li class={`mr-5 cursor-pointer text-center  ${category === "dan-tuong" ? " text-[#ffd84b] font-bold" : ""} `} onClick={() => handleCategory("dan-tuong")}>Dán Tường</li>
          </ul>
          <div class=" p-2 block md:hidden mt-5 w-[60%] rounded md:max-w-[200px] text-center cursor-pointer font-bold bg-gradient-to-r from-[#f5ac27]  to-[#ffd84b] shadow-lg" onClick={toggleMenu}>
            <p>Phân loại</p>
          </div> 
          <div class={`${modal ? "min-h-[200px] p-2 " : "h-[0px] p-0" } transition-height duration-300   overflow-hidden  shadow-lg mt-2 font-bold w-full bg-white  md:hidden block`}>
            <ul>
            <li class={`mr-5  py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2   ${category === "li-xi" ? "bg-[#a3262a] text-white" : "text-[#000]"} `} onClick={() => handleCategory("li-xi")}>Lì Xì</li>
             <li class={`mr-5  py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2   ${category === "day-treo-trung-quoc" ? "bg-[#a3262a] text-white" : "text-[#000]"} `} onClick={() => handleCategory("day-treo-trung-quoc")}>Dây Treo Trung Quốc</li>
             <li class={`mr-5  py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2   ${category === "day-treo-viet-nam" ? "bg-[#a3262a] text-white" : "text-[#000]"} `} onClick={() => handleCategory("day-treo-viet-nam")}>Dây treo Việt Nam</li>
             <li class={`mr-5  py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2 mt-2  ${category === "dan-tuong" ? "bg-[#a3262a] text-white" : "text-[#000]"} `} onClick={() => handleCategory("dan-tuong")}>Dán Tường</li>
            </ul>
   
          </div>
            </div>
           {
            products ? (
                <div class="md:ml-5 md:mr-5 ml-1 mr-1">
                       <Swiper
                modules={[Navigation, Pagination,Autoplay]}
                slidesPerView={2}
                spaceBetween={10}
                auto={true}
                navigation={true}
                
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay:3000,
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
                    <Link to={`/${product.slug}`}   onClick={() => { window.scroll(0, 0)}}>
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
                        <h1 className="font-bold">{product.title}</h1>
                        <p>
                          <span className="font-bold">Mã sản phẩm: </span> {product.codeProduct}
                        </p>
                        <p>
                          <span className="font-bold"> Giá:</span> Liên hệ
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

export default BestProduct;
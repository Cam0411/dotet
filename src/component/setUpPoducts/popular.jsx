import { useEffect,useState } from "react";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { List } from 'react-content-loader';
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import '../../style/swiper.css'
const Popular = () => {
    const [products,setProduct] = useState();
    const [category,setCategory] = useState("li-xi");
    const [visibleProducts, setVisibleProducts] = useState(10);
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
        <div class="min-h-[500px] bg-[#700114] p-3  mt-[20px]" >
        <div class=" max-w-[1200px] mr-auto ml-auto h-auto">
            <div class="w-full text-white flex justify-between items-center mt-5 flex-col md:flex-row">
               <h1 class="ml-[20px] text-[22px] font-bold">Sản phẩm Nổi Bật</h1>
        
          <ul class="hidden  font-medium md:flex ">
          <li class={`mr-5 cursor-pointer text-center  ${category === "li-xi" ? " text-[#ffd84b] font-bold" : ""} `} onClick={() => handleCategory("li-xi")}>Lì Xì</li>
             <li class={`mr-5 cursor-pointer text-center  ${category === "day-treo-trung-quoc" ? " text-[#ffd84b] font-bold" : ""} `} onClick={() => handleCategory("day-treo-trung-quoc")}>Dây Treo Trung Quốc</li>
             <li class={`mr-5 cursor-pointer text-center  ${category === "day-treo-viet-nam" ? " text-[#ffd84b] font-bold" : ""} `} onClick={() => handleCategory("day-treo-viet-nam")}>Dây treo Việt Nam</li>
             <li class={`mr-5 cursor-pointer text-center  ${category === "treo-tuong" ? " text-[#ffd84b] font-bold" : ""} `} onClick={() => handleCategory("treo-tuong")}>Treo Tường</li>
          </ul>
          <div class=" p-2 block md:hidden mt-5 w-[60%] rounded md:max-w-[200px] text-center cursor-pointer font-bold bg-gradient-to-r from-[#f5ac27]  to-[#ffd84b] shadow-lg" onClick={toggleMenu}>
            <p>Phân loại</p>
          </div> 
          <div class={`${modal ? "min-h-[200px] p-2 " : "h-[0px] p-0" } transition-height duration-300   overflow-hidden  shadow-lg mt-2 font-bold w-full bg-white  md:hidden block`}>
            <ul>
             <li class={`mr-5  py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2   ${category === "li-xi" ? "bg-[#a3262a] text-white" : "text-[#000]"} `} onClick={() => handleCategory("li-xi")}>Lì Xì</li>
             <li class={`mr-5  py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2   ${category === "day-treo-trung-quoc" ? "bg-[#a3262a] text-white" : "text-[#000]"} `} onClick={() => handleCategory("day-treo-trung-quoc")}>Dây Treo Trung Quốc</li>
             <li class={`mr-5  py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2   ${category === "day-treo-viet-nam" ? "bg-[#a3262a] text-white" : "text-[#000]"} `} onClick={() => handleCategory("day-treo-viet-nam")}>Dây treo Việt Nam</li>
             <li class={`mr-5  py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2 mt-2  ${category === "treo-tuong" ? "bg-[#a3262a] text-white" : "text-[#000]"} `} onClick={() => handleCategory("treo-tuong")}>Treo Tường</li>
            </ul>
          </div>
            </div>
           {
            products ? (
                <div class="ml-5 mr-5">
                       <Swiper
                modules={[Navigation, Pagination,Autoplay]}
                slidesPerView={1}
                spaceBetween={10}
                auto={true}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                   
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
                    <Link to={`/${product.slug}`} >
                    <div
                      className="cursor-pointer  min-w-[200px] h-[400px] shadow-lg mt-5 mb-10  bg-white p-3 relative rounded overflow-hidden group border-2 border-[#f2f2f2]"
                    >
                       <img
                        alt={product.photo}
                        src={product.photo}
                        className="mt-2 w-[150px] ml-auto mr-auto"
                      />
                      <div className="min-h-[100px]">
                        <p className="mt-2">{product.category}</p>
                        <h1 className="font-bold">{product.title}</h1>
                        <p>
                          <span className="font-bold">Mã sản phẩm: </span> {product.description}
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

export default Popular;
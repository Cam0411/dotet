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
    const [visibleProducts, setVisibleProducts] = useState(8);
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
     const loadMore = () => {
        // Increase the number of visible products
        setVisibleProducts(visibleProducts + 16);
      };
    return (
        <div class="min-h-[490px] px-0  sm:px-3 pt-3 pb-1  mt-[10px]" >
        <div class=" max-w-[1200px] mr-auto ml-auto h-auto">
            <div class="w-full text-black flex justify-between items-center mt-5 flex-col md:flex-row">
               <h2 class="ml-[10px] text-[22px] font-bold text-[#700114] underline underline-offset-8">Sản phẩm tại cửa hàng</h2>
        
          <ul class="hidden  font-medium md:flex ">
          <li class={`mr-5 cursor-pointer text-center  ${category === "li-xi" ? " text-[#700114] font-bold" : ""} `} onClick={() => handleCategory("li-xi")}>Lì Xì</li>
             <li class={`mr-5 cursor-pointer text-center  ${category === "day-treo-trung-quoc" ? " text-[#700114] font-bold" : ""} `} onClick={() => handleCategory("day-treo-trung-quoc")}>Dây Treo Trung Quốc</li>
             <li class={`mr-5 cursor-pointer text-center  ${category === "day-treo-viet-nam" ? " text-[#700114] font-bold" : ""} `} onClick={() => handleCategory("day-treo-viet-nam")}>Dây treo Việt Nam</li>
             <li class={`mr-5 cursor-pointer text-center  ${category === "dan-tuong" ? " text-[#700114] font-bold" : ""} `} onClick={() => handleCategory("dan-tuong")}>Dán Tường</li>
          </ul>
          <div class=" p-2 block md:hidden mt-5 text-white w-[60%] rounded md:max-w-[200px] text-center cursor-pointer font-bold bg-gradient-to-r from-[#f5ac27]  to-[#ffd84b] shadow-lg" onClick={toggleMenu}>
            <p>Phân loại</p>
          </div> 
          <div class={`${modal ? "min-h-[200px] p-2 " : "h-[0px] p-0" } transition-height duration-300   overflow-hidden  shadow-lg mt-2 font-bold w-full bg-white  md:hidden block`}>
            <ul>
             <li class={`mr-5  py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2   ${category === "li-xi" ? "bg-[#a3262a] text-white" : "text-[#000]"} `} onClick={() => handleCategory("li-xi")}>Lì Xì</li>
             <li class={`mr-5  py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2   ${category === "day-treo-trung-quoc" ? "bg-[#a3262a] text-white" : "text-[#000]"} `} onClick={() => handleCategory("day-treo-trung-quoc")}>Dây Treo Trung Quốc</li>
             <li class={`mr-5  py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2   ${category === "day-treo-viet-nam" ? "bg-[#a3262a] text-white" : "text-[#000]"} `} onClick={() => handleCategory("day-treo-viet-nam")}>Dây treo Việt Nam</li>
             <li class={`mr-2  py-2 px-5 cursor-pointer text-center w-full shadow-lg mb-2 mt-2  ${category === "dan-tuong" ? "bg-[#a3262a] text-white" : "text-[#000]"} `} onClick={() => handleCategory("dan-tuong")}>Dán Tường</li>
            </ul>
          </div>
            </div>
            {
                products ? (
                  
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5    p-1 sm:p-3  max-w-[1200px]   ml-auto mr-auto ">
                       
                      {products.slice(0, visibleProducts).map((product) => (
                          <div key={product.id} class="cursor-pointer w-full text-[14px] xl:text-[16px] text-left ml-auto mr-auto  min-h-[350px] shadow-lg  mt-5  bg-white p-3 relative rounded overflow-hidden group border-2 border-[#f2f2f2]">
                            <Link rel="canonical" to={`/product/${product.slug}`} onClick={() => { window.scroll(0, 0)}}>
                            <div>
                            <LazyLoadImage
                             alt={product.photo}
                            src={product.photo} // use normal <img> attributes as props
                            class="mt-5 mb-5 w-full sm:max-w-[180px]   ml-auto mr-auto shadow-lg rounded"
                             />
                            <div class="min-h-[100px]">
                             <span class="mt-2" >{product.category}</span>
                             <h3 class="font-bold ">{product.title}</h3>
                             <p> <span class="font-bold">Mã sản phẩm: </span> {product.codeProduct}</p>
                             <p><span class="font-bold"> Liên hệ</span> 0903-133-689</p>
                             </div>
                            </div>
                            </Link>
                          </div>
                         ))}
                    </div>
                ) : (
                    <div class="font-bold mt-5 ml-auto mr-auto max-w-[1200px]"><p><List /></p></div>
                )
        }
        <div class="flex justify-center">
         {products?.length >= 8 ? ( <p class=" cursor-pointer ml-2 p-3 bg-[#ffd84b] shadow-lg rounded text-[#700114] font-bold mb-5  mt-5"  onClick={loadMore}>Xem Thêm</p>) : ''  }
         </div>

    
        </div>
      </div>
    )
}

export default Popular;
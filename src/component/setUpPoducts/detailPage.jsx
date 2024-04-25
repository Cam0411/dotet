import React, { useState, useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux"
import { getProductsDetail } from '../../redux/action/productAPi';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { List } from 'react-content-loader';
import {IoIosArrowBack} from "react-icons/io"
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link , useNavigate} from 'react-router-dom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import '../../style/swiper.css';
import { Helmet } from 'react-helmet';
import { addToCart } from '../../redux/action/cartAPI';
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex,
    temporaryValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
// Function to scroll to the top of the page
function scrollToTop() {
  // Scroll the page to the top smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function DetailProduct() {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [showPopUp,setShowPopUp] = useState(false)
  const history = useNavigate();
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch and set product data
    dispatch(getProductsDetail(slug));
  }, [slug, dispatch]);

   
  const handleDisplayDescription = (description) => {

    return description.replace(/<br\s*\/?>/g, "\n");
  };
const productsState = useSelector((state) => state.product.productDetail.value);
const products = productsState?.product

const saveProduct = () => {
   try {
    dispatch(addToCart(slug));
    setShowPopUp(true);
   } catch (err) {
    console.log(err);
   }
}
// related product
  useEffect(() => {
    // Fetch and set product data
    
    // const apiHawebDetail = `https://haweb-api.onrender.com/api/product/${slug}`;
    // axios.get(apiHawebDetail)
    //   .then((res) => {
    //     setProducts(res.data.product);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching product:', error);
    //   });
    //   const scrollDelay = 10; // Adjust this value as needed
 
  
    if (relatedProducts.length === 0) {
      const apiHawebrelated = `https://haweb-api.onrender.com/api/product`;
      axios.get(apiHawebrelated)
        .then((res) => {
          const availableProducts = res.data.product;

          if (availableProducts.length > 15) {
            // Shuffle the products and then limit to 15
            const shuffledProducts = shuffle([...availableProducts]);
            const random15Products = shuffledProducts.slice(0, 15);
            setRelatedProducts(random15Products);
          } else {
            // If there are 15 or fewer products, use them as is
            setRelatedProducts(availableProducts);
          }
        })
        .catch((error) => {
          console.error('Error fetching related products:', error);
        });
    }
    

  }, [relatedProducts]);


  const closePopUp = () => {
     setShowPopUp(false)
  }
   return (
    <div className=" min-h-[100vh] mt-[50px] py-3 sm:px-3 px-2 bg-[#f2f2f2]">
        
            {
              products  ? (
                <Helmet>
                  <title>{products[0].title}</title>
                  <meta name="description" content={`${products[0].description}`} />
                  <meta name="keywords" content="đồ trang trí tết,trang trí tết 2023 ,bao lì xì,decor tết,tiểu cảnh tết 2023 ,mẫu trang trí tết 2023,trang trí tết cổ truyền,quạt trang trí tết,Nội thất Tết,chuyên sĩ đồ tết" />
                  <meta name="robots" content="index, follow" />
                  <meta name="author" content="Hà shop" />
                  <meta name="og:title" content="Đồ Tết Chất Lượng Cao - Cửa Hàng Chúng Tôi" />
                  <meta name="og:description" content="Chuyên Cung Cấp Sỉ Lì Xì, Dây Treo, và Dán Tường Đồ Trang Trí Tết Chất Lượng Cho Nhà Cửa và Văn Phòng - Hãy Liên Hệ Chúng Tôi Để Tạo Nên Một Mùa Tết Ấm Áp Và Độc Đáo! " />
                  <script type="application/ld+json">
                   {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Your Organization Name",
              "url": "http://www.your-website-url.com",
              "logo": "http://www.your-website-url.com/logo.png",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-123-456-7890",
                  "contactType": "customer service"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/your-facebook",
                "https://twitter.com/your-twitter",
                "https://www.linkedin.com/in/your-linkedin"
              ]
            }
                     `}
                  </script>
                  </Helmet>
  
                
              ) : ""
            }
     
     
      <div className="pt-[150px] max-w-[1200px] ml-auto mr-auto">
       {products ?  <p class="flex font-bold md:text-[16px] text-[12px] md:mt-0 mt-10"><Link to="/" class="flex items-center font-bold cursor-pointer mb-2">Trang chủ <MdOutlineArrowForwardIos class="mx-1" /> </Link> <Link to={`/category/${products[0].categorySlug}`} class="flex ">{products[0].category} <MdOutlineArrowForwardIos class="mt-1 mx-1" /></Link> <span class="text-[#700114]">{products[0].title}</span>   </p> : <p>Loading</p>}
          {productsState ? (
          <div className="flex md:flex-row flex-col border-b-2 pb-10 border-[#700114] border-dotted">
            <div className="md:w-[200%] w-[100%] flex items-center justify-center">
              <img src={`${products[0].photo}`} alt={`${products[0].title}`} className="w-full object-contain shadow-lg  mt-5 p-3 rounded-lg border-2 border-[#700114]" />
            </div>
            <div class="flex justify-center items-center">
            <div className="text-[#000]  text-left md:ml-10 ml-0">
            
              <h1 className="font-bold text-[#700114] md:text-[32px] text-[23px] mt-2 md:mt-0">{products[0].title}</h1>
              <p class="mt-2" dangerouslySetInnerHTML={{ __html: handleDisplayDescription(products[0].description) }} />     

              <div className="mt-5">
                <h2 class="text-[20px] font-bold text-[#700114] mb-2 underline underline-offset-8">Mô tả sản phẩm</h2>
                <p><span class="font-bold mb-2">Kích thước </span>: {products[0].size}</p>
                <p><span class="font-bold">Chất Liệu:</span> {products[0].material}</p>
                <p><span class="font-bold">Mã sản phẩm:</span>: {products[0].codeProduct}</p>
              </div>
              <div class="mt-2">
                <h2 class="text-[20px] font-bold text-[#700114] mb-2 underline underline-offset-8">Liên hệ</h2>
                <p >Để biết thêm thông tin chi tiết hoặc đặt hàng, vui lòng liên hệ với chúng tôi theo số điện thoại:  0903-133-689</p>
              </div>
              <div className="flex mt-5">
                <p className="mt-2 border-2 border-[#700114] py-2 px-4 text-[18px] mr-2 shadow-lg cursor-pointer  text-[#700114] font-bold rounded" onClick={saveProduct}>Lưu sản phẩm</p>
                <a class="flex" href="https://zalo.me/0903133689"><p className="mt-2 bg-[#0058d9] py-2 px-4 text-[18px] shadow-lg cursor-pointer  text-white font-bold rounded">Liên hệ zalo</p></a>
              </div>
             </div>
            </div>
          </div>
        ) : (
          <div class="font-bold mt-5"><p><List /></p></div>
        )}
        <div class="mt-5 pb-5">
           <h2 class="text-[23px] text-[#700114] font-bold text-center underline underline-offset-8">Tìm kiếm liên quan</h2>
           <ul class="md:flex hidden mt-5 justify-center max-w-[900px] ml-auto mr-auto bg-white shadow-lg rounded-t-full rounded-b-full  rounded-r-full p-3 ">
             <Link rel="canonical" to="/category/li-xi" onClick={() => {window.scroll(0, 0)}}><li class="flex flex-col justify-around items-center p-3 mr-10 font-medium mt-3"><img src="https://ik.imagekit.io/39wvgoqre/Lixi%20/NEW%20S3/NEW%20S3/HQ22-1.png?updatedAt=1704630031008" class="rounded-full ml-auto mr-auto md:w-[110px]  md:h-[110px] w-[80px] h-[80px]  shadow-lg" /><p class="text-center  mt-2 max-w-[100px] h-[45px]">Lì Xì </p></li></Link> 
             <Link rel="canonical" to="/category/day-treo-trung-quoc" onClick={() => {window.scroll(0, 0)}}><li class="flex flex-col justify-around items-center p-3 mr-10 font-medium mt-3"><img src="https://ik.imagekit.io/39wvgoqre/CON%20LAI/TQT12.png?updatedAt=1704207048473" class="rounded-full ml-auto mr-auto md:w-[110px]  md:h-[110px] w-[80px] h-[80px] shadow-lg" /><p class="text-center  mt-2 max-w-[100px] h-[45px]">Dây treo Trung Quốc </p></li> </Link>
             <Link rel="canonical" to="/category/day-treo-viet-nam" onClick={() => {window.scroll(0, 0)}}><li class="flex flex-col justify-around items-center p-3 mr-10 font-medium mt-3"><img src="https://ik.imagekit.io/39wvgoqre/S3/PT20.png?updatedAt=1700581823503" class="rounded-full md:w-[110px]  md:h-[110px] w-[80px] h-[80px] ml-auto mr-auto  shadow-lg" /><p class="text-center  mt-2 max-w-[100px] h-[45px] ">Dây treo Việt Nam </p></li> </Link>
             <Link rel="canonical" to="/category/dan-tuong" onClick={() => {window.scroll(0, 0)}}><li class="flex flex-col justify-around items-center p-3 font-medium mt-3"><img src="https://ik.imagekit.io/39wvgoqre/dantuong/LT/LT10.png?updatedAt=1704274058056" class="rounded-full  ml-auto mr-auto md:w-[110px]  md:h-[110px] w-[80px] h-[80px] shadow-lg" /><p class="text-center  mt-2 max-w-[100px] h-[45px]">Dán Tường</p></li> </Link>
           </ul>
           <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5 md:hidden "> 
              <div class="bg-white text-[14px] shadow-lg md:min-h-[250px] h-[157px]  flex justify-center items-center border-2">
              <Link rel="canonical" onClick={() => {window.scroll(0, 0)}} to="/category/li-xi">
              <div class="flex flex-col justify-around items-center p-3  font-medium  ml-auto mr-auto h-auto">
              <img src="https://ik.imagekit.io/39wvgoqre/Lixi%20/NEW%20S3/NEW%20S3/HQ22-1.png?updatedAt=1704630031008" class="rounded-full ml-auto mr-auto md:w-[120px]  md:h-[120px] w-[80px] h-[80px] shadow-lg" />
              <p class="text-center  mt-2 max-w-[100px] h-[45px] text-[16px] font-bold">Lì Xì </p>
              </div>
              </Link>
              </div>
              <div class="bg-white shadow-lg flex justify-center items-center border-2">
              <Link rel="canonical" onClick={() => {window.scroll(0, 0)}} to="/category/day-treo-trung-quoc"> 
              <div class="flex flex-col justify-around items-center p-3  font-medium rounded-lg ml-auto mr-auto h-auto">
              <img src="https://ik.imagekit.io/39wvgoqre/CON%20LAI/TQT12.png?updatedAt=1704207048473" class="rounded-full ml-auto mr-auto md:w-[120px] md:h-[120px] w-[80px] h-[80px] shadow-lg" />
              <p class="text-center  mt-2 max-w-[100px] h-[45px] text-[16px] font-bold">Dây Treo Trung Quốc </p>
              </div>
              </Link>
              </div>
              <Link rel="canonical" onClick={() => {window.scroll(0, 0)}} to="/category/day-treo-viet-nam">
              <div class="bg-white shadow-lg flex justify-center items-center border-2">
              <div class="flex flex-col justify-around items-center p-3  font-medium rounded-lg ml-auto mr-auto h-auto">
              <img src="https://ik.imagekit.io/39wvgoqre/S3/PT20.png?updatedAt=1700581823503" class="rounded-full ml-auto mr-auto md:w-[120px]  md:h-[120px] w-[80px] h-[80px] shadow-lg" />
              <p class="text-center  mt-2 max-w-[100px] h-[45px] text-[16px] font-bold">Dây treo Việt Nam </p>
              </div>
              </div>
              </Link>
              <Link rel="canonical" onClick={() => {window.scroll(0, 0)}} to="/category/dan-tuong">
              <div class="bg-white shadow-lg flex justify-center items-center border-2">
              <div class="flex flex-col justify-around items-center p-3  font-medium rounded-lg ml-auto mr-auto h-auto">
              <img src="https://ik.imagekit.io/39wvgoqre/dantuong/LT/LT10.png?updatedAt=1704274058056" class="rounded-full ml-auto mr-auto md:w-[120px]  md:h-[120px] w-[80px] h-[80px] shadow-lg" />
              <p class="text-center  mt-2 max-w-[100px] h-[45px] text-[16px] font-bold">Dán Tường </p>
              </div>
              </div>
              </Link>
           </div>
        </div>
        <div>
          <h2 className="text-left text-[#700114]  font-bold mt-5 text-[23px] underline underline-offset-8 ">Các sản phẩm liên quan</h2>
          {relatedProducts.length > 0 ? (
            <div className="md:ml-5 md:mr-5 ml-0 mr-0">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={2}
                spaceBetween={10}
                auto={true}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                  disableOnInteraction: false,
                  delay:3000 // Prevent autoplay from stopping on user interaction
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
                {relatedProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Link rel="canonical" to={`/product/${product.slug}`} onClick={scrollToTop}>
                    <div
                      className="cursor-pointer   w-full min-h-[350px] shadow-lg mt-5 mb-5 text-left py-3 sm:px-3 px-2 text-[14px] sm:text-[16px] bg-white  relative rounded overflow-hidden group border-2 border-[#f2f2f2]"
                    >
                       <img
                        alt={product.photo}
                        src={product.photo}
                        className="mt-5 mb-5 md:max-w-[180px] w-full  ml-auto mr-auto shadow-lg border-2"
                      />
                      <div className="min-h-[100px]">
                        <span className="mt-5">{product.category}</span>
                        <h3 className="font-bold">{product.title}</h3>
                        <p>
                          <span className="font-bold">Mã sản phẩm: </span> {product.codeProduct}
                        </p>
                        <p>
                          <span className="font-bold"> Liên hệ:</span>
                        </p>
                      </div>
                    </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
             <div class="font-bold mt-5"><p><List /></p></div>
          )} 
        </div>
      </div>
 
      {showPopUp ? (
     <div class="fixed inset-0  h-full w-full z-10 flex justify-center items-center" onClick={closePopUp} >
       <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute bottom-0 right-2" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Thêm sản phẩm thành công.</div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span class="sr-only cursor-pointer" onClick={closePopUp}>Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
      </div>
      </div> 
      ) : ""}
    </div>
  );
}

export default DetailProduct;

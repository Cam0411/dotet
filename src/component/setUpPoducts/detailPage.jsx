import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { List } from 'react-content-loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import '../../style/swiper.css';

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
  const [products, setProducts] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    // Fetch and set product data
    const apiHawebDetail = `https://haweb-api.onrender.com/api/product/${slug}`;
    axios.get(apiHawebDetail)
      .then((res) => {
        setProducts(res.data.product);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });

    // Fetch related products only on component mount
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
    window.scrollTo(0, 0);

  }, [slug, relatedProducts]);

  return (
    <div className=" min-h-[100vh] p-3 bg-[#f2f2f2]">
      <div className="pt-[150px] max-w-[1200px] ml-auto mr-auto">
        {products ? (
          <div className="flex md:flex-row flex-col border-b-2 pb-10 border-[#700114] border-dotted">
            <div className="md:w-[200%] w-[100%] flex items-center justify-center">
              <img src={`${products[0].photo}`} alt={`${products[0].title}`} className="w-full shadow-lg rounded md:mt-0 mt-5" />
            </div>
            <div class="flex justify-center items-center">
            <div className="text-[#000]  text-left md:ml-5 ml-0">
              <h1 className="font-black text-[#700114] text-[32px] mt-5 md:mt-0">{products[0].title}</h1>
              <p className="mt-2">{products[0].description}.</p>
              <div className="mt-2">
                <h1 class="text-[20px] font-bold text-[#700114] mb-2">Mô tả sản phẩm</h1>
                <p><span class="font-bold mb-2">Kích thước </span>: {products[0].size}</p>
                <p><span class="font-bold">Chất Liệu:</span>: {products[0].material}</p>
              </div>
              <div class="mt-2">
                <h1 class="text-[20px] font-bold text-[#700114] mb-2">Liên hệ</h1>
                <p >Để biết thêm thông tin chi tiết hoặc đặt hàng, vui lòng liên hệ với chúng tôi theo số điện thoại: 123-456-789</p>
              </div>
              <div className="flex mt-5">
                <p className="mt-2 bg-[#0058d9] py-2 px-4  text-white font-bold rounded">Liên hệ zalo</p>
              </div>
             </div>
            </div>
          </div>
        ) : (
          <div class="font-bold mt-5"><p><List /></p></div>
        )}
        <div class="mt-5 pb-5">
           <h1 class="text-[23px] text-[#700114] font-bold text-center ">Tìm kiếm liên quan</h1>
           <ul class="md:flex hidden mt-5 justify-around max-w-[900px] ml-auto mr-auto bg-white shadow-lg rounded-full p-3 ">
             <li class="flex flex-col justify-around items-center p-3 mr-10 font-medium mt-3"><img src="https://ik.imagekit.io/39wvgoqre/lixi/44078530e517314968068.jpg?updatedAt=1697721108570" class="rounded-full ml-auto mr-auto md:w-[110px]  md:h-[110px] w-[80px] h-[80px]  shadow-lg" /><p class="text-center  mt-2 max-w-[100px] h-[45px]">Lì Xì </p></li>
             <li class="flex flex-col justify-around items-center p-3 mr-10 font-medium mt-3"><img src="https://ik.imagekit.io/39wvgoqre/day%20treo%20trung%20quoc/27%20day%20treo/ed893a6f7dc5a99bf0d4143.jpg?updatedAt=1698066729993" class="rounded-full ml-auto mr-auto md:w-[110px]  md:h-[110px] w-[80px] h-[80px] shadow-lg" /><p class="text-center  mt-2 max-w-[100px] h-[45px]">Dây treo Trung Quốc </p></li>
             <li class="flex flex-col justify-around items-center p-3 mr-10 font-medium mt-3"><img src="https://ik.imagekit.io/39wvgoqre/day%20treo%20viet%20nam/44%20day%20treo/f94fdd6971c5a59bfcd4577.jpg?updatedAt=1698067151377" class="rounded-full md:w-[110px]  md:h-[110px] w-[80px] h-[80px] ml-auto mr-auto  shadow-lg" /><p class="text-center  mt-2 max-w-[100px] h-[45px] ">Dây treo Việt Nam </p></li>
             <li class="flex flex-col justify-around items-center p-3 font-medium mt-3"><img src="https://ik.imagekit.io/39wvgoqre/c3fcb21f1eb3caed93a2593.jpg?updatedAt=1697719352705" class="rounded-full  ml-auto mr-auto md:w-[110px]  md:h-[110px] w-[80px] h-[80px] shadow-lg" /><p class="text-center  mt-2 max-w-[100px] h-[45px]">Treo Tường </p></li>
           </ul>
           <div class="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 md:hidden "> 
              <div class="bg-white shadow-lg md:min-h-[250px] h-[157px]  flex justify-center items-center border-2">
              <div class="flex flex-col justify-around items-center p-3  font-medium  ml-auto mr-auto h-auto">
              <img src="https://ik.imagekit.io/39wvgoqre/lixi/44078530e517314968068.jpg?updatedAt=1697721108570" class="rounded-full ml-auto mr-auto md:w-[120px]  md:h-[120px] w-[80px] h-[80px] shadow-lg" />
              <p class="text-center  mt-2 max-w-[100px] h-[45px] text-[16px] font-bold">Lì Xì </p>
              </div>
              </div>
              <div class="bg-white shadow-lg flex justify-center items-center border-2">
              <div class="flex flex-col justify-around items-center p-3  font-medium rounded-lg ml-auto mr-auto h-auto">
              <img src="https://ik.imagekit.io/39wvgoqre/day%20treo%20trung%20quoc/27%20day%20treo/ed893a6f7dc5a99bf0d4143.jpg?updatedAt=1698066729993" class="rounded-full ml-auto mr-auto md:w-[120px] md:h-[120px] w-[80px] h-[80px] shadow-lg" />
              <p class="text-center  mt-2 max-w-[100px] h-[45px] text-[16px] font-bold">Dây Treo Trung Quốc </p>
              </div>
              </div>
              <div class="bg-white shadow-lg flex justify-center items-center border-2">
              <div class="flex flex-col justify-around items-center p-3  font-medium rounded-lg ml-auto mr-auto h-auto">
              <img src="https://ik.imagekit.io/39wvgoqre/day%20treo%20viet%20nam/44%20day%20treo/f94fdd6971c5a59bfcd4577.jpg?updatedAt=1698067151377" class="rounded-full ml-auto mr-auto md:w-[120px]  md:h-[120px] w-[80px] h-[80px] shadow-lg" />
              <p class="text-center  mt-2 max-w-[100px] h-[45px] text-[16px] font-bold">Dây treo Việt Nam </p>
              </div>
              </div>
              <div class="bg-white shadow-lg flex justify-center items-center border-2">
              <div class="flex flex-col justify-around items-center p-3  font-medium rounded-lg ml-auto mr-auto h-auto">
              <img src="https://ik.imagekit.io/39wvgoqre/c3fcb21f1eb3caed93a2593.jpg?updatedAt=1697719352705" class="rounded-full ml-auto mr-auto md:w-[120px]  md:h-[120px] w-[80px] h-[80px] shadow-lg" />
              <p class="text-center  mt-2 max-w-[100px] h-[45px] text-[16px] font-bold">Treo Tường </p>
              </div>
              </div>
           </div>
        </div>
        <div>
          <h1 className="text-left text-[#700114]  font-bold mt-5 text-[23px]">Các sản phẩm liên quan</h1>
          {relatedProducts.length > 0 ? (
            <div className="ml-5 mr-5">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
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
                {relatedProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Link to={`/${product.slug}`} onClick={scrollToTop}>
                      <div className="cursor-pointer min-w-[200px] h-[350px] shadow-lg mt-5 mb-10 bg-white p-3 relative rounded overflow-hidden group border-2 border-[#f2f2f2] text-left ">
                        <img alt={product.photo} src={product.photo} className="mt-5 mb-2 w-[150px] ml-auto mr-auto shadow-lg" />
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
          ) : (
             <div class="font-bold mt-5"><p><List /></p></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;

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
  }, [slug, relatedProducts]);

  return (
    <div className="bg-gradient-to-r to-[#bb2d0d] from-[#700114] min-h-[100vh] p-3">
      <div className="pt-[150px] max-w-[1200px] ml-auto mr-auto">
        {products ? (
          <div className="flex md:flex-row flex-col">
            <div className="max-w-[350px] flex items-center justify-center">
              <img src={`${products[0].photo}`} alt={`${products[0].title}`} className="w-full shadow-lg rounded md:mt-0 mt-5" />
            </div>
            <div className="text-white  text-left md:ml-5 ml-0">
              <h1 className="font-black text-[#ffd84b] text-[32px] mt-5 md:mt-0">{products[0].title}</h1>
              <p className="mt-2">Chuẩn bị cho mùa Lễ Tết truyền thống với bộ sưu tập đồ Tết phong phú tại cửa hàng của chúng tôi. Chúng tôi tự hào giới thiệu những sản phẩm độc đáo và truyền thống để bạn có thể tạo không gian ấm áp, thân thuộc và thú vị cho gia đình và người thân trong dịp Lễ Tết.</p>
              <div className="mt-2">
                <h1 class="text-[20px] font-bold text-[#ffd84b] mb-2">Mô tả sản phẩm</h1>
                <p><span class="font-bold mb-2">Kích thước </span>15cm</p>
                <p><span class="font-bold">Chất Liệu:</span> Nhung, giấy</p>
              </div>
              <div class="mt-2">
                <h1 class="text-[20px] font-bold text-[#ffd84b] mb-2">Liên hệ</h1>
                <p >Để biết thêm thông tin chi tiết hoặc đặt hàng, vui lòng liên hệ với chúng tôi theo số điện thoại: 123-456-789</p>
              </div>
              <div className="flex mt-5">
                <p className="mt-2 bg-[#0058d9] py-2 px-4  text-white font-bold rounded">Liên hệ zalo</p>
              </div>
            </div>
          </div>
        ) : (
          <div class="font-bold mt-5"><p><List /></p></div>
        )}
        <div className="mt-2">
          <h1 className="text-left text-[#ffd84b]  font-bold mt-5 text-[23px]">Các sản phẩm liên quan</h1>
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
                      <div className="cursor-pointer min-w-[200px] h-[400px] shadow-lg mt-5 mb-10 bg-white p-3 relative rounded overflow-hidden group border-2 border-[#f2f2f2]">
                        <img alt={product.photo} src={product.photo} className="mt-2 w-[150px] ml-auto mr-auto" />
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

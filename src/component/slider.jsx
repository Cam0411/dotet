import { TypeAnimation } from 'react-type-animation';
import '../style/typeJs.css'
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
const Slider = () => {
    return (

      <div className="relative overflow-hidden  mt-[80px] ">
      <div className="">
        <Swiper 
           modules={[Navigation, Pagination,Autoplay]}
           slidesPerView={1}
           spaceBetween={0}
           auto={true}
           speed={500}
           loop={true}
           autoplay={{
            delay:5000,
            disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
          }}
   
        >
          <SwiperSlide>
          <div className="relative bg-gradient-to-r from-[#bb2d0d] to-[#700114] min-h-[100vh] mx-auto justify-center md:flex-row flex-col-reverse items-center px-4 flex sm:static sm:px-6 lg:px-8 z-10 mt-[80px] md:mt-0 pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40" >
          <div className="sm:max-w-lg z-10 mr-5 mt-5 md:mt-0">
          <TypeAnimation
             sequence={[
                // Same substring at the start will only be typed out once, initially
             'CHÚC MỪNG NĂM MỚI',
               4000, 
              'VẠN SỰ NHƯ Ý',
              4000,
              'AN KHANG THỊNH VƯỢNG',
              4000,
              ]}
             wrapper="span"
             speed={200}
              style={{  display: 'inline-block', fontWeight:'900', color:"white", }}
              className="responsive-text" 
              data-aos="fade-right"
              repeat={Infinity}
             />
          <h1 class=" text-[30px] drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-[#f5ac27]  to-[#ffd84b] font-bold text-left  mb-[10px] mt-[20px] sm:mt-5" >Chuyên sĩ đồ tết giá rẻ, chất lượng</h1>
       <p class="text-white opacity-[0.8] font-medium mt-2 mb-5 text-left " >Tết Nguyên Đán là một dịp lễ quan trọng nhất trong năm của người Việt Nam. Đây là dịp để mọi người sum họp, đoàn tụ, và cầu mong một năm mới an khang, thịnh vượng.</p>   
      <p class="text-white opacity-[0.8] font-medium mt-2 mb-5 text-left " >Shop chuyên sĩ đồ tết là một địa chỉ uy tín chuyên cung cấp các mặt hàng đồ tết với chất lượng cao và giá cả cạnh tranh. Shop có đa dạng các sản phẩm đồ tết, Lì xì, Dây treo và Quạt tết</p>
       

          </div>
          <div>
            <div>
             <a href="https://www.trangtritetshop.com/product/day-treo-viet-nam---hoa-tiet-tai-pt23"><img src='https://ik.imagekit.io/39wvgoqre/S3/PT23.png?updatedAt=1700811157644' class="md:max-w-[500px] sm:w-[100%] w-[100%] mt-0 md:mt-10" alt="png1" /></a> 
            </div>
          </div>
        </div>
     
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative bg-gradient-to-r from-[#bb2d0d] to-[#700114] min-h-[100vh] mx-auto justify-center md:flex-row flex-col-reverse items-center px-4 flex sm:static sm:px-6 lg:px-8 z-10 mt-[80px] md:mt-0 pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40" >
          <div className="sm:max-w-lg z-10 mr-5 mt-5 md:mt-0">
          <TypeAnimation
             sequence={[
                // Same substring at the start will only be typed out once, initially
             'CHÚC MỪNG NĂM MỚI',
               4000, 
              'VẠN SỰ NHƯ Ý',
              4000,
              'AN KHANG THỊNH VƯỢNG',
              4000,
              ]}
             wrapper="span"
             speed={200}
              style={{  display: 'inline-block', fontWeight:'900', color:"white", }}
              className="responsive-text" 
              data-aos="fade-right"
              repeat={Infinity}
             />
          <h2 class=" text-[30px] drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-[#f5ac27]  to-[#ffd84b] font-bold text-left  mb-[10px] mt-[20px] sm:mt-5" > Dây Treo Truyền Thống </h2>
           <p class="text-white opacity-[0.8] font-medium mt-2 mb-5 text-left " > Phân phối dây treo đa dạng từ cả Việt Nam và Trung Quốc. Với sự kết hợp của nền văn hóa Việt Nam và sự đa dạng sản phẩm từ Trung Quốc, chúng tôi mang đến cho bạn bộ sưu tập độc đáo và phong phú.</p>   
           <p class="text-white opacity-[0.8] font-medium mt-2 mb-5 text-left " >Khám phá nhiều loại dây treo truyền thống và hiện đại, từ những chiếc dây treo lì xì tinh tế đến dây treo trang trí sáng tạo. Với chất lượng đỉnh cao và sự đa dạng trong thiết kế, chúng tôi cam kết đem đến sự hài lòng cho mọi khách hàng.</p>
       

          </div>
          <div>
            <div>
             <a href="http://localhost:3000/product/day-treo-trung-quoc-thuyen-vang-ho-lo-kieu-(tqt81)"><img src='https://ik.imagekit.io/39wvgoqre/day%20treo%20trung%20quoc/S3%20(3)/S3/TOT81.png?updatedAt=1701840672184' class="md:max-w-[500px] sm:w-[100%] w-[100%] mt-0 md:mt-10" alt="png2"/></a> 
            </div>
          </div>
        </div>
     
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative bg-gradient-to-r from-[#bb2d0d] to-[#700114] min-h-[100vh] mx-auto justify-center md:flex-row flex-col-reverse items-center px-4 flex sm:static sm:px-6 lg:px-8 z-10 mt-[80px] md:mt-0 pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40" >
          <div className="sm:max-w-lg z-10 mr-5 mt-5 md:mt-0">
          <TypeAnimation
             sequence={[
                // Same substring at the start will only be typed out once, initially
             'CHÚC MỪNG NĂM MỚI',
               4000, 
              'VẠN SỰ NHƯ Ý',
              4000,
              'AN KHANG THỊNH VƯỢNG',
              4000,
              ]}
             wrapper="span"
             speed={200}
              style={{  display: 'inline-block', fontWeight:'900', color:"white", }}
              className="responsive-text" 
              data-aos="fade-right"
              repeat={Infinity}
             />
          <h2 class=" text-[30px] drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-[#f5ac27]  to-[#ffd84b] font-bold text-left  mb-[10px] mt-[20px] sm:mt-5" >Lì xì Đa Dạng</h2>
       <p class="text-white opacity-[0.8] font-medium mt-2 mb-5 text-left " > Liên tục cập nhật bộ sưu tập lì xì với những mẫu mã theo xu hướng, từ những kích thước nhỏ xinh cho đến những mẫu lớn nổi bật. Mỗi chiếc lì xì đều được chăm chút với sự sáng tạo và chất liệu đỉnh cao, đảm bảo tạo nên điểm nhấn hoàn hảo cho không gian của bạn.</p>   
      <p class="text-white opacity-[0.8] font-medium mt-2 mb-5 text-left " >Hãy khám phá sự đa dạng và đẹp mắt của mẫu mã lì xì theo xu hướng tại Hà Shop . Đặt hàng ngay để tận hưởng không gian Tết tràn đầy phong cách và ấn tượng!</p>
       

          </div>
          <div>
            <div>
             <a href="https://www.trangtritetshop.com/product/combo-li-xi-djo-giap-thin-truyen-thong-xuan-moi"><img src='https://ik.imagekit.io/39wvgoqre/Lixi%20/NEW%20S3/NEW%20S3/HQ22-1.png?updatedAt=1704630031008' class="md:max-w-[500px] sm:w-[100%] w-[100%] mt-0 md:mt-10" alt="png3"/></a> 
            </div>
          </div>
        </div>
     
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative bg-gradient-to-r from-[#bb2d0d] to-[#700114] min-h-[100vh] mx-auto justify-center md:flex-row flex-col-reverse items-center px-4 flex sm:static sm:px-6 lg:px-8 z-10 mt-[80px] md:mt-0 pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40" >
          <div className="sm:max-w-lg z-10 mr-5 mt-5 md:mt-0">
          <TypeAnimation
             sequence={[
                // Same substring at the start will only be typed out once, initially
             'CHÚC MỪNG NĂM MỚI',
               4000, 
              'VẠN SỰ NHƯ Ý',
              4000,
              'AN KHANG THỊNH VƯỢNG',
              4000,
              ]}
             wrapper="span"
             speed={200}
              style={{  display: 'inline-block', fontWeight:'900', color:"white", }}
              className="responsive-text" 
              data-aos="fade-right"
              repeat={Infinity}
             />
          <h2 class=" text-[30px] drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-[#f5ac27]  to-[#ffd84b] font-bold text-left  mb-[10px] mt-[20px] sm:mt-5" >Giấy Dán Tường Đặc Sắc </h2>
       <p class="text-white opacity-[0.8] font-medium mt-2 mb-5 text-left " > Bộ sưu tập giấy dán tường của chúng tôi không chỉ là sự kết hợp hài hòa giữa phong cách hiện đại và nét truyền thống mà còn là nguồn cảm hứng không ngừng cho ngôi nhà của bạn. Chúng tôi liên tục theo dõi và đưa vào bộ sưu tập những xu hướng mới nhất trong lĩnh vực giấy dán tường, giúp không gian sống của bạn luôn trở nên mới mẻ và đẳng cấp.</p>   
      <p class="text-white opacity-[0.8] font-medium mt-2 mb-5 text-left " >Chất liệu cao cấp và độ bền vững là tiêu chí hàng đầu khi chọn lựa giấy dán tường cho bộ sưu tập của chúng tôi. Chúng tôi cam kết mang đến trải nghiệm trang trí tuyệt vời nhất, nơi mà mỗi tờ giấy dán tường không chỉ là sản phẩm trang trí mà còn là tác phẩm nghệ thuật thực sự.</p>
       

          </div>
          <div>
            <div>
             <a href="https://www.trangtritetshop.com/product/khung-chu-phuc-vang-rong-va-cac-hoa-tiet-truyen-thong"><img src='https://ik.imagekit.io/39wvgoqre/dantuong/phukien1/4243-2.png?updatedAt=1704274055342' class="md:max-w-[500px] sm:w-[100%] w-[100%] mt-0 md:mt-10" alt="png3"/></a> 
            </div>
          </div>
        </div>
     
          </SwiperSlide>
       </Swiper>
      </div>
    </div>
    )
}

export default Slider;
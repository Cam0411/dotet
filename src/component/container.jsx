import { AiOutlineMail } from "react-icons/ai"
import Popular from "./setUpPoducts/popular"
import BestProduct from "./setUpPoducts/bestProduct";
import AllCategoryProduct from "./setUpPoducts/allProduct";
import DayTreoProduct from "./setUpPoducts/HomePagedaytreo";
import DanTuongProduct from "./setUpPoducts/HomePageDanTuong";
import { useEffect } from "react";


const Container = () => {
  
    return (
        <div class="min-h-[100vh] ">
              <AllCategoryProduct />
            <div class="max-w-[1200px] mr-auto ml-auto h-auto py-3 sm:px-3 px-1">
          
               <div class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4 ">
                <div class="bg-white border-2 border-[#f2f2f2] shadow-lg rounded-lg min-h-[200px]  p-3 flex flex-col justify-center items-center mt-5 md:mt-0 group hover:bg-[#700114] duration-300 cursor-pointer hover:translate-y-[-15px]"  >
                  <h2 class="font-bold text-[22px] text-[#700114] group-hover:text-white">Lì Xì Đa Dạng</h2>
                  <p class="group-hover:text-white">Đa dạng với một loạt các mẫu mã và kiểu dáng. Với sự kết hợp tinh tế của hai màu chủ đạo, đỏ và vàng, chúng tôi tạo ra sự lôi cuốn và phong cách riêng biệt để làm tết của bạn trở nên thú vị hơn</p>
                </div>
                <div class="bg-white border-2 border-[#f2f2f2] shadow-lg rounded-lg min-h-[200px]  p-3 flex flex-col justify-center items-center mt-5 md:mt-0 group hover:bg-[#700114] duration-300 cursor-pointer hover:translate-y-[-15px]">
                  <h2 class="font-bold text-[22px] text-[#700114] group-hover:text-white">Dây Treo Độc Đáo</h2>
                  <p class="group-hover:text-white"> Chuyên cung các mẫu dây treo từ Trung Quốc và Việt Nam, với thiết kế độc đáo và mang ý nghĩa văn hóa của hai quốc gia, Sản phẩm chúng tôi luôn cập nhật theo thị trường </p>
                </div>
                <div class="bg-white border-2 border-[#f2f2f2] shadow-lg rounded-lg min-h-[200px]  p-3 flex flex-col justify-center items-center mt-5 md:mt-0 group hover:bg-[#700114] duration-300 cursor-pointer hover:translate-y-[-15px]">
                  <h2 class="font-bold text-[22px] text-[#700114] group-hover:text-white">Dán Tường Thân Thiện</h2>
                  <p class="group-hover:text-white">Sản phẩm của chúng tôi không chỉ mang lại sự độc đáo về thiết kế mà còn đặt sự tôn trọng với môi trường lên hàng đầu. Với sự đa dạng về mẫu mã và sự phù hợp cho mọi không gian.</p>
                </div>
              </div>
            </div>
            <DayTreoProduct />
            <DanTuongProduct />
           <BestProduct />
            <div class="min-h-[200px]">
                <div class="max-w-[1200px] mr-auto ml-auto h-auto py-3 sm:px-3 px-2">
                    <div class=" grid grid-cols-1 md:grid-cols-2 mt-5  gap-5  relative rounded-md">
                         <div class="text-left sm:p-2 p-0">
                           <h2 class="text-[18px] font-bold">Tận hưởng Tết Nguyên Đán với Sự Phong Phú từ Bộ Sưu Tập Sản Phẩm Tết của Chúng Tôi</h2>
                           <p class="mb-2">Khám phá những sản phẩm tết đa dạng và chất lượng cao, chẳng hạn như đèn lồng, phụ kiện trang trí và quà biếu tặng, để tạo nên một không gian ấm cúng và tràn ngập niềm vui cho gia đình bạn.</p>
                           <h2 class="text-[18px] font-bold">Góp Phần Làm Cho Tết Thêm Ý Nghĩa với Sản Phẩm Tết Chất Lượng</h2>
                           <p class="mb-2">Chúng tôi tự hào cung cấp những sản phẩm tết chất lượng, từ đèn lồng truyền thống đến những món quà ý nghĩa. Hãy kết nối với chúng tôi để tạo ra một Tết truyền thống và ý nghĩa hơn.</p>
                           <h2 class="text-[18px] font-bold">Mang Lại Không Khí Tết Ấm Áp với Sản Phẩm Tết Chất Lượng Cao</h2>
                           <p class="mb-2">Không gian trang trí ấm cúng và phong cách đặc trưng cho mùa lễ. Chọn lựa từ bộ sưu tập sản phẩm tết đa dạng của chúng tôi để tạo nên một không gian Tết độc đáo và đáng nhớ.</p>
                         </div>
                        <div class=" overflow-hidden group rounded-md flex justify-center items-center">
                        <img src="https://static.vecteezy.com/system/resources/previews/027/013/568/non_2x/chinese-new-year-2024-postcard-greeting-invitation-year-of-a-dragon-card-with-golden-numbers-and-drawing-of-a-chinese-dragon-banner-vector.jpg" alt="" srcset="" class="group-hover:scale-[1.02] duration-300 cursor-pointer drop-shadow-lg"  />
                        </div>
                    </div>
                </div>
            </div>
            {/* // set up category */}
            <Popular />
          
            <div class="min-h-[200px] sm:p-3 p-2">
              <div class="max-w-[1200px] mt-5 ml-auto mr-auto grid grid-cols-1 md:grid-cols-2">
                <div class="flex flex-col justify-center items-start  md:mr-5  mr-0 md:ml-5 ml-0">
                  <h2 class="text-[22px] font-bold mb-2 text-left">Liên hệ với chúng tôi</h2>
                  <p class="text-left mb-5 sm:mb-0">Chúng tôi tự hào cung cấp dịch vụ chăm sóc khách hàng xuất sắc. Đặt hàng, yêu cầu thông tin chi tiết hoặc đơn giản chỉ muốn tìm hiểu thêm - hãy liên hệ ngay qua số điện thoại:<span class="font-bold">0903-133-689</span>  hoặc email: <span class="font-bold">khakimha80@gmail.com.</span>  Đội ngũ chăm sóc khách hàng của chúng tôi sẽ đồng hành cùng bạn mọi lúc, mọi nơi.</p>
                </div>
                <div class="flex flex-col justify-center items-start  md:mr-5  mr-0 md:ml-5 ml-0 mt-[-14px]">
                  <h2 class="text-[22px] font-bold mb-2 text-left">Hỗ trợ mọi lúc, mọi nơi.</h2>
                  <p class="text-left mb-2">Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc của bạn. Hãy gọi đến số điện thoại: <span class="font-bold">0903-133-689</span> hoặc gửi email đến <span class="font-bold">0903-133-689</span> bất kỳ khi nào bạn cần. Chúng tôi cam kết đem đến trải nghiệm dịch vụ liên hệ nhanh chóng và hiệu quả.</p>
                </div>
                <div class="flex flex-col justify-center items-start  md:mr-5  mr-0 md:ml-5 ml-0 ">
                  <h2 class="text-[22px] font-bold mb-2 text-left">Đóng Góp Ý Kiến và Phản Hồi của Bạn</h2>
                  <p class="text-left mb-2">Ý kiến của bạn là động lực giúp chúng tôi ngày càng hoàn thiện. Chia sẻ ý kiến, đóng góp ý tưởng hoặc gửi phản hồi qua số điện thoại: <span class="font-bold">0903-133-689</span> hoặc email: <span class="font-bold">khakimha80@gmail.com.</span>. Chúng tôi rất trân trọng mọi đóng góp của bạn để cùng nhau xây dựng một trải nghiệm khách hàng tốt nhất.</p>
                </div>
                <div class="flex flex-col justify-center items-start  md:mr-5  mr-0 md:ml-5 ml-0 ">
                  <h2 class="text-[22px] font-bold mb-2 text-left">Thông Tin và Hỗ Trợ Chi Tiết</h2>
                  <p class="text-left mb-2">Đừng ngần ngại liên hệ để biết thêm chi tiết về sản phẩm, dịch vụ, hoặc để được tư vấn. Gọi ngay đến số điện thoại: <span class="font-bold">0903-133-689</span> hoặc gửi email đến <span class="font-bold">khakimha80@gmail.com.</span>. Chúng tôi cam kết cung cấp thông tin chi tiết và hỗ trợ chân thành để đáp ứng mọi nhu cầu của bạn.</p>
                </div>
              </div>
            </div>
             <div class="fixed bottom-2 right-2  animate-bounce rounded-full bg-white cursor-pointer pr-1 pt-1 ">
               <img class="w-[60px]" src="https://ik.imagekit.io/39wvgoqre/logo/zalo.png?updatedAt=1699624297978" alt="zalo" />
             </div>
        </div>
    )
}

export default Container
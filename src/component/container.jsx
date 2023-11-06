import { AiOutlineMail } from "react-icons/ai"
import Popular from "./setUpPoducts/popular"
import BestProduct from "./setUpPoducts/bestProduct";
import AllCategoryProduct from "./setUpPoducts/allProduct";
const Container = () => {

    return (
        <div class="min-h-[100vh] ">
              <AllCategoryProduct />
            <div class="max-w-[1200px] mr-auto ml-auto h-auto py-3 sm:px-3 px-1">
          
               <div class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4 ">
                <div class="bg-white border-2 border-[#f2f2f2] shadow-lg rounded-lg min-h-[200px]  p-3 flex flex-col justify-center items-center mt-5 md:mt-0">
                  <h1 class="font-bold text-[24px] text-[#700114]  ">Đa dạng sản phẩm</h1>
                  <p>Chúng tôi tự hào giới thiệu sự đa dạng của sản phẩm trang trí Tết để đáp ứng mọi phong cách và mong muốn trang trí của bạn</p>
                </div>
                <div class="bg-white border-2 border-[#f2f2f2] shadow-lg rounded-lg min-h-[200px]  p-3 flex flex-col justify-center items-center">
                  <h1 class="font-bold text-[24px] text-[#700114]  ">Sản phẩm Độc Đáo </h1>
                  <p>Lì xì truyền thống hoặc một chiếc đèn lồng hiện đại, chúng tôi có tất cả để giúp bạn tạo nên không gian Tết hoàn hảo và phong cách..</p>
                </div>
                <div class="bg-white border-2 border-[#f2f2f2] shadow-lg rounded-lg min-h-[200px]  p-3 flex flex-col justify-center items-center">
                  <h1 class="font-bold text-[24px] text-[#700114]  ">Tiết kiệm thời gian</h1>
                  <p>Duyệt qua sự đa dạng vô ngần của sản phẩm trực tuyến và tiết kiệm thời gian mua sắm tại cửa hàng của chúng tôi</p>
                </div>
              </div>
            </div>
          <BestProduct />
            <div class="min-h-[200px]">
                <div class="max-w-[1200px] mr-auto ml-auto h-auto py-3 sm:px-3 px-2">
                    <div class=" grid grid-cols-1 md:grid-cols-2 mt-5  gap-5  relative rounded-md">
                        <div class="  overflow-hidden group rounded-md">
                          <img src="https://static.vecteezy.com/system/resources/previews/027/013/568/non_2x/chinese-new-year-2024-postcard-greeting-invitation-year-of-a-dragon-card-with-golden-numbers-and-drawing-of-a-chinese-dragon-banner-vector.jpg" alt="" srcset="" class="group-hover:scale-[1.02] duration-300 cursor-pointer drop-shadow-lg" />
                        </div>
                        <div class=" overflow-hidden group rounded-md">
                        <img src="https://static.vecteezy.com/system/resources/previews/027/013/568/non_2x/chinese-new-year-2024-postcard-greeting-invitation-year-of-a-dragon-card-with-golden-numbers-and-drawing-of-a-chinese-dragon-banner-vector.jpg" alt="" srcset="" class="group-hover:scale-[1.02] duration-300 cursor-pointer drop-shadow-lg"  />
                        </div>
                    </div>
                </div>
            </div>
            {/* // set up category */}
            <Popular />
          
            <div class="min-h-[200px] p-3">
              <div class="max-w-[1200px] mt-5 ml-auto mr-auto grid grid-cols-1 md:grid-cols-2">
                <div class="flex flex-col justify-center items-start  md:mr-5  mr-0 md:ml-5 ml-0 ">
                  <h1 class="text-[25px] font-bold mb-2 text-left">Đăng ký để cập nhật của chúng tôi</h1>
                  <p class="text-left">Cập nhật website chúng tôi, để nhận thông tin mới nhất. Xin vui lòng đăng ký bằng địa chỉ email của bạn.</p>
                </div>
                <div class="flex flex-col justify-center items-end  md:mr-5 md:ml-5 ml-0 mr-0 mb-5 md:mb-0">
                   <div class="flex md:w-[80%] w-[100%] mt-5 md:mt-0 justify-between border-2  border-[#000]">
                     <input type="text" class="w-[70%] outline-none p-2 bg-[#f2f2f2]" placeholder="Nhập địa chỉ email"/>
                     <div class="flex justify-center items-center bg-[#700114] w-[50px]">
                        <AiOutlineMail class="text-white font-black text-[22px]" />
                     </div>
                   </div>
                </div>
              </div>
            </div>
        
        </div>
    )
}

export default Container
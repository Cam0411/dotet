
import { Link } from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io"
import { Helmet } from 'react-helmet';
const ErrorPage = () => {

    return (
        
        <div class="h-[100vh] w-full flex justify-center items-start ">
        <Helmet>
        <title>Trang này không tồn tại hoặc lỗi nội dung</title>
        <meta name="description" content="Hãy thử tải lại trang, sự cố này có thể chỉ là tạm thời. Nếu bạn nhập địa chỉ theo cách thủ công, hãy kiểm tra lại xem..." />
      
      </Helmet>
            <div class=" text-center max-w-[1200px] p-2">
            <h1 class="font-black text-[162px] mt-[100px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">404</h1>
            <h1 class="sm:text-[50px] text-[30px] font-black mt-[-40px]">Không Tìm thấy nội dung</h1>
            <p class="sm:text-[20px] text-[18px] ">URL không tồn tại hoặc đã thay đổi </p>
           <Link to="/"><p class="text-right underline underline-offset-8 cursor-pointer font-bold mt-10">Trở về trang chủ </p></Link> 
            </div>
        </div>
       
    )
}

export default ErrorPage;
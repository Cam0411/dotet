import { MdOutlineLocationOn } from "react-icons/md";
const Social = () => {
    return (
        <div>
          <div class="fixed bottom-2 right-2 z-50 animate-bounce rounded-full bg-white cursor-pointer pr-1 pt-1 ">
             <a href="https://zalo.me/0903133689"><img class="w-[60px]" src="https://ik.imagekit.io/39wvgoqre/logo/zalo.png?updatedAt=1699624297978" alt="zalo" /> </a>
          </div>
          <a href="https://maps.app.goo.gl/vwdhQWjw6af3F2c26" class="fixed bottom-2 shadow-xl left-2 z-50  rounded-full  bg-[#700114] w-[50px] h-[50px]   flex justify-center items-center cursor-pointer  pt-1 ">
            <MdOutlineLocationOn class="text-[25px] text-white "/> 
             <p class="absolute top-3 right-2.5 bg-[#ffd84b] w-[13px] h-[13px] duration-300 inline-flex animate-ping rounded-full"> </p>
             <p class="absolute top-3 right-2.5 bg-[#ffd84b] w-[13px] h-[13px] inline-flex  rounded-full"> </p>
          </a>
        </div>
    )
}

export default Social;
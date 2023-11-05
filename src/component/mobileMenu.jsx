import {Link,useNavigate,location} from 'react-router-dom'
import {BsFillHouseCheckFill} from 'react-icons/bs';
import {MdLogout,MdLogin} from "react-icons/md"
import {GoDash} from 'react-icons/go'
import { useState } from 'react';
import {AiOutlineSearch,AiOutlineMenu } from 'react-icons/ai'
import {RiArrowRightSLine} from 'react-icons/ri'
import "../style/animation.css"
const Menu = ({animationMenu}) => {
    const [modal,setModal] = useState(false)
    const handleModal = () => {
       setModal(!modal)
    }
     
    return (
       
            <div class={`bg-white min-h-[100vh] fixed  inset-0 w-[70%] z-50 ${animationMenu} shadow-lg  `}>
          
              <div >
                <div class="flex flex-col  items-start  min-h-[100vh]">
                <h1 class="p-4 sm:text-[82px] text-[32px] font-black bg-gradient-to-r from-[#bb2d0d] to-[#700114] text-transparent bg-clip-text">Hà Shop</h1>
                <ul class="flex flex-col text-whte justify-center items-center h-full  font-medium   cursor-pointer text-[20px] mt-10 text-right w-full">
                  <li class="flex w-full text-[18px] text-[#700114]  p-4" ><Link to="/" class="flex justify-between w-full mt-5"> Trang chủ <RiArrowRightSLine class="text-[30px]"   /></Link> </li>
                  <li class="w-full p-4 text-[18px] text-[#700114]  flex" onClick={() => window.location.reload()}><Link to="/category/li-xi" class="flex justify-between w-full " >Lì Xì <RiArrowRightSLine class="text-[30px]"  /></Link></li>
                  <li class="w-full p-4 text-[18px] text-[#700114]  flex" onClick={() => window.location.reload()}><Link to="/category/day-treo-trung-quoc" class="flex justify-between w-full text-left"> Dây Treo Trung Quốc <RiArrowRightSLine class="text-[30px]"   /></Link></li>
                  <li class="w-full p-4 text-[18px]  text-[#700114] flex" onClick={() => window.location.reload()}><Link to="/category/day-treo-viet-nam" class="flex justify-between w-full text-left">Dây Treo Việt Nam <RiArrowRightSLine class="text-[30px]"   /></Link></li>
                  <li class="w-full p-4 text-[18px] text-[#700114] flex" onClick={() => window.location.reload()}><Link to="/category/dan-tuong" class="flex justify-between w-full" >Dán Tường <RiArrowRightSLine class="text-[30px]"   /></Link></li>
                 </ul>
                
                </div>
               
             </div>
            </div>
         
    )
}

export default Menu;
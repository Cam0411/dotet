import {Link,useNavigate,useLocation} from 'react-router-dom'
import { MdKeyboardArrowDown,MdKeyboardArrowUp  } from "react-icons/md";
import {BsFillHouseCheckFill} from 'react-icons/bs';
import {MdLogout,MdLogin} from "react-icons/md"
import {GoDash} from 'react-icons/go'
import { useState } from 'react';
import {AiOutlineSearch,AiOutlineMenu } from 'react-icons/ai'
import {RiArrowRightSLine} from 'react-icons/ri'
import "../style/animation.css"
const Menu = ({animationMenu,closeMenu}) => {
    const [modal,setModal] = useState(false)
    const location = useLocation();
    const handleModal = () => {
       setModal(!modal)
    }
     
    return (
       
            <div class={`bg-white min-h-[100vh] fixed  inset-0 w-[70%] z-50 ${animationMenu} shadow-lg  `}>
          
              <div >
                <div class="flex flex-col  items-start  min-h-[100vh]">
                <p class="p-4 text-[52px] font-black bg-gradient-to-r from-[#bb2d0d] to-[#700114] text-transparent bg-clip-text">HÀ</p>
                <ul class="flex flex-col text-whte justify-center items-center h-full  font-medium   cursor-pointer text-[20px] mt-10 text-right w-full">
                  <li class="flex w-full sm:text-[18px] text-[14px]  p-4" ><Link to="/" class="flex justify-between w-full mt-5"> Trang chủ <RiArrowRightSLine class="text-[30px]"   /></Link> </li>
                  <li class="w-full p-4 sm:text-[18px] text-[14px]  flex" ><Link to="/about-us" class="flex justify-between w-full " onClick={closeMenu} >Về chúng tôi <RiArrowRightSLine class="text-[30px]"  /></Link></li>
                  <li class="w-full p-4 sm:text-[18px] text-[14px]  flex" ><Link to="/save-product" class="flex justify-between w-full text-left" onClick={closeMenu}> Mục yêu thích <RiArrowRightSLine class="text-[30px]"   /></Link></li>
                  <li class="flex w-full p-4 sm:text-[18px] text-[14px]" onClick={handleModal}><p>Danh mục sản phẩm</p>{modal ? <MdKeyboardArrowUp class="text-[28px] ml-1 mt-[-2px]"/> : <MdKeyboardArrowDown class="text-[28px] ml-1 mt-[-2px]"/> }</li>
                  <div class={` shadow-lg w-full flex justify-start transition-height duration-500 linear ${modal ? 'h-[auto] py-5 px-5' : 'h-[0] py-0 px-0'}  overflow-hidden`}>
                    <ul class="w-full text-left">
                    <Link to="/category/li-xi" className={location.pathname === '/category/li-xi' ? 'text-[#700114] bg-[#700114] font-bold' : ''}>   <li class="p-2 py-3 hover:bg-[#700114] hover:text-white duration-300 cursor-pointer sm:text-[18px] text-[14px]" onClick={closeMenu}>Lì xì</li> </Link>
                    <Link to="/category/day-treo-trung-quoc" className={location.pathname === '/category/day-treo-trung-quoc' ? 'text-[#700114] bg-[#700114] font-bold' : ''} onClick={closeMenu}>   <li class="p-2 py-3 hover:bg-[#700114] hover:text-white duration-300 sm:text-[18px] text-[14px]">Dây treo Trung Quốc</li> </Link>
                    <Link to="/category/day-treo-viet-nam" className={location.pathname === '/category/day-treo-viet-nam' ? 'text-[#700114] bg-[#700114] font-bold' : ''} onClick={closeMenu}>   <li class="p-2 py-3 hover:bg-[#700114] hover:text-white duration-300 sm:text-[18px] text-[14px]">Dây treo Việt Nam</li> </Link>
                    <Link to="/category/dan-tuong" className={location.pathname === '/category/dan-tuong' ? 'text-[#700114] bg-[#700114] font-bold' : ''} onClick={closeMenu}>  <li class="p-2 py-3 hover:bg-[#700114] hover:text-white duration-300 sm:text-[18px] text-[14px]">Dán Tường</li> </Link> 
                    </ul>
                  </div>
                    
                 </ul>
                
                </div>
               
             </div>
            </div>
         
    )
}

export default Menu;
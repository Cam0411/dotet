import {AiOutlineMail,AiOutlineSearch,AiOutlineMenu} from "react-icons/ai"
import { Link,useLocation} from "react-router-dom";
import {useState} from "react"
import MobileMenu from "./mobileMenu";
const Header = () => {
    const [ismenu,setIsMenu] = useState(false);
    const openMenu = () => {
          setIsMenu(true)
    }
    const closeMenu = () => {
        setIsMenu(false)
    }
    const location = useLocation();
    return (
        <div class="min-h-[80px] bg-gradient-to-r from-[#bb2d0d] to-[#700114] fixed top-0 left-0 right-0 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] z-10 ">
         <div class=" flex justify-between items-center w-full h-[80px] "> 
           <div class="bg-gradient-to-r from-[#f5ac27]  to-[#ffd84b] rounded-r-full w-[80%] xl:w-[30%] md:w-[40%] h-full flex justify-start items-center">
           <h1 class="md:text-[42px] sm:text=[32px]  text-[26px] bg-clip-text text-transparent bg-gradient-to-r from-[#700114] to-[#a3262a] font-black px-10">HÀ SHOP</h1>
           </div>
           <div class="hidden md:flex relative border-b-2 overflow-hidden  justify-between items-center text-white bg-white rounded-full shadow-lg  w-[300px]">
          <input class=" h-10 px-3 pr-16  text-black focus:outline-none " type="text"  placeholder="Tìm Kiếm" />
           <AiOutlineSearch class="text-[22px] text-black mr-2 mt-1"/>
          </div>
             <ul class="hidden sm:hidden xl:flex text-white font-bold px-5 ">
              <Link to="/" className={location.pathname === '/' ? 'text-[#ffd84b] font-bold' : ''}> <li class={`mr-5`}>Trang chủ</li> </Link> 
              <Link to="/category/li-xi" className={location.pathname === '/category/li-xi' ? 'text-[#ffd84b] font-bold' : ''}>   <li class="mr-5">Lì xì</li> </Link>
              <Link to="/category/day-treo-trung-quoc" className={location.pathname === '/category/day-treo-trung-quoc' ? 'text-[#ffd84b] font-bold' : ''}>   <li class="mr-5">Dây treo Trung Quốc</li> </Link>
              <Link to="/category/day-treo-viet-nam" className={location.pathname === '/category/day-treo-viet-nam' ? 'text-[#ffd84b] font-bold' : ''}>   <li class="mr-5">Dây treo Việt Nam</li> </Link>
              <Link to="/category/treo-tuong" className={location.pathname === '/category/treo-tuong' ? 'text-[#ffd84b] font-bold' : ''}>  <li class="mr-5">Đồ treo tường</li> </Link> 
             </ul> 
             <div class="text-white mr-2 flex xl:hidden cursor-pointer">
                <AiOutlineMenu class="text-[32px] " onClick={openMenu}/>
             </div>
         </div>
         <div class="bg-[#700114] h-[80px] shadow-lg flex md:hidden justify-center items-center">
         <div class=" relative border-b-2 flex overflow-hidden  justify-between items-center text-white bg-white rounded-full shadow-lg  w-[80%]">
          <input class=" h-10 px-3 pr-16  text-black focus:outline-none " type="text"  placeholder="Tìm Kiếm" />
           <AiOutlineSearch class="text-[22px] text-black mr-2 mt-1"/>
          </div>
         </div>
         {
            ismenu ? (
                <div>
                      <MobileMenu animationMenu={'animation-open-menu'}/>
                      <div class="fixed h-[100%] w-[100%] inset-y-0 right-0 cursor-pointer z-10 bg-[#0004]" onClick={closeMenu}></div>
                </div>
            ) : (
                <div>
                      <MobileMenu animationMenu={'animation-close-menu'}/>
                </div>
            )
         }
        </div>
    )
}

export default Header;
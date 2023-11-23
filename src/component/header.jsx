import {AiOutlineMail,AiOutlineSearch,AiOutlineMenu} from "react-icons/ai"
import { Link,useLocation,useNavigate} from "react-router-dom";
import {useState} from "react"
import MobileMenu from "./mobileMenu";
const Header = () => {
    const [ismenu,setIsMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const history = useNavigate();
    const openMenu = () => {
          setIsMenu(true)
    }
    const closeMenu = () => {
        setIsMenu(false)
    }
    const location = useLocation();

    // setting search 
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
      };
      const handleSearch = () => {
        history(`/search/${searchQuery}`);
      }; 

    const handleKeyPress = (e) => {
        if (e.key === "Enter"){
            handleSearch();
        }
    }
    return (
        <div class="min-h-[80px] bg-gradient-to-r from-[#bb2d0d] to-[#700114] fixed top-0 left-0 right-0 shadow-lg z-10 ">
         <div class=" flex justify-between items-center w-full h-[80px] "> 
           <div class="bg-gradient-to-r from-[#f5ac27]  to-[#ffd84b] rounded-r-full w-[80%] xl:w-[30%] md:w-[40%] h-full flex justify-start items-center">
           <p class="text-[52px]   bg-clip-text text-transparent bg-gradient-to-r from-[#700114] to-[#a3262a] font-black p-1">HÀ</p>
           </div>
           <div class="hidden md:flex relative border-b-2 overflow-hidden  justify-between items-center text-white bg-white rounded-full shadow-lg  w-[300px]">
          <input class=" h-10 px-3 pr-16  text-black focus:outline-none " type="text"  placeholder="Tìm Kiếm" onChange={handleSearchInputChange}  onKeyPress={searchQuery.length !== 0 ? handleKeyPress : undefined}/>
           <AiOutlineSearch class="text-[22px] text-black mr-2 mt-1 cursor-pointer" onClick={handleSearch}/>
          </div>
             <ul class="hidden sm:hidden xl:flex text-white font-bold px-5 ">
              <Link to="/" className={location.pathname === '/' ? 'text-[#ffd84b] font-bold' : ''} onClick={() => {   window.scrollTo(0, 0)}}> <li class={`mr-3`}>Trang chủ</li> </Link> 
              <Link to="/about-us" className={location.pathname === '/about-us' ? 'text-[#ffd84b] font-bold' : ''} onClick={() => {   window.scrollTo(0, 0)}}> <li class={`mx-3`}>Về chúng tôi</li> </Link> 
            <li class="hidden mx-3 group lg:flex relative cursor-pointer" >
                 <div class="absolute bg-white shadow-lg hidden group-hover:block top-[100%] rounded">
              <ul class="text-[black] max-w-[350px] text-left">
              <Link to="/category/li-xi" className={location.pathname === '/category/li-xi' ? 'text-[#700114] bg-[#700114] font-bold' : ''}>   <li class="p-2 py-3 hover:bg-[#700114] hover:text-white duration-300 cursor-pointer" onClick={() => {window.scrollTo(0,0)}}>Lì xì</li> </Link>
              <Link to="/category/day-treo-trung-quoc" className={location.pathname === '/category/day-treo-trung-quoc' ? 'text-[#700114] bg-[#700114] font-bold' : ''} onClick={() => { window.scrollTo(0, 0)}}>   <li class="p-2 py-3 hover:bg-[#700114] hover:text-white duration-300">Dây treo Trung Quốc</li> </Link>
              <Link to="/category/day-treo-viet-nam" className={location.pathname === '/category/day-treo-viet-nam' ? 'text-[#700114] bg-[#700114] font-bold' : ''} onClick={() => { window.scrollTo(0, 0)}}>   <li class="p-2 py-3 hover:bg-[#700114] hover:text-white duration-300">Dây treo Việt Nam</li> </Link>
              <Link to="/category/dan-tuong" className={location.pathname === '/category/dan-tuong' ? 'text-[#700114] bg-[#700114] font-bold' : ''} onClick={() => { window.scrollTo(0, 0)}}>  <li class="p-2 py-3 hover:bg-[#700114] hover:text-white duration-300">Dán Tường</li> </Link> 
              </ul>
            </div>
          
            <p  className={`${location.pathname.startsWith('/category/')  ? 'text-[#ffd84b]' : ''} flex`}>  <AiOutlineMenu  class="mt-1 text-[32px] sm:text-[17px]  relative mr-1"/> Danh mục sản phẩm</p>
          
            </li>
            <Link to="/save-product" className={location.pathname === '/save-product' ? 'text-[#ffd84b] font-bold' : ''} onClick={() => {   window.scrollTo(0, 0)}}> <li class={`ml-3`}>Mục yêu thích</li> </Link> 

             </ul> 
            
             <div class="text-white mrs-2 flex xl:hidden cursor-pointer">
                <AiOutlineMenu class="text-[32px] " onClick={openMenu}/>
             </div>
         </div>
         <div class="bg-[#700114] h-[80px] shadow-lg flex md:hidden justify-center items-center">
         <div class=" relative border-b-2 flex overflow-hidden  justify-between items-center text-white bg-white rounded-full shadow-lg  w-[80%]">
         <input class=" h-10 px-3 pr-16  text-black focus:outline-none " type="text"  placeholder="Tìm Kiếm" onChange={handleSearchInputChange}  onKeyPress={searchQuery.length !== 0 ? handleKeyPress : undefined}/>
           <AiOutlineSearch class="text-[22px] text-black mr-2 mt-1" onClick={handleSearch}/>
          </div>
         </div>
         {
            ismenu ? (
                <div>
                      <MobileMenu animationMenu={'animation-open-menu'} closeMenu={closeMenu}/>
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
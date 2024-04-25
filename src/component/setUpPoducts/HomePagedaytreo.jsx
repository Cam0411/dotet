import { useState,useEffect } from "react"
import axios from "axios"
import { useParams,Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import {IoIosArrowForward} from "react-icons/io"
import { List } from 'react-content-loader'

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
const DayTreoProduct = () => {
    const [products,setProduct] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [setLength,setCheckLength] = useState(false);
    const category = useParams();
    const apiHaweb = `https://haweb-api.onrender.com/api/product`;
    useEffect(() => {
    if (products.length === 0){
    const apiHawebcategory = `${apiHaweb}/category/day-treo-viet-nam`;
    axios.get(`${apiHawebcategory}`)
        .then((res) => {
          const randomProduct = res.data.product;
              if (randomProduct.length > 8) {
            // Shuffle the products and then limit to 15
            const shuffledProducts = shuffle([...randomProduct]);
            const random15Products = shuffledProducts.slice(0, 8);
            setProduct(random15Products);
          } else {
            // If there are 15 or fewer products, use them as is
            setProduct(randomProduct);
          }

        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
      }
    },[products])

 
    return (
        <div class=" bg-gradient-to-r to-[#bb2d0d] from-[#700114] mb-10 min-h-[500px] pb-3 mt-10">
            <div class="h-auto max-w-[1200px] ml-auto mr-auto">
            <div>
                <div class=" w-full min-h-[60px] flex justify-between  items-end rounded-lg  ">
                <h2 class="font-bold  px-2  text-[22px]   text-[#ffd84b] underline underline-offset-8 md:text-left text-center">Dây Treo Tết 2024</h2>
                <Link rel="canonical" to="/category/day-treo-viet-nam" onClick={() => {   window.scrollTo(0, 0)}}> <p class="text-white hidden cursor-pointer font-bold md:flex mr-1">Xem Thêm <IoIosArrowForward class="mt-1" /></p> </Link>
                </div>
                <Link rel="canonical" to="/category/day-treo-viet-nam" onClick={() => {   window.scrollTo(0, 0)}}> <p class="text-white mt-4 flex cursor-pointer font-bold md:hidden ml-2 text-right">Xem Thêm <IoIosArrowForward class="mt-1" /></p> </Link>

            {
                products ? (
                  
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4  sm:px-3 px-1 md:gap-4 gap-2 max-w-[1200px]   ml-auto mr-auto mb-5">
                       
                      {products.map((product) => (
                     <div key={product.id} class="cursor-pointer w-full text-[14px] xl:text-[16px] text-left ml-auto mr-auto  min-h-[350px] shadow-lg  mt-5  bg-white p-3 relative rounded overflow-hidden group border-2 border-[#f2f2f2]" >
                     <Link rel="canonical" to={`/product/${product.slug}`} onClick={() => { window.scroll(0, 0)}}>
                     <div>
                     <LazyLoadImage
                      alt={product.photo}
                     src={product.photo} // use normal <img> attributes as props
                     class="mt-5 mb-5 w-full sm:max-w-[180px]   ml-auto mr-auto shadow-lg rounded"
                      />
                     <div class="min-h-[100px]">
                      <span class="mt-2" >{product.category}</span>
                      <h3 class="font-bold ">{product.title}</h3>
                      <p> <span class="font-bold">Mã sản phẩm: </span> {product.codeProduct}</p>
                      <p><span class="font-bold">Liên Hệ:</span> 0903-133-689 </p>
                      </div>
                     </div>
                     </Link>
                   </div>
                         ))}
                    </div>
                ) : (
                    <div class="font-bold mt-5 ml-auto mr-auto max-w-[1200px]"><p><List /></p></div>
                )
        }

            </div>
            </div>
           </div>
      
    )
}

export default DayTreoProduct;
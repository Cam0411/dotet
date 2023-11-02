import { useState,useEffect } from "react"
import axios from "axios"
import { useParams,Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { List } from 'react-content-loader'

const Category = () => {
    const [products,setProduct] = useState();
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [firstProductCategory, setFirstProductCategory] = useState(null);
    const category = useParams();
    const apiHaweb = `https://haweb-api.onrender.com/api/product`;
    useEffect(() => {
    const apiHawebcategory = `${apiHaweb}/category/${category.slug}`;
    axios.get(`${apiHawebcategory}`)
        .then((res) => {
           setProduct(res.data.product)  
           setFirstProductCategory(res.data.product[0].category);
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
    },[category])
    const loadMore = () => {
        // Increase the number of visible products
        setVisibleProducts(visibleProducts + 8);
      };
   
    return (
        <div class=" bg-[#f2f2f2]">
            <div class="h-auto ">
            <div class="min-h-[200px] ">
                <div class="max-w-[1200px] mr-auto ml-auto h-auto p-3 mt-[80px]">
                    <div class=" grid grid-cols-1 sm:grid-cols-2 mt-10 mb-10  relative rounded-md gap-3">
                        <div class=" overflow-hidden group rounded-md">
                          <img src="https://static.vecteezy.com/system/resources/previews/027/013/568/non_2x/chinese-new-year-2024-postcard-greeting-invitation-year-of-a-dragon-card-with-golden-numbers-and-drawing-of-a-chinese-dragon-banner-vector.jpg" alt="" srcset="" class="group-hover:scale-[1.02] duration-300 cursor-pointer drop-shadow-lg" />
                        </div>
                        <div class=" overflow-hidden group rounded-md">
                        <img src="https://static.vecteezy.com/system/resources/previews/027/013/568/non_2x/chinese-new-year-2024-postcard-greeting-invitation-year-of-a-dragon-card-with-golden-numbers-and-drawing-of-a-chinese-dragon-banner-vector.jpg" alt="" srcset="" class="group-hover:scale-[1.02] duration-300 cursor-pointer drop-shadow-lg"  />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="bg-gradient-to-r to-[#bb2d0d] from-[#700114] w-full min-h-[120px] flex justify-center items-center rounded-lg shadow-2xl ">
                <h1 class="font-black text-center px-2 text-[32px] ml-2 text-white">{firstProductCategory}</h1>

                </div>
            {
                products ? (
                  
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-3 gap-4 max-w-[1200px]  ml-auto mr-auto ">
                       
                      {products.slice(0, visibleProducts).map((product) => (
                          <div key={product.id} class="cursor-pointer min-w-[200px] text-left   h-[350px] shadow-lg  mt-5  bg-white p-3 relative rounded overflow-hidden group border-2 border-[#f2f2f2]">
                            <Link to={`/${product.slug}`}>
                            <div>
                            <LazyLoadImage
                             alt={product.photo}
                            src={product.photo} // use normal <img> attributes as props
                            class="mt-5 2 max-w-[150px] ml-auto mr-auto shadow-lg rounded"
                             />
                            <div class="min-h-[100px]">
                             <p class="mt-2" >{product.category}</p>
                             <h1 class="font-bold ">{product.title}</h1>
                             <p> <span class="font-bold">Mã sản phẩm: </span> {product.description}</p>
                             <p><span class="font-bold"> Giá:</span>  Liên hệ</p>
                             </div>
                            </div>
                            </Link>
                          </div>
                         ))}
                    </div>
                ) : ""
        }
         <div class="flex justify-center">
         <p class=" cursor-pointer ml-2 p-3 bg-[#ffd84b] shadow-lg rounded text-[#700114] font-bold mb-10 mt-5"  onClick={loadMore}>Xem Thêm</p>    
         
         </div>
            </div>
            </div>
           </div>
      
    )
}

export default Category;
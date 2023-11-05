import { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios"; 
import { List } from 'react-content-loader';
const Search = () => {
    const {key} = useParams();
    const [products,setProducts] = useState([]);
    const [setLoading,setIsLoading] = useState(true);
    const [visibleProducts, setVisibleProducts] = useState(8);

    useEffect(() => {
    const apiHaWeb = `https://haweb-api.onrender.com/api/product/searchProduct`
     setIsLoading(true)
      axios.get(`${apiHaWeb}/${key}`)
      .then((res) => {
         setProducts(res.data.products)
         setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
      })
    },[key])
    const loadMore = () => {
      // Increase the number of visible products
      setVisibleProducts(visibleProducts + 8);
    };
    return (
        <div class="md:mt-[150px] mt-[200px] max-w-[1200px] ml-auto mr-auto p-3 min-h-[100vh]">
        {setLoading ? (
          <p>Loading...</p>
        ) : products.length !== 0 ? ( // Check if products is not null
          <h1 class="font-bold text-[28px] border-b-2 pb-4 border-[#700114]">Kết quả tìm kiếm "{key}"</h1>
        ) : (
          // Remove this block for "not found" message
          <h1 class="font-bold text-[28px] border-b-2 pb-4 border-[#700114]">Không tìm thấy kết quả "{key}"</h1>
        )}
            
            {
                products ? (
                  
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-3 gap-4 max-w-[1200px]  ml-auto mr-auto ">
                       
                      {products.slice(0, visibleProducts).map((product) => (
                          <div key={product.id} class="cursor-pointer max-w-[300px] ml-auto mr-auto  min-h-[350px] shadow-lg  mt-5 text-left  bg-white p-3 relative rounded overflow-hidden group border-2 border-[#f2f2f2]">
                            <Link to={`/${product.slug}`} >
                            <div>
                            <img
                             alt={product.photo}
                            src={product.photo} // use normal <img> attributes as props
                            class="mt-5 mb-5 max-w-[180px] ml-auto mr-auto shadow-lg"
                             />
                            <div class="min-h-[100px]">
                             <span class="mt-2" >{product.category}</span>
                             <h1 class="font-bold ">{product.title}</h1>
                             <p> <span class="font-bold">Mã sản phẩm: </span> {product.codeProduct}</p>
                             <p><span class="font-bold"> Giá:</span>  Liên hệ</p>
                             </div>
                            </div>
                            </Link>
                          </div>
                         ))}
                      
                    </div>
                ) : ( <div class="font-bold mt-5"><p><List /></p></div> )
                      }
          <div class="flex justify-center">
         {products?.length >= 8 ? (         <p class=" cursor-pointer ml-2 p-3 bg-[#ffd84b] shadow-lg rounded text-[#700114] font-bold mb-10 mt-5"  onClick={loadMore}>Xem Thêm</p>) : ''  }
         </div>
        </div>
    )
}


export default Search;
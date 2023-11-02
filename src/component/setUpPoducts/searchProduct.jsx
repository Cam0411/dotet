import { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios"; 

const Search = () => {
    const {key} = useParams();
    const [products,setProducts] = useState([]);
    useEffect(() => {
    const apiHaWeb = `https://haweb-api.onrender.com/api/product/searchProduct`
      axios.get(`${apiHaWeb}/${key}`)
      .then((res) => {
         setProducts(res.data.products)
      })
      .catch((err) => {
        console.log(err);
      })
    },[key])
    return (
        <div class="md:mt-[150px] mt-[200px] max-w-[1200px] ml-auto mr-auto p-3">
            <p class="text-center text-[23px] font-bold border-b-2 pb-3 border-[#700114]">{products.length === 0 ? `không tìm thấy kết quả "${key}"` : `Kết quả tìm kiếm "${key}" `}</p>
            
            {
                products ? (
                  
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-3 gap-4 max-w-[1200px]  ml-auto mr-auto ">
                       
                      {products.map((product) => (
                          <div key={product.id} class="cursor-pointer min-w-[200px]  h-[350px] shadow-lg border-b  mt-5 text-left  bg-white p-3 relative rounded overflow-hidden group border-2 border-[#f2f2f2]">
                            <Link to={`/${product.slug}`}>
                            <div>
                            <img
                             alt={product.photo}
                            src={product.photo} // use normal <img> attributes as props
                            class="mt-5 max-w-[150px] ml-auto mr-auto shadow-lg"
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
        </div>
    )
}


export default Search;
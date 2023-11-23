import { useSelector,useDispatch} from "react-redux";
import { CiTrash } from "react-icons/ci";
import { removeFromCart } from "../../redux/action/cartAPI";
import { Link } from "react-router-dom";
const SaveProduct = () => {
    // const useSelector = useSelector()
    const productsState = useSelector((state) => state.product.cart.cartItems);
    const dispatch = useDispatch();
    return (
        <div class="min-h-[100vh]">
            <div class="mt-[150px] max-w-[900px] ml-auto mr-auto p-2">
                <h1 class="font-medium text-[20px]  border-[#000] mt-[50px] md:mt-0 ">Danh sách sản phẩm</h1>
                <p>Nếu bạn quan tâm đến việc mua sỉ hoặc muốn biết thêm về các chương trình ưu đãi đặc biệt, chúng tôi luôn sẵn lòng hỗ trợ. Hãy liên hệ với chúng tôi qua số điện thoại: <span class="font-bold underline underline-offset-4">0903-133-689 </span> hooặc email: <span class="font-bold underline underline-offset-4">khakimha80@gmail.com </span>để biết thêm thêm thông tin.</p>
                <div class="bg-white rounded shadow-lg min-h-[200px] hidden sm:block mt-5 p-3">
                   <div class="grid grid-cols-4 mb-4">
                       <p class="col-span-2">Sản phẩm</p>
                       <p >Mã sản phẩm</p>
                       <p>Phân Loại</p>
                 
                   </div>
                   {productsState.length !== 0 ? ( // Use optional chaining here
               productsState.map((item) => (
              <div className="grid grid-cols-4 border-t-2 py-4 relative overflow-hidden group duration-300" key={item._id}>
             
                <div class=" col-span-2 cursor-pointer">
                <Link to={`/product/${item.slug}`} class="items-center flex">
                  <img src={item.photo} class="max-w-[100px] border-2" alt={item.title} srcset="" />
                  <h2 class="px-2 first-letter:">{item.title}</h2>
                </Link>
                </div>
  
            
                <p class="items-center flex justify-center">{item.codeProduct}</p>
                <p class="items-center flex justify-center">{item.category}</p>
                <div>
                    <p class="border-2 border-[#000]  flex justify-center items-center cursor-pointer absolute bottom-0 right-0 w-[30px] h-[30px] translate-x-[100%] group-hover:translate-x-0 duration-300" onClick={() => dispatch(removeFromCart(item.slug))}><CiTrash /></p>
                </div>
              </div>
            ))
          ) : (
            <p>Không có sản phẩm trong mục.</p>
          )}
                </div>
                <div class=" rounded min-h-[200px] mt-5 block sm:hidden">
                   <div>
                      {
                         productsState.length !== 0 ? (
                          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-3 sm:px-3 px-1 md:gap-4 gap-2 max-w-[1200px]   ml-auto mr-auto ">
                       
                          {productsState.map((item) => (
                          <Link to={`/product/${item.slug}`} class="">
                          <div className=" py-4 relative overflow-hidden text-left border-2 bg-white p-2 ml-2 shadow-lg   group duration-300" key={item._id}>
             
                          <div class=" col-span-2 cursor-pointer">
                  
                            <img src={item.photo} class="w-[100%] ml-auto mr-auto" alt={item.title} srcset="" />
                            <p class="mt-2">{item.title}</p>
                     
                          </div>
            
                      
                          <p class="mt-1"><span class="font-bold">Mã sản phẩm:</span> {item.codeProduct}</p>
                          <p class=""><span class="font-bold">Phân loại</span>{item.category}</p>
                          <div>
                              <p class="border-2 border-[#000]  flex justify-center items-center cursor-pointer absolute bottom-0 right-0 w-[30px] h-[30px] translate-x-[110%] group-hover:translate-x-0 duration-300" onClick={() => dispatch(removeFromCart(item.slug))}><CiTrash /></p>
                          </div>
                        </div>
                        </Link>
                             ))}
                        </div>
                         ) : ""
                      }
                   </div>
                </div>
            </div>
        </div>
    )
}


export default SaveProduct;
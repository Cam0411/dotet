import { TypeAnimation } from 'react-type-animation';
import '../style/typeJs.css'
const Slider = () => {
    return (

      <div className="relative h-[100vh] overflow-hidden bg-gradient-to-r from-[#700114] to-[#a3262a] mt-[80px] ">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg z-50">
          <h1 class="sm:text-[152px] text-[50px] drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-[#f5ac27]  to-[#ffd84b] font-black tracking-widest mb-[-20px] mt-[40px] sm:mt-0">2024</h1>
               <TypeAnimation
             sequence={[
                // Same substring at the start will only be typed out once, initially
             'CHÚC MỪNG NĂM MỚI',
               4000, 
              'VẠN SỰ NHƯ Ý',
              4000,
              'AN KHAN THỊNH VƯỢNG',
              4000,
              ]}
             wrapper="span"
             speed={200}
              style={{  display: 'inline-block', fontWeight:'900', color:"white", }}
              className="responsive-text" 
    
      repeat={Infinity}
      />
      <p class="text-white opacity-[0.8] font-medium mt-2 ">Chào mừng bạn đến Ha Shop Đồ Tết! Chúng tôi rất vui khi bạn ghé thăm cửa hàng của chúng tôi. Ha Shop chuyên cung cấp các sản phẩm đồ tết chất lượng và đa dạng để giúp bạn chuẩn bị cho mùa Tết truyền thống một cách hoàn hảo. </p>
          </div>
          <div>
            <div className="mt-10 z-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-[220px] w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://images.unsplash.com/photo-1587133966114-7f69b8803e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="xl:h-[220px] h-[0] w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1518894347072-3bfedb006095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMG5ldyUyMHllYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-[220px] w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1565457210787-a4e17b40f04e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbmVzZSUyMG5ldyUyMHllYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-[220px] w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1612201578303-25f1712d20cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaW5lc2UlMjBuZXclMjB5ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-[220px] w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1579626362137-b6d68a1ebba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoaW5lc2UlMjBuZXclMjB5ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-[220px] w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1517009832553-cfcd067adf81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoaW5lc2UlMjBuZXclMjB5ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-[220px] w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1612201598945-f66a763965bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaW5lc2UlMjBuZXclMjB5ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Slider;
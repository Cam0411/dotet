import Header from "../component/header";
import AboutUsContent from "../component/aboutUsContent";
import Footer from "../component/footer";
import { Helmet } from 'react-helmet';
const AboutUs = () => {
    return (
        <div>
            <Helmet>
            <meta name="description" content="Chào mừng bạn đến với cửa hàng đồ trang trí Tết hàng đầu. Chúng tôi cung cấp lựa chọn đa dạng về lì xì, dây treo, quạt tết và nhiều sản phẩm trang trí Tết khác. Cam kết về uy tín và chất lượng. Hãy tạo một mùa Tết ấm áp và độc đáo với sản phẩm của chúng tôi." />
            <meta name="keywords" content="đồ trang trí tết,trang trí tết 2023 ,bao lì xì,decor tết,tiểu cảnh tết 2023 ,mẫu trang trí tết 2023,trang trí tết cổ truyền,quạt trang trí tết,Nội thất Tết,chuyên sĩ đồ tết" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Hà shop" />
            <meta name="og:title" content="Đồ Tết Chất Lượng Cao - Cửa Hàng Chúng Tôi" />
            <meta name="og:description" content="Chuyên Cung Cấp Sỉ Lì Xì, Dây Treo, và Dán Tường Đồ Trang Trí Tết Chất Lượng Cho Nhà Cửa và Văn Phòng - Hãy Liên Hệ Chúng Tôi Để Tạo Nên Một Mùa Tết Ấm Áp Và Độc Đáo! " />
            <meta name="og:image" content="https://ik.imagekit.io/39wvgoqre/daytreovietnammoi/S2/TP18.png?updatedAt=1699077237272" />
            <title>Chuyên Sỉ Đồ Trang Trí Tết, Đồ Decor Nhà Cửa và Văn Phòng</title>
            </Helmet>
            <Header />
            <AboutUsContent />
            <Footer />
        </div>
    )
}

export default AboutUs;
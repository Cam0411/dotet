import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import HomePage from "./page/homepage";
import CategoryPage from "./page/categorypage";
import PageDetail from "./page/pageDetail";
import SearchPage from "./page/searchPage";
import ErrorPage from "./page/ErrorPage";
import SaveProductPage from "./page/saveProductPage";
import AboutUs from "./page/aboutUsPage";
import './App.css';
import './style/scollBar.css'
function App() {
  return (
    <div className="App">
     
     <Router>

        <Routes>
          <Route exact path='/' element={<HomePage />}  />
          <Route exact path='/category/:slug' element={<CategoryPage />}  />
          <Route exact path='/product/:slug' element={<PageDetail />}  />
          <Route exact path='/search/:key' element={<SearchPage />}  />
          <Route exact path='/about-us' element={<AboutUs />}  />
          <Route exact path='/save-product' element={<SaveProductPage />}  />
          <Route exact path='/error' element={<ErrorPage />}  />
        </Routes>
      
      </Router>
  
    </div>
  );
}

export default App;

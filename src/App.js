import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import HomePage from "./page/homepage";
import CategoryPage from "./page/categorypage";
import PageDetail from "./page/pageDetail";
import SearchPage from "./page/searchPage";
import './App.css';
import './style/scollBar.css'
function App() {
  return (
    <div className="App">
     
     <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />}  />
          <Route exact path='/category/:slug' element={<CategoryPage />}  />
          <Route exact path='/:slug' element={<PageDetail />}  />
          <Route exact path='/search/:key' element={<SearchPage />}  />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;

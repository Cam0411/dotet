import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import HomePage from "./page/homepage";
import CategoryPage from "./page/categorypage";
import PageDetail from "./page/pageDetail";
import './App.css';

function App() {
  return (
    <div className="App">
     
     <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />}  />
          <Route exact path='/category/:slug' element={<CategoryPage />}  />
          <Route exact path='/:slug' element={<PageDetail />}  />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;

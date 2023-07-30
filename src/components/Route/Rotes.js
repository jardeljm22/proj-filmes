
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "../container/Header";
import Section  from '../container/section';
import Init from '../container/Init';
import '../../Style/Route.css';
import DescritionFilm from "../container/DescritionFilm";
import Series from '../pasta/Series';
import Procura from "../pasta/procurar";
import FS from '../container/Filme';

//import Filmes from '../pasta/filmes'

const Routers =()=>{

   
   // <Route  path="/filmes" element={<Filmes/>} />
   
    return (
        <>
        <Router>
            <Header className="teste" />    
            <Routes>
                <Route path="/procura/:id" element={<Procura/>} />
                <Route path="/exibir" element={<FS/>}/>
                <Route path="/series"  element={<Series/>} />
                <Route path='/' element={<Init/>} />
                <Route path="/header" element={<Header/>} />
                <Route path="section/:id/:id" element={<Section/>} />
                <Route path="descrition/:id/:tipo" element={<DescritionFilm/>} />
            </Routes>
        </Router>
        </>
    )
}

export default Routers;
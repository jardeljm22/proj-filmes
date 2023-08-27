
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "../container/Header";
import Section  from '../container/section';
import Init from '../container/Init';
import '../../Style/Route.css';
import DescritionFilm from "../container/DescritionFilm";
import Series from '../pasta/Series';
import Procura from "../pasta/procurar";
import FS from '../container/Filme';
import DescSeries from '../pasta/DescSeries'

//import Filmes from '../pasta/filmes'

const Routers =()=>{

   
   // <Route  path="/filmes" element={<Filmes/>} />
   
    return (
        <>
        <Router>
            <Header className="teste" />    
            <Routes>
                <Route path="exibir" element={<FS/>}/>
                <Route path="series"  element={<Series/>} />
                <Route path="series/DescSeries/:id"  element={<DescSeries/>} />
                <Route path='/' element={<Init/>} />
                <Route path="header" element={<Header/>} />
                <Route path="section" element={<Section/>} />
                <Route path="descrition/:id/:tipo" element={<DescritionFilm/>} />
                <Route path="procura/:id/descrition/:id/:tipo" element={<DescritionFilm/>} />
                <Route path="procura/:id" element={<Procura/>} />
                <Route path="*" element={<h1>rota nao enconrada</h1>} />
            </Routes>
        </Router>
        </>
    )
}

export default Routers;
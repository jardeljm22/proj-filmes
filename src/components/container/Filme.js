
import "../../Style/ArticleFilmes.css";
import "../../Style/Section.css";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import Api from '../api';

//{Filme}
const Filme = ()=>{

  const [filmes,setFilmes] = useState([]);
  const [pagina,setPagina] = useState(1);
  const  recebe = ()=>{
       Api.get(`movie/now_playing?api_key=3370043fbaa049df00d006e8129805cf&language=pt-br&page=${pagina}`).then(({data})=>{
      setFilmes(data.results);
    });
}

useEffect(()=>{
    recebe();
    },[pagina]);

const mudaPagina = ()=>{
  setPagina((p)=>p+1)
}
const voltaPagina = ()=>{
  setPagina((p)=>p-1)
}
    const urlImage = 'https://image.tmdb.org/t/p/original';
return(
    <>
      <section className="section containerS" >
          {filmes?.map((filme)=>{
            return(
              <Link className="link-section" key={filme.id}  to={`descrition/${filme.id}/movie`}>
                <article className="Article" >
                  <img className="imagem" src={`${urlImage}${filme.poster_path}`} alt='' />
                  {filme.title&&<p className="title-nome"> {filme.title}</p>}
                  {filme.release_date&&<p className="title-ano"> {filme.release_date.substring(0,4)}</p>}
                </article>
              </Link>
          )})} 
          <div className="pagina-atual">
              {pagina>1&&<button onClick={voltaPagina}>voltar</button> }
              <h3>{pagina}</h3> 
              <button onClick={mudaPagina}>próximo</button>
          </div>      
      </section>
    </>
    )
}

export default Filme;


import "../../Style/ArticleFilmes.css";
import Api from '../api';
import {useEffect, useState} from 'react';
import {useParams, Link } from "react-router-dom";
import "../../Style/Section.css";


const Procura =()=>{

  const key = '3370043fbaa049df00d006e8129805cf';
  const {id} = useParams();// nome do filme
  const [filmes,setFilmes] = useState([]);
  const [pagina,setPagina] = useState(1);

  const  recebe = ()=>{
    Api.get(`search/movie?api_key=${key}&query=${id}&language=pt-br&page=${pagina}`).then(({data})=>{
    setFilmes(data.results);
    });
}

  useEffect(()=>{
      recebe();
      },[recebe]);

  const mudaPagina = ()=>{
    setPagina(pagina+1)
  }
  const voltaPagina = ()=>{
    setPagina(pagina-1)
  }

    const urlImage = 'https://image.tmdb.org/t/p/original';
return(
    <div className="containerS">
      <section className="section" >
          {filmes?.map((filme)=>{
            return(
              <Link className="link-section" key={filme.id}  to={`descrition/${filme.id}/movie`}>
                <article className="Article" >
                  <img className="imagem" src={`${urlImage}${filme.poster_path}`} alt='' />
                  {filme.title&&<p className="title-nome"> {filme.title}</p>}
                  {filme.release_date&&<p className="title-ano"> {filme.release_date.substring(0,4)}</p>}
                  {filme.first_air_date&&<p className="title-ano"> {filme.first_air_date.substring(0,4)}</p>}
                </article>
              </Link>
          )})} 
          <div className="pagina-atual">
              {pagina>1&&<button onClick={voltaPagina}>voltar</button> }
              <h3>{pagina}</h3> 
              <button onClick={mudaPagina}> próximo  </button>
          </div>      
      </section>
    </div>
    )
}
export default Procura;
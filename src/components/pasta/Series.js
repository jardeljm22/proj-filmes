

import Api from '../api';
import {useEffect, useState} from 'react';
import "../../Style/Section.css";
import { Link } from "react-router-dom";

const Series = () => {

const key = '3370043fbaa049df00d006e8129805cf';
const [fil,SetFil] = useState([]);
const urlImage = 'https://image.tmdb.org/t/p/original';
const [pagina,setPagina] = useState(1);


useEffect(()=>{ 
 
  Api.get(`tv/top_rated?api_key=${key}&language=pt-br&page=${pagina}`).then(({data})=>{
    SetFil(data.results);
    if(data.results){
      console.log('series on : ',fil)
    }
  });
    },[pagina]);

    const mudaPagina = ()=>{
      setPagina(pagina+1)
    }
    const voltaPagina = ()=>{
      setPagina(pagina-1)
    }
  

  return (
      <div className="containerS">
        <section className="section" >
          {fil?.map((serie)=>{
            return(
              <Link className="link-section" key={serie.id}  to={`DescSeries/${serie.id}`}>
                <article className="Article" >
                  <img className="imagem" src={`${urlImage}${serie.poster_path}`} alt='' />
                  {serie.name&&<p className="title-nome"> {serie.name}</p>}
                  {serie.first_air_date&&<p className="title-ano"> {serie.first_air_date.substring(0,4)}</p>}
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

export default Series;
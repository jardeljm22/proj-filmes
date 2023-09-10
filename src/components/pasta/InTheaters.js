
import Api from '../api';
import {useEffect, useState} from 'react';
import "../../Style/InTheaters.css";
import { Link } from "react-router-dom";

const InTheaters=({url,text,link,route,tipo})=>{
  const key = '3370043fbaa049df00d006e8129805cf';
  const [filmes,SetFilmes] = useState([]);
  const urlImage = 'https://image.tmdb.org/t/p/original';
  useEffect(()=>{

      Api.get(`${url}?api_key=${key}&language=pt-br`).then(({data})=>{
        SetFilmes(data.results)
        }
      )  
     
   },[url]);

    return (
      <div className="cont-fimPop">
        <div className='title-cont-int'>
          <Link className="title" to={`/${route}`}  >{text} </Link>
        </div>
        <div className="container-filmePop">
              {tipo==='movie'?filmes?.map((filme)=>{
                return(
                  <Link className="link-filmPop" key={filme.id}  to={`${link}/${filme.id}/${tipo}`}>
                    <div className="div-filmPop">
                      <img className="imagem-filmPop" src={`${urlImage}${filme.poster_path}`} alt='' />
                      <p className="title-filmPop"> {filme.title}</p> 
                      <p className="ano-filmPop"> {filme.release_date.substring(0,4)}</p>
                    </div>                
                  </Link>
                    )
                  }
                )
                : filmes?.map((serie)=>{
                  return(
                    <Link className="link-filmPop" key={serie.id}  to={`series/DescSeries/${serie.id}`}>
                      <div className="div-filmPop">
                          <img className="imagem-filmPop" src={`${urlImage}${serie.poster_path}`} alt='' />
                          <p className="title-filmPop"> {serie.name}</p> 
                          <p className="ano-filmPop"> {serie.first_air_date.substring(0,4)}</p>
                      </div>                
                    </Link>
                    )
                  }
                )
              }
        </div>
      </div>     
    )
 }
  
export default InTheaters;

import Api from '../api';
import {useEffect, useState} from 'react';
import "../../Style/InTheaters.css";
import { Link } from "react-router-dom";

const InTheaters=({url,text,link,tipo})=>{
  const key = '3370043fbaa049df00d006e8129805cf';
  const [filmes,SetFilmes] = useState([]);
  const urlImage = 'https://image.tmdb.org/t/p/original';
  //const [alt,setalt] = useState([]);
  useEffect(()=>{

      Api.get(`${url}?api_key=${key}&language=pt-br`).then(({data})=>{
        SetFilmes(data.results)
        }
      )  
      /*if(alt){
        alt.sort(function(a,b){
          if(a.release_date){
            return b.release_date.substring(0,4) - a.release_date.substring(0,4);
           }else{
             return b.first_air_date.substring(0,4) - a.first_air_date.substring(0,4);
           }
        })
        SetFilmes(alt);
     } */
     
   },[url]);

    return (
      <div className="cont-fimPop">
        <div className='title-cont-int'>
          <Link className="title" to={`${link}/${tipo}/${tipo}`}  >{text} </Link>
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
                : filmes?.map((filme)=>{
                  return(
                    <Link className="link-filmPop" key={filme.id}  to={`descrition/${filme.id}/${tipo}`}>
                      <div className="div-filmPop">
                          <img className="imagem-filmPop" src={`${urlImage}${filme.poster_path}`} alt='' />
                          <p className="title-filmPop"> {filme.name}</p> 
                          <p className="ano-filmPop"> {filme.first_air_date.substring(0,4)}</p>
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
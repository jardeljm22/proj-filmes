

import Article from "../container/ArticleFilmes";
import Api from '../api';
import {useEffect, useState} from 'react';
import "../../Style/Section.css";
import { Link } from "react-router-dom";

const teste =()=>{

const key = '3370043fbaa049df00d006e8129805cf';
const [fil,SetFil] = useState([]);

useEffect(()=>{ 
 
  Api.get(`/movie/now_playing?api_key=${key}&language=pt-br&page=1`).then(({data})=>{
    SetFil(data.results);
  });
    },[]);

  return (
      <div className="containerS">
        <section className="section" >
          {fil?.map((filme)=>{
            return(
            <Link className="link-section" key={filme.id}  to={`/descrition/${filme.id}/movie`}>
              <Article className="cont-filmes" filme={filme} />
              </Link>
       )})}       
        </section>
      </div>
    )
  }

export default teste;
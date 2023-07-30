

import Filmes from "../container/Filme";
import Api from '../api';
import {useEffect, useState} from 'react';
import "../../Style/Section.css";
import { Link } from "react-router-dom";

const Series=()=>{

const key = '3370043fbaa049df00d006e8129805cf';
const [fil,SetFil] = useState([]);

useEffect(()=>{ 
 
  Api.get(`tv/top_rated?api_key=${key}&language=pt-br&page=1`).then(({data})=>{
    SetFil(data.results);
    console.log(data.results);
  });
    },[]);

  return (
      <div className="containerS">
        <section className="section" >
          {fil?.map((filme)=>{
            return(
            <Link className="link-section" key={filme.id}  to={`/descrition/${filme.id}`}>
              <Filmes className="cont-filmes" filme={filme} />
              </Link>
       )})}       
        </section>
      </div>
    )
  }

export default Series;
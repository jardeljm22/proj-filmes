

import Filme from "./Filme";
import Api from '../api';
import {useEffect, useState} from 'react';
import "../../Style/Section.css";
import { useParams,Link } from "react-router-dom";

const Section=()=>{

const key = '3370043fbaa049df00d006e8129805cf';
const linSearh = "search";

const [fil,SetFil] = useState([]);

useEffect(()=>{ 


  Api.get(`movie/now_playing?api_key=3370043fbaa049df00d006e8129805cf&language=pt-br`).then(({data})=>{
    SetFil(data.results);
    console.log(data.results);
    console.log('section ativo')
  });
    },[]);

  return (
      <div className="containerS">
        <section className="section" >
          {fil?.map((filme)=>{
            return(
            <Link className="link-section" key={filme.id}  to={`/descrition/${filme.id}/${'movie'}`}>
              <Filme className="cont-filmes" filme={filme} />
              </Link>
       )})}       
        </section>
      </div>
    )
  }

export default Section;
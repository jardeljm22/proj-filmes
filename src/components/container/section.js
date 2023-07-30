

import Filme from "./Filme";
import Api from '../api';
import {useEffect, useState} from 'react';
import "../../Style/Section.css";
import { useParams,Link } from "react-router-dom";

const Section=()=>{

const key = 'k_t10igpqo';
const linSearh = "search";
const {id1,id2} = useParams();
const [fil,SetFil] = useState([]);

useEffect(()=>{ 
  //let nome  = `${id}`;

  Api.get(`${linSearh}/${id1}?api_key=${key}&query=${id2}`).then(({data})=>{
    SetFil(data.results);
    console.log(data.results);
  });
    },[id1,id2]);

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
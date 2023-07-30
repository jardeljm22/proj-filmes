

import Filmes from "../container/Filme";
import Api from '../api';
import {useEffect, useState} from 'react';
import "../../Style/Section.css";
import {useParams, Link } from "react-router-dom";

const Procura =()=>{

const key = '3370043fbaa049df00d006e8129805cf';
const [series,setseries] = useState([]);
const [filmes,setfilmes] = useState([]);
const {id} = useParams();

 const  recebe = ()=>{

    Api.get(`search/tv?api_key=${key}&query=${id}&language=pt-br`).then(({data})=>{
      setseries(data.results);
        console.log(data.results)
    });
     Api.get(`search/movie?api_key=${key}&query=${id}&language=pt-br`).then(({data})=>{
      setfilmes(data.results);
        console.log(data.results)
    });
}

useEffect(()=>{
    recebe();
    },[id]);

  return (
      <div className="containerS">
        <section className="section" >
          {filmes?.map((filme)=>{
            return(
            <Link className="link-section" key={filme.id}  to={`/descrition/${filme.id}/${'movie'}`}>
              <Filmes className="cont-filmes" filme={filme} />
            </Link>
       )})
        }
        {series?.map((filme)=>{
            return(
            <Link className="link-section" key={filme.id}  to={`/descrition/${filme.id}/${'tv'}`}>
              <Filmes className="cont-filmes" filme={filme} />
              </Link>
       )})
        }
        </section>
      </div>
    )
  }

export default Procura;
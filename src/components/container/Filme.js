
import "../../Style/ArticleFilmes.css";
import "../../Style/Section.css";
import { Link } from "react-router-dom";
//import { useState,useEffect } from "react";
//import Api from '../api';


const Filme = ({filme})=>{

    const urlImage = 'https://image.tmdb.org/t/p/original';
    document.body.style.backgroundColor = "rgb(1, 2, 40)";
return(
    <>
      <section className="section" >
          {filme?.map((filme)=>{
            return(
              <Link className="link-section" key={filme.id}  to={`descrition/${filme.id}/movie`}>
                <article className="Article" >
                  <img className="imagem" src={`${urlImage}${filme.poster_path}`} alt='' />
                  {filme.title?<p className="title-nome"> {filme.title}</p>:<></>}
                  {filme.release_date?<p className="title-ano"> {filme.release_date.substring(0,4)}</p>:<></>}
                  {filme.first_air_date?<p className="title-ano"> {filme.first_air_date.substring(0,4)}</p>:<></>}
                </article>
              </Link>
          )})}       
      </section>
    </>
    )
}

export default Filme;


import "../../Style/ArticleFilmes.css";
import "../../Style/Section.css";
import { Link } from "react-router-dom";
//import { useState,useEffect } from "react";
//import Api from '../api';


const Filme = ()=>{


//const key = '3370043fbaa049df00d006e8129805cf';
//const linSearh = "now_playing";
//const procura = 'a baleia'
//const [filmes,SetFilmes] = useState([]);

//useEffect(()=>{
  //let nome  = `${id}`;
  //let teste = `movie/${linSearh}/api_key=${key}`;
  //console.log(teste);
  //Api.get(`movie/popular?api_key=${key}&language=pt-br`).then(({data})=>{

  //Api.get(`movie/now_playing?api_key=3370043fbaa049df00d006e8129805cf&language=pt-br`).then(({data})=>{
 
  //Api.get(`Search/movie/?api_key=${key}&query=${linSearh}&language=pt-br`).then(({data})=>{
          //SetFilmes(data.results);
          //console.log('resultado',data.results);
        //}
      //)

 //},[]);

    const urlImage = 'https://image.tmdb.org/t/p/original';
    //const cam_img = filme.poster_path;
    document.body.style.backgroundColor = "rgb(1, 2, 40)";
//filme.overview?<p>{filme.overview}</p>:<></>
            //filme.name?<p className="title-nome"> {filme.name}</p>:<></>  
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

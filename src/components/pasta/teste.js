
import "../../Style/ArticleFilmes.css";
import "../../Style/Section.css";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import Api from '../api';

//{Filme}
const Filme = ()=>{

  const [filmes,setFilmes] = useState([]);
  const [pagina,setPagina] = useState(1);
  const  recebe = ()=>{
    //Api.get(`search/tv?api_key=${key}&query=${id}&language=pt-br`).then(({data})=>{
    // setseries(data.results);
        //console.log(data.results)
    //});
    //search/movie?api_key=${key}&query=${id}&language=pt-br
    Api.get(`movie/now_playing?api_key=3370043fbaa049df00d006e8129805cf&language=pt-br&page=${pagina}`).then(({data})=>{
      setFilmes(data.results);
        console.log(data.results)
    });
}

useEffect(()=>{
    recebe();
    },[]);




    const urlImage = 'https://image.tmdb.org/t/p/original';
    document.body.style.backgroundColor = "rgb(1, 2, 40)";
return(
    <>
      <section className="section" >
          {filmes?.map((filme)=>{
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

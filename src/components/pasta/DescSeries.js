import  '../../Style/DescritionFilm.css';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Api from '../api';


const DSeries = () =>{

    const {id} = useParams();
    const [dados,setDados] = useState()
    const urlImage = 'https://image.tmdb.org/t/p/original';
    const [numTemporada,setNumTemporada] = useState(0);
    const [numEpsodios,setnumEpsodios] = useState(0)
    useEffect(()=>{
        Api.get(`tv/${id}?api_key=3370043fbaa049df00d006e8129805cf&language=pt-br`).then(dadosS=>{
            setDados(dadosS.data);
            setNumTemporada(dadosS.data.number_of_seasons)
            setnumEpsodios(dadosS.data.number_of_episodes);
            console.log(numEpsodios,numTemporada)
        })
    },[]);
    /* */

    return(
        <div>
            <h1 className='ano'> fora de ar no momento.</h1>
            {/**{dados&&<article className='containerD'>
                <div className='contD' >
                    <p className='title-description center' >{dados.name}</p>
                    <br/>
                    <br></br>
                    <p className='ano'><span>{dados.first_air_date.substring(0,4)} </span></p>
                    <br ></br>
                    <div className='genero'>
                        {dados.genres.map(id1=>{
                            return <p className='gen' key={id1.id}>-&nbsp;{id1.name}&nbsp;</p>
                    })}
                    </div>
                    <br/>
                    <div className='p'>
                        <div className='votos' >
                            <strong>IMDB&nbsp;&nbsp;-&nbsp;&nbsp;</strong>
                            <h3>{dados.vote_count} votos</h3>
                        </div>
                        <div className='votos left'>
                            <strong>  {dados.vote_average.toString().substring(0,3)} / 10</strong>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className='inform' >
                        <strong>resumo </strong>
                        <br></br>
                        <p className='desc color' >{dados.overview}</p>
                    </div> 
                    <div className='info-temps'>
                        <div className='TotalTemporadas  colort'>
                            <strong>total de temporadas <p> {numTemporada} </p> </strong>
                        </div>
                        <div className='TotalTemporadas colort' >
                            <strong> total de epsoódios <p> {numEpsodios} </p> </strong>
                        </div>
                        <div>
                            
                                <br></br>
                                
                            
                        </div>
                    </div>
                </div>
                <div>
                    <img className='img'  alt="" src={`${urlImage}${dados.poster_path}`} />
                </div>
            </article>}*/}
        </div>
    )
}

export default DSeries;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../api';
import  '../../Style/DescritionFilm.css';
import DSeries from '../pasta/DescSeries';
import Filme from '../pasta/DescFilmes';

const DescritionFilm = ()=>{
    const {id,tipo}= useParams();
    const [dadosFilme,setDadosFilme] = useState();
    const urlImage = 'https://image.tmdb.org/t/p/original';
    const [imdb,setimdb]=useState('');
    const key = '3370043fbaa049df00d006e8129805cf';

    useEffect(()=>{
        Api.get(`/${tipo}/${id}?api_key=${key}&language=pt-br`).then((dados)=>{
            setDadosFilme(dados.data);
            setimdb(dados.data.imdb_id);
        })
    },[id,tipo]);

    return (
        <>   
            <div style={dadosFilme&&{marginTop:'-20px',padding:'10px',backgroundImage:`url(https://image.tmdb.org/t/p/original/${dadosFilme.backdrop_path})`}} >
                {dadosFilme?
                    tipo==='movie'?
                        <Filme imdb={imdb} urlImage={urlImage} dados={dadosFilme} />
                        :
                        <div >
                            <div>
                                <button className='button'  >fechar</button>
                                {
                                    <iframe src={`https://superflixapi.link/filme/${dadosFilme.imdb_id}`} width="90%" title={`${dadosFilme.imdb_id}`} height='800'  allowFullScreen={true} scrolling="no" frameBorder="0"></iframe>
                                }
                            </div>
                            <DSeries serie={dadosFilme} Image={urlImage}  ></DSeries>
                        </div>
                :<></>}
            </div>
        </>
    )
}

export default DescritionFilm;

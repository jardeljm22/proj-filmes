
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
    const [Erro,seterro]= useState(false)
    useEffect(()=>{
        console.log('id ;',id,tipo)
        Api.get(`/${tipo}/${id}?api_key=${key}&language=pt-br`).then((dados)=>{
            console.log(`/${tipo}/${id}?api_key=${key}&language=pt-br`);
            console.log(dados.data);
            setDadosFilme(dados.data);
            setimdb(dados.data.imdb_id);

        }).catch((error)=>{
            seterro(!Erro);
        })
        // require para pegar o id do tmdb para poder enviar iframe do warezcdn
         },[]);

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
                                    <iframe src={`https://embed.warezcdn.com/filme/${dadosFilme.imdb_id}`} width="90%" title='ola' height='800'  allowFullScreen={true} scrolling="no" frameBorder="0"></iframe>
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

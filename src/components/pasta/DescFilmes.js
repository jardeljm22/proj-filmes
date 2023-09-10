import  '../../Style/DescritionFilm.css';
import { useState } from 'react';

const DFilmes = ({imdb,urlImage,dados})=>{
    const [assistir,setAssistir] = useState(false);
    const Clicou = ()=>{
        setAssistir(!assistir)
        console.log(assistir)
        console.log('clicou')
        }

    return( 
        <div className='desc-princ' id='esc-princ' >
        <article className='containerD'>
            <div className='contD' >
                <p className='title-description center' >{dados.title}</p>
                <br/>
                <br></br>
                    <br></br>
                    <p className='ano'><span>{dados.release_date.substring(0,4)}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{dados.runtime}&nbsp;minutos </span></p>
                    <br></br>
                    <div className='genero'>
                        {dados.genres.map(id1=>{
                            if (id1.name ==='Ação'){
                                return <p className='gen' key={id1.id}>-&nbsp;Ação&nbsp;</p>
                            }else if(id1.name ==='Thriller'){
                            return ;
                            }else{
                                return <p className='gen' key={id1.id}>-&nbsp; {id1.name}&nbsp;</p>
                            }
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
                </div>
                <div className='img-filme' onClick={Clicou}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"  />
                    </svg>
                    <img className='img'  alt="" src={`${urlImage}${dados.poster_path}`} />
                </div>
            </article>
            <div className={`iframe ${assistir&&'visivel'}`}  >
                <button className='button' onClick={Clicou} >fechar</button>
                {
                    assistir&&<iframe src={`https://embed.warezcdn.com/filme/${imdb}`} width="90%"  height='800'  allowFullScreen={true} scrolling="no" frameBorder="0"></iframe>
                }
            </div>
        </div>
    )
}
export default DFilmes ;
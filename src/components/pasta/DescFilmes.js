
import  '../../Style/DescritionFilm.css';
import { useState,useEffect } from 'react';

const DFilmes = ({imdb,urlImage,dados})=>{

   // const [dados_filme,setDadosFilme ]= useState();
    const [assistir,setAssistir] = useState(false);
    

    const Clicou = ()=>{
        setAssistir(!assistir)
        console.log(assistir)
        console.log('clicou')
        }
    useEffect (() =>{
        console.log('filme dados filme',dados)
    },[]);

    return(
       
        <div className='desc-princ' id='esc-princ' >

        <div className={`iframe ${assistir?'visivel' : ''}`}  >
                <button className='button' onClick={Clicou} >fechar</button>
                {
                    assistir&&<iframe src={`https://embed.warezcdn.com/filme/${imdb}`} width="90%"  height='800'  allowFullScreen={true} scrolling="no" frameBorder="0"></iframe>
                }
            </div>
        <article className='containerD'>
            
            <div className='contD' >
                <p className='title-description center' >{dados.title}</p>
                <br/>
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
            <div>
                <img className='img' onClick={Clicou} alt="" src={`${urlImage}${dados.poster_path}`} />
            </div>
        </article>
    </div>
    )
}
export default DFilmes ;
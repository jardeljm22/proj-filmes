import  '../../Style/DescritionFilm.css';


const DSeries = (serie,Image,click) =>{

    return(
        <div>
            <article className='containerD'>
                <div className='contD' >
                    <p className='title-description center' >{serie.title}</p>
                    <br/>
                    <br></br>
                    <p className='ano'><span>{serie.release_date.substring(0,4)}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{serie.runtime}&nbsp;minutos </span></p>
                    <br ></br>
                    <div className='genero'>
                        {serie.genres.map(id1=>{
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
                            <h3>{serie.vote_count} votos</h3>
                        </div>
                        <div className='votos left'>
                            <strong>  {serie.vote_average.toString().substring(0,3)} / 10</strong>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className='inform' >
                        <strong>resumo </strong>
                        <br></br>
                        <p className='desc color' >{serie.overview}</p>
                    </div>                          
                </div>
                <div>
                    <img className='img' onClick={click} alt="" src={`${Image}${serie.poster_path}`} />
                </div>
            </article>
        </div>
    )
}

export default DSeries;


import '../../Style/temporadas.css';


const Temporadas = ({idT,temp})=>{


    const epsodios =  (a) =>{
        let b = [];
        for(let i = 0 ; i<a;i++){
            b.push(i)
        }
       return b;
    }

    let a = [];

    return (
        <div>
            {
                temp.seasons.map((t,c)=>{
                    <ul className='temporadas'>
                        <li key={c} >{c+1} temporada</li>
                        { a = epsodios(t.episode_count)}
                        {console.log(temp)}
                        <select>
                            {a.map((item)=>{
                                return <option>{item+1} epsodio</option>
                            })}
                        </select>
                    </ul>
                })
            }
        </div>

    )
}

export default Temporadas;
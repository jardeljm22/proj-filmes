

import "../../Style/Section.css";
import InTheaters from "../pasta/InTheaters";
import Series from '../pasta/Series';
import Filme from "./Filme";

const Init = () =>{



    return (
      <div className="containerS">
        <InTheaters  url='movie/now_playing' text="Filmes Recentes" tipo='movie' link="descrition"/>
        <InTheaters  url='tv/top_rated' text="Melhores Séries" tipo='tv' link="" />
        <Filme className="cont-filmes"  />
      </div>
    )
}

export default Init;


import {useEffect, useState} from 'react';
import "../../Style/Section.css";
import InTheaters from "../pasta/InTheaters";
import Filme from  '../container/Filme'

const Init = () =>{


        //
    return (
      <div className="containerS">
        <InTheaters  url='movie/now_playing' text="filmes Recentes" tipo='movie' link="descrition"/>
        <InTheaters  url='tv/top_rated' text="melhores Séries" tipo='tv' link="" />
        <Filme className="cont-filmes"  />
      </div>
    )
}

export default Init;
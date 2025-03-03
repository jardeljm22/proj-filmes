import '../../Style/Header.css';
import {Link,useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();// useNavigate para chamar as rotas
    const {register,handleSubmit,reset} = useForm();//useForm hook para trabalhar com formularios no react
    const [navibar,setNavibar] = useState('false');
    const [menu,setMenu] = useState('false');

    const menuOn = () =>{
        setMenu(!menu);
    }
    const pegar=(e) =>{
        console.log(e.nome)
        navigate(`/procura/${e.nome}`);
        reset()
    }
    const navibarOn = () =>{
        setNavibar(!navibar);
    }
    return(
        <div>
            <header className='header'>
                <div className='logo-form'> 
                    <Link to='/' className='logo' >
                    <p>
                         CineElite
                    </p>
                    </Link>
                    <form className='pesquisar' onSubmit={handleSubmit(pegar)} >
                        <input type='text' {...register("nome")} placeholder='pesquisar' />
                        <button type='submit' >
                            <svg className='lupa' xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
                        </button>
                    </form>
                </div>
                <nav className='nav' >
                    <Link className='link' to='/'>Lançamentos</Link>
                    <Link className='link' to='/'>categorias</Link>
                    <Link className='link' to='/exibir'>filmes</Link>
                    <Link className='link' to='/series'>Séries</Link>
                </nav>
                
                <div className='side-bar' onClick={navibarOn} >

                <svg className='botMenu' onClick={menuOn} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
                <div className={menu&&('menuOf')||('menu')}>
                    <svg onClick={menuOn} className='svgClose' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm175 79c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                    <Link className='link2' to='/'>Lançamentos</Link>
                    <Link className='link2' to='/'>categorias</Link>
                    <Link className='link2' to='/exibir'>filmes</Link>
                    <Link className='link2' to='/series'>Séries</Link>
                </div>                   
            </header>
        </div>
    )
}
export default Header;
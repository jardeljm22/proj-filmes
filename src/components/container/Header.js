import '../../Style/Header.css';
import {Link,useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

const Header = () => {
    const navigate = useNavigate();// useNavigate para trabalhar chamar as rotas
    const {register,handleSubmit,reset} = useForm();//useForm hook para trabalhar com formularios no react
    const pegar=(e)=>{
        console.log(e.nome)
        navigate(`/procura/${e.nome}`);
        reset()
    }
    return(
        <div>
            <svg className='sidebar'> 
            </svg>
            <header className='header'>
                <Link to='/' >
                    <h1 className='logo' >
                    Cineverse
                    
                    </h1>
                </Link>
                <form className='pesquisar' onSubmit={handleSubmit(pegar)} >
                    <input type='text' {...register("nome")} placeholder='pesquisar' />
                    <button type='submit' >
                        <svg className='lupa' xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
                    </button>
                </form>
                <nav className='nav'>
                    <Link className='link' to='/'>Lançamentos</Link>
                    <Link className='link' to='/exibir'>filmes</Link>
                    <Link className='link' to='/series'>Séries</Link>
                </nav>                   
            </header>
        </div>
    )
}
export default Header;
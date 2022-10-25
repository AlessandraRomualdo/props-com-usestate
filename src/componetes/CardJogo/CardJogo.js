import './estilo.css';
import imagemDayZ from '../../assets/dayz.jpg';
import imagemRust from '../../assets/Rust.jpg';

export default function CardJogo(props){
    return(
        <div id='CardJogo'>
          <img src={props.nomeJogo === 'DayZ'? imagemDayZ : imagemRust} alt="Jogo"/>
        </div>
    );
}
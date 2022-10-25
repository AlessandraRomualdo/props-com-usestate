import './estilo.css'
export default function CardInformacao(props){

    let informacaoDayZ = "Jogo de sobrevivência e multijogador. Uma terra arrasada por zumbis infectados,onde você compete com outros sobreviventes por recursos limitados. Você vai ajudar estranhos em sua luta? Ou evitará traições como um lobo solitário? Esse é o DayZ. Essa é a sua história.";
    let nomeDayZ = "DayZ";
    let informacaoRust = "Jogo de sobrevivência e multijogador. O único objetivo em Rust é sobreviver. Tudo quer que você morra, a vida selvagem da ilha e outros habitantes, o meio ambiente, outros sobreviventes. Faça o que for preciso para durar mais uma noite.";
    let nomeRust = "Rust";

    return(
        <div className='CardInformacao'>
        <h3>Informação sobre o {props.nomeJogo === 'DayZ'? nomeDayZ : nomeRust} </h3>
        <p>{props.nomeJogo ==='DayZ' ? informacaoDayZ : informacaoRust}</p>
      </div>
    );
}
import { ContainerMain } from "./Styles";
import { FaPlay } from "react-icons/fa";
import Papic  from "../../Assets/cartaz.jpg"

export function Main () {
    return (
        <>
        <ContainerMain> 
            <div className='infos'>

                <h3>Satoshi Kon</h3>

                <h1>PAPRIKA</h1>

                <p>Num futuro próximo, um novo tratamento psicoterapêutico chamado "sonho revolucionário" foi inventado. Um dispositivo chamado de "DC Mini" permite ao usuário visualizar os sonhos das pessoas. A doutora Atsuko Chiba, começa a usar a máquina ilegalmente para ajudar os pacientes psiquiátricos fora do centro de pesquisa.</p>

                <div className="btns">
                    <div className="movie">
                        <p><FaPlay/> Assistir agora</p>
                    </div>
                    
                    <div className="trailer">
                        <p>Assistir o trailer</p>
                    </div>
                </div>
            </div>
                
            <div className='image'>
                <img src={Papic} alt='aki' />
            </div>
        </ContainerMain>
        </>
    )
}
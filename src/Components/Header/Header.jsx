import { Container } from "./Styles";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { RiAncientPavilionFill } from "react-icons/ri";


export function Header () {
    return (
        <>
        <Container> 
            <div>
                <div className="logo">
                <a href="/"><RiAncientPavilionFill color="white" size="40px" > </RiAncientPavilionFill></a>
                </div>
                

                <div className="social-icons">
                    <a href="/"><FiFacebook ></FiFacebook></a>
                    <a href="/"><FiInstagram ></FiInstagram></a>
                    <a href="/"><FiTwitter ></FiTwitter></a>
                    <a href="/"><FiYoutube ></FiYoutube></a>

                </div>
            </div>    
        
        </Container>
        </>
    )
}
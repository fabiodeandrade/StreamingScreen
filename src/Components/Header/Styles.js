import styled from "styled-components"


export const Container = styled.section`

    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
       
    align-items: center;

           
    div {
        color: green;
        background-color: transp;
        width: 60vw;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        

    &.social-icons {
            
            width: 20%;
            height: 20%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                margin: 0 10px;
                color: rgba(255, 255, 255, .8);
                font-size: 20px;      
                        
                
                
            }
 
        }
           
    }

    h1 {
        color: white;
        font-size: 1rem;
    }

    

`
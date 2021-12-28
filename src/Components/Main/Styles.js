import styled from 'styled-components'




export const ContainerMain = styled.section`
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    height: 84.6vh;
    padding: 5rem 5rem;
    background-color: transparent;
    
    

    div {
         
         padding: .5rem;    
         
       
        &.infos {
            background-color: transparent;
            width: 40%;
            margin-right: 7rem;
            

            h1 {
                font-size: 3rem;
                margin-bottom: .3rem;
                color: white;
            }

            p {
                color: white;
                margin-bottom: .8rem;
                letter-spacing: .1rem;
                font-size: .7rem;
                text-align: left;

            }

            h3 {
                color: white;
                margin-bottom: .5rem;
            }
        }

        &.btns {
            width: 100%      
            height: 5rem;  
            display: flex;
            flex-flow: row wrap;
            padding: 0;        
            margin-top: 1.2rem;  
            margin-bottom: 1rem;

           
        }

        &.movie {
                background-color: rgba(1, 1, 1, 0.4);
                width: 30%;
                height: 2rem;
                margin-right: .8rem;
                border-radius: 1rem 0 1rem 0;
                border: 1px solid white;
            }

        &.trailer {
                background-color: transparent;
                width: 30%;
                height: 2rem;
                border-radius: 1rem 0 1rem 0;
                border: 1px solid white;
            }

        &.image {
            background-color: transparent transparent transparent;
            overflow: hidden;    
            display: flex;
            width: 220px;
            height: 300px;
            
            justify-content: center;
            align-items: center;
            border: 1px solid white;
            border-radius: 10px;
            box-shadow: 1px 1px 20px 10px rgba(255, 255, 255, 0.1);
                        

            img {
                width: 220px;      
             
                margin-top: 1rem;
                border-radius: 10px;
                transition: all 2s;

                &:hover {
                    transform: scale(1.1);
                }               
            }

            

        }    
    }
    
`
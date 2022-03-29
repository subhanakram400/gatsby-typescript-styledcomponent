
import styled from 'styled-components'

// this props is for style component type , you can pass props and add in this 
interface Props {
     fontSize:string,
     color:string
   
  }

  
const Text:any = styled.p`
 
color:#FFFFFF;
font-size: ${(props:Props)=>props.fontSize ? props.fontSize  : "1.1em"};
opacity:1;

font-weight:bold;

font-family:Roc Grotesk;




`
const Title:any = styled.p`
 
font-size:4.5rem;
opacity:1;

font-weight:bold;
color: ${(props:Props)=>props.color ? props.color  : "#FFFFFF"};
font-size:4.5rem;
font-family:Roc Grotesk;



`


export const TextComponent={
     Text,
     Title

}






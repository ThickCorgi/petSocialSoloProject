import PetOftheMonth from "../PetOftheMonth.js"
import RandomPic from "./RandomPic.js"

export default function IndexPage(){
    return(
        <div>
        <RandomPic />
        <RandomPic />
        <RandomPic />
       
        
        <PetOftheMonth/>
        <PetOftheMonth/>
        </div> 
    )
}
import React,{useState} from "react"
import { AiFillFolderAdd,AiTwotoneRest,AiFillCloseSquare } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

export const Main = () => {

  const [data, setdata] = useState("");
    const [item, setitem] = useState([]);
     function add(){
        if(!data){
                    }
        else{
        setitem(...item,[data])
        setdata("")
        }
        
      }
    function del(id){
        const remitems = item.filter((elem, ind) =>{

            return ind!== id;
        }

        )
            setitem(remitems);
    }
    function remove(){
        setitem([]);

    }
  return (
    <div>
      <div className="to">
                <input type="text" placeholder="Enter your task here......"
                     vale = {data}
                    onChange= {(e)=> setdata(e.target.value)}
                />
                    <ul className="in" onClick= {add}> <AiFillFolderAdd /> </ul>
            </div>
            <div className="t" >
                
                {
                item.map((elem, ind) => {
                    
                    return (
                        <div className="eit" key = {ind}>
                        <h3>{elem}</h3> 
                       <li className="ca" onClick={() =>del(ind)}> 
                            <AiTwotoneRest /> 
                            
                        </li>
                        <BsFillPencilFill/>
            </div>
                        )

                    })
                }
                
                
            </div>
            <div className="de">
                <button className="bt" onClick={remove}>Remove all the items <AiFillCloseSquare /></button>
            </div>
                
            
        </div>
  )
}
export default Main;

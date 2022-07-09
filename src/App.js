// // // // import logo from './logo.svg';
// // // // import './App.css';

// // // // function App() {
// // // //   return (
       
// // // // //     <div className="App">
// // // // //       <header className="App-header">
               
// // // // //         <p>
// // // // //           Edit <code>src/App.js</code> and save to reload.
// // // // //         </p>
// // // // //         <h1> Funfact of react</h1>
// // // // //         <ul>
// // // // //           <li> easy to learn</li>
// // // // //           <li> best performance</li>
// // // // //           <li> fast</li>
// // // // //         </ul>
// // // // //         <a
// // // // //           className="App-link"
// // // // //           href="https://reactjs.org"
// // // // //           target="_blank"
// // // // //           rel="noopener noreferrer"
// // // // //         >
// // // // //           Learn React
// // // // //         </a>
// // // // //       </header>
// // // // //     </div>
// // // //     <div>
// // // //       < navbar className="head">
// // // //         <h1 className =" he"> ReactFun</h1>
// // // //         <h4 className = "he4"> React course Project</h4>
// // // //       </navbar>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;
// // // <div> 
// // //   <>
// // //   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
// // //   </>
// // // </div>
// // import './App.css';
// // function Card(){
// //   return(
// //     <div>
// //       <head className="f">
// //         <Card.Img variant="top" src="holder.js/100px180" />
// //           <Card.Body className = "full">
// //             <Card.Title>Card Title</Card.Title>
// //             <Card.Text>
// //               Some quick example text to build on the card title and make up the bulk of
// //               the card's content.
// //             </Card.Text>
// //             <button variant="primary">Go somewhere</button>
      
            
// //           </Card.Body>
// //           </head>
// //     </div>
// //   )
// // }
// // export default Card;


import React,{useState} from "react"
// import { AiFillFolderAdd,AiTwotoneRest,AiFillCloseSquare } from "react-icons/ai";
// import { BsFillPencilFill } from "react-icons/bs";
import Navbar from"./Component/Navbar";
import Main from"./Component/Main";



import './App.css';

export default function App() {
    // const [data, setdata] = useState("");
    // const [item, setitem] = useState([]);
    //  function add(){
    //     if(!data){
    //                 }
    //     else{
    //     setitem(...item,[data])
    //     setdata("")
    //     }
        
    //   }
    // function del(id){
    //     const remitems = item.filter((elem, ind) =>{

    //         return ind!== id;
    //     }

    //     )
    //         setitem(remitems);
    // }
    // function remove(){
    //     setitem([]);

    // }
    
    return (

        <div>
            < Navbar />
            < Main />
             {/* <button className="to" onClick={add}> Enter your task here? </button> */}
            {/* <div className="to">
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
                
            
        </div> */}
        </div>
    )
}
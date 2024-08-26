function Tip(props){
     return( <div className = "tip">
        {<img src = {props.image}/> }
       <div className = "group">
            <h3>{props.topic}</h3>
            <p className = "text">{props.text}</p>
        </div>


     </div>


   )

// return(<>
 
//  <div className = "group">
//  <h3>{props.topic}</h3>
//  <p className = "text1">{props.text}</p>

//  </div>

// </>
       
   




// )


}
export default Tip
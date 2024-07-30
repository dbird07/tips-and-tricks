function Tip(props){
   return( <div className = "tip">
        <img src = {props.image}/>
        <div className = "group">
            <h3>{props.topic}</h3>
            <p>{props.text}</p>
        </div>


    </div>


   )



}
export default Tip
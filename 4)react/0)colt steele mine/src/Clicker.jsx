// function handleMouseOver(){
//     console.log("Hovered")
// }
function handleClick(){
    console.log("CLicked")
}
function Clicker({message,buttonText}){
    return (
        <div>
            {/* <p onMouseOver={handleMouseOver}>Hello</p> */}
            <button onClick={()=>{alert(message)}}>{buttonText}</button>
        </div>
    )
}
export default Clicker
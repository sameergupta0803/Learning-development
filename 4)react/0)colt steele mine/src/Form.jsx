function handleForm(e){
    e.preventDefault();
    console.log("Form is submitted")
}
function Form(){
    return (
        <form onSubmit={handleForm}>
            <button >Submit</button>
        </form>
    )
}
export default Form
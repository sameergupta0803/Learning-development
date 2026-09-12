export default function ColorList({colors}){
    return (
        <div>
            <p>Color List:</p>
            <ul>
                {colors.map((c)=>
                    <li>{c}</li>
                )}
            </ul>
        </div>
    )
}
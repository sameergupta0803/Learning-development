import ColorBox from "./ColorBox"
export default function ColorBoxGrid({colors}){
        const boxes=[]
        for(let i=0;i<25;i++){
            boxes.push(<ColorBox colors={colors}/>)
        }
        return (
            <div style={{width:"500px",height:"500px",display:"flex",flexWrap:"wrap"}}>
                {boxes}
            </div>
        )
}
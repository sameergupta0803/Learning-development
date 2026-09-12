import "./Property.css"
function Property({name,price,rating}) {
    return (
        <div className="Property">
            <h2 style={{ textAlign: "center" }}>{name}</h2>
            <h3>${price} a night</h3>
            <h4>{rating}⭐</h4>
        </div>
    )
}
export default Property
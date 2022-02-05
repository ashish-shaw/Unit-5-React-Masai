import "./userdetails.css"


export function UserDetails({name,add,isMarr}){
    return <div>
        <h1 className="user">Name: {name}</h1>
        <h2>Address: {add || "Delhi"}</h2>
        <p>isMarried:{isMarr?"Yes":"No"}</p>
    </div>
}

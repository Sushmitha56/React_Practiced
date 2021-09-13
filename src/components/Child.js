function Child(props){
    return(
        <div>
            <button onClick={()=>props.parent("child method as props")}>parent</button>
        </div>
    )
}

export default Child;
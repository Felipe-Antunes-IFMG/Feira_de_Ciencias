function HelloWorld({nome,foto}){
    return(
        <div>
            <p>Olá {nome}!</p>
            <img src={foto} alt="foto"></img>
        </div>
    )
}
export default HelloWorld
function Titulo({nome, paragrafo, cor}){
    return (
    <div>
        <h1 style={{color:cor}}>My name is {nome ? nome:"Fulano"}</h1>
        {paragrafo ? 
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nam beatae aliquid quae distinctio laboriosam asperiores optio explicabo ex, in doloremque, voluptatibus vitae soluta accusamus quia inventore consequuntur ratione cumque?</p>
            :
            <p></p>
        }    
    </div>)
}

export default Titulo
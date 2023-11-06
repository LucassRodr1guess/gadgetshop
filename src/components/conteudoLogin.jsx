import "./conteudoLogin.css";


function ConteudoLogin(){
    return(  
      
    <div className="containerLogin">
    <header>
    <img src={'https://media.discordapp.net/attachments/1030129015371079690/1171094940487532585/4cc80605-1f55-4fea-91db-488cb9fc5707.jpeg?ex=655b6e27&is=6548f927&hm=c0772ae5e0f46e7c27afebd4ca6bbf971bc8a11c24689358250612a9671f29a2&=&width=662&height=662'}  />
      <h1>Faça seu login</h1>
    </header>

    <form action="">
      <div className="inputContainerLogin">
        <label htmlFor="usuario">E-mail:   </label>
        <input 
        type="text"
       
        placeholder="Insira o seu Usuário"/>
      </div>

      <div className="inputContainerLogin">
        <label htmlFor="senha">Senha:   </label>
        <input 
        type="text"
        placeholder="Insira sua senha"/>
      </div>

    <a className="ButtonLogin" href="/">
      Login
    </a>

    <div className="footerLogin">
      <p>Ainda não tem uma conta ?</p>
      <a href="#">Crie uma Conta</a>
    </div>

    

    </form>
        </div>
    )
} export default ConteudoLogin
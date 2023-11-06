import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./navbarHome.css";

function TextLinkExample() {
  return (
    <div className="cor">

    
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" >
            Gadget Shop
            </Navbar.Brand>
                <div className="centered-image">
            <img src="https://media.discordapp.net/attachments/1030129015371079690/1171094940487532585/4cc80605-1f55-4fea-91db-488cb9fc5707.jpeg?ex=655b6e27&is=6548f927&hm=c0772ae5e0f46e7c27afebd4ca6bbf971bc8a11c24689358250612a9671f29a2&=&width=662&height=662" alt="Imagem no centro do Navbar" />
            </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <a href="/login">Entrar   </a>
          </Navbar.Text>
          <Navbar.Text>
             <a href="/cadastro"> Cadastro Produto</a>
          </Navbar.Text>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    </div>
  );
}

export default TextLinkExample;
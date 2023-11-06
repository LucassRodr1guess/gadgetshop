import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./navbarHome.css";

function TextLinkExample2() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"> 
            Gadget Shop
            </Navbar.Brand>
            
        <Navbar.Toggle />

        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <a href="/">Entrar   </a>
          </Navbar.Text>
          <Navbar.Text>
             <a href="/cadastro"> Cadastro Produto</a>
          </Navbar.Text>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default TextLinkExample2;
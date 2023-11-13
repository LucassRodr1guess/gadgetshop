import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';


function ConteudoLogin(){
  return (
    <div style={{ backgroundColor: '#FC0120', minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar bg="#FC0120" variant="dark" expand="lg">
        <Container>
          {/* Nome da loja na parte inferior esquerda */}
          <Navbar.Brand className="mb-0 h1">
            Gadget Shop
          </Navbar.Brand>

          {/* Imagem centralizada na parte superior */}
          <Navbar.Brand className="mx-auto" >
            <img style={{margin: '0 auto', marginLeft: '500px', marginBottom: '200px'}}
              src="https://media.discordapp.net/attachments/1030129015371079690/1171094940487532585/4cc80605-1f55-4fea-91db-488cb9fc5707.jpeg?ex=655b6e27&is=6548f927&hm=c0772ae5e0f46e7c27afebd4ca6bbf971bc8a11c24689358250612a9671f29a2&=&width=300&height=300"
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Logo"
              
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Opções de navegação na parte inferior direita */}
            <Nav className="ml-auto" style={{ margin: '0 auto', paddingLeft: '300px' }} >
              <Nav.Link href="/">Entrar</Nav.Link>
              <Nav.Link href="/cadastro">Cadastro Produtos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Conteúdo da Página de Login */}
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="mb-4">Login</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="senha" />
              </Form.Group>

              <Button variant="primary" type="submit" href='/'>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <div>
      <footer style={{ backgroundColor: '#FC0120', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h5>Entre em Contato Conosco</h5>
        <p>11 99999-9999</p>
        <p>contato@gadgetshop.com</p>
        
        <h5>Redes Sociais</h5>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg> @gadgetshop
        </p>

        <h5>Localização</h5>
        <p>Rua da Gadget, 1234 - São Paulo, SP</p>
      </footer>
    </div>
    </div>
  );
};
 export default ConteudoLogin
import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';


function FormularioCadastroProduto() {
  const [produto, setProduto] = useState({
    id_produtotendencia: '',
    descricao: '',
    marca: '',
    data_entrega: '',
    meses_garantia: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do produto para o servidor ou fazer o que for necessário.
    console.log(produto);
  };

  return (
    <div>
          <Navbar bg="#FC0120" variant="dark" expand="lg">
        <Container>
          {/* Nome da loja na parte inferior esquerda */}
          <Navbar.Brand className="mb-0 h1">
            Gadget Shop
          </Navbar.Brand>

          {/* Imagem centralizada na parte superior */}
          <Navbar.Brand className="mx-auto" >
            <img style={{margin: '0 auto', marginLeft: '500px', marginBottom: '50px'}}
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
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/cadastro">Cadastro Produtos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
      (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <div>
        <label htmlFor="id_produtotendencia">ID do Produto Tendência:</label>
        <input
          type="text"
          name="id_produtotendencia"
          value={produto.id_produtotendencia}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="descricao">Descrição:</label>
        <input
          type="text"
          name="descricao"
          value={produto.descricao}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="marca">Marca:</label>
        <input
          type="text"
          name="marca"
          value={produto.marca}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="data_entrega">Data de Entrega:</label>
        <input
          type="date"
          name="data_entrega"
          value={produto.data_entrega}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="meses_garantia">Meses de Garantia:</label>
        <input
          type="number"
          name="meses_garantia"
          value={produto.meses_garantia}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Cadastrar Produto</button>
    </form>
    </div>
  );
}

export default FormularioCadastroProduto;
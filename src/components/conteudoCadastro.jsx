import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
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
  );
}

export default FormularioCadastroProduto;
import Principal from "../../componentes/principal/principal";
import "./PaginaListaProdutos.css";

const produtos = [
  {
    nome: "Smartphone Samsung",
    preco: 2999,
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    nome: "Notebook Acer",
    preco: 4999,
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    nome: "Tablet Asus",
    preco: 1499,
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

function PaginaListaProdutos() {
  return (
    <Principal titulo="Lista de produtos" voltarPara="/">
      {produtos.map((itemProduto, index) => {
        return (
          <div key={index} className="PaginaListaProdutos_item">
            <strong>produto:</strong> {itemProduto.nome}
            <br />
            <strong>preço:</strong>{" "}
            {itemProduto.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            <br />
            <strong>cores:</strong>

            <div className="PaginaListaProdutos_cores">
              {itemProduto.cores.map((itemCor) => {
                return (
                  <div
                    style={{ height: 16, flex: 1, backgroundColor: itemCor }}
                  ></div>
                );
              })}
            </div>

          </div>
        );
      })}
    </Principal>
  );
}

export default PaginaListaProdutos;

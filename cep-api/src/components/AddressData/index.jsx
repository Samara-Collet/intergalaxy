import { Container } from "./styles";

const AddressData = ({ dataCep }) => {
  const { logradouro, bairro, cidade, uf } = dataCep;
  return (
    <Container>
      <ul>
        <li>Rua: {logradouro}</li>
        <li>Bairro: {bairro}</li>
        <li>Cidade: {cidade}</li>
        <li>Estado: {uf}</li>
      </ul>
    </Container>
  );
};

export default AddressData;

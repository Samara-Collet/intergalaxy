import { Container } from "./styles";
import InputMask from "react-input-mask";

const AddressSearch = ({ valueCep, setValueCep, findCep, error }) => {
  return (
    <Container>
      {error && <p className="error">Necessario no min 8 digitos</p>}
      <div className="search">
        <InputMask
          mask="99.999-999"
          value={valueCep}
          onChange={(e) => setValueCep(e.target.value)}
        />
        <button onClick={findCep}>Buscar</button>
      </div>
    </Container>
  );
};

export default AddressSearch;

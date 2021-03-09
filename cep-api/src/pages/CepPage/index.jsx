import { Container } from "./styles";
import AddressData from "../../components/AddressData";
import AddressSearch from "../../components/AddressSearch";
import { useState } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const CepPage = () => {
  const [valueCep, setValueCep] = useState("");
  const [dataCep, setDataCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const findCep = () => {
    setLoading(true);
    let isIncomplete = valueCep.includes("_");
    if (!isIncomplete) {
      axios
        .get(`http://cep.la/${valueCep}`, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((res) => {
          setDataCep(res.data);
          setError(false);
        })
        .catch((err) => console.log(err));
    } else {
      setDataCep("");
      setError(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <AddressSearch
            valueCep={valueCep}
            setValueCep={setValueCep}
            findCep={findCep}
            error={error}
          />
          <AddressData dataCep={dataCep} />
        </>
      )}
    </Container>
  );
};

export default CepPage;

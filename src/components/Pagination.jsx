import { Container, Pagination} from "react-bootstrap";

const Pageart = () => {


  return (
    <>
    <Container className="d-flex justify-content-center">
      <Pagination>
        <Pagination.Item active >{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next/>
      </Pagination>
    </Container>
    </>
  );
}

export default Pageart;
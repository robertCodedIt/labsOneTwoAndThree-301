import HornedBeasts from "./HornedBeasts";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
 import Row from 'react-bootstrap/Row'
import { data } from "./data";



const Main = () => {
  return (
    <div>
     <Container>
  <Row> 
    <Col md = {3}>{data.map((el) => {
        return (
          <HornedBeasts
            image_url={el.image_url}
            title={el.title}
            description={el.description}
            id ={el.keyword} 
          />
        );
      })}</Col>
  </Row>
 
</Container>
     
    </div>
  );
};



export default Main;

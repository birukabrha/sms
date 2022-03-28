import { Button,Input,Container,Col,Row,FormGroup,Label,Form} from 'reactstrap';

import './App.css';

function App() {
  const [number, setNumber] = useState("");
  const [msg, setMsg] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("", {
        method: "POST",
        body: JSON.stringify({
          number: number,
          msg: msg,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setNumber("");
        setMsg("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container bg-dark text-light rounded">
      <div className="row">
        <div className='col'>
          <Form className="mt-3">
            <FormGroup row>
            <Label md={2} className="text-dark">phone number</Label>
            <Col md={10}>
          <Input type='text' number="number" className='w-50'/>
          </Col>
          </FormGroup>
          <FormGroup row>
            <Label md={2} className="text-dark">Message</Label>
            <Col md={10}>
          <Input type='textarea'rows='5' number="text area" className='w-50'/>
          </Col>
          <Col> 
          <Button className='btn btn-primary' color='primary'>Send</Button>
          </Col>
          </FormGroup>

          </Form>

        </div>

      </div>

      
    </div>
  );
}

export default App;

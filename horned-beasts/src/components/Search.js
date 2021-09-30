import React from "react";

import { Form, FormControl, Button } from "react-bootstrap";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }
  

 
  render() {
    return (
      <div>
        <Form inline>
          <FormControl
            onChange={(evt)=>{
                this.props.onType(evt.target.value)
            }}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    );
  }
}
export default Search;

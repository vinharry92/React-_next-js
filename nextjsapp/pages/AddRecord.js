import React ,{ Component } from "react";
import Link from "next/link";
import fetch from 'isomorphic-fetch';
import Layout from "../Components/Layout";
import {
   Col, Form,
  FormGroup, Label, Input,
  Button,ButtonDropdown,DropdownMenu,DropdownItem,DropdownToggle
} from 'reactstrap';






class AddRecord extends Component{

    constructor(props) {
        super(props);    

      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeIscomplete = this.onChangeIscomplete.bind(this);
      // this.onChangeSelect = this.onChangeSelect.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.toggle = this.toggle.bind(this);
      this.select = this.select.bind(this);
      
      this.state = {
        dropdownOpen: false,
          flavor:"",
          Name: '',
          description: '',
          Iscomplete:'',
          test:'',
          data: [],
          isLoaded:false
      }
  }


  componentDidMount()
  {
      fetch('http://localhost:50607/api/item').then(res => res.json()).then(json => {
      this.setState({
          isLoaded:true,
          data:json,  
      })
  });
  }
  // onChangeSelect(e) {
  //   this.setState({
  //     flavor: e.target.value
  //   });
  // }

  onChangeName(e) {
    this.setState({
      Name: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })  
  }
  onChangeIscomplete(e) {
    this.setState({
      Iscomplete: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    //console.log(`The values are ${this.state.Name}, ${this.state.description}, and ${this.state.Iscomplete}`)
 
    const obj = {}; 
    obj[ 'name' ] = this.state.Name;       
    obj[ 'description' ] = this.state.description;
    obj['isComplete'] = this.state.isComplete;
    obj['Flavor'] = this.state.test;
    var formData  = new FormData();
    for(var name in obj) {
    formData.append(name, obj[name]);
  }
  fetch('http://localhost:50607/api/item/createasync', {
    method: 'POST',
    body: formData
  }).then(function (response) {
    console.log(response);
  });

}

toggle() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });
}
select(event) {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen,
    test: event.target.innerText,
  });

  const obj = {}; 
    obj[ 'id' ] = event.target.innerText;

  var formData  = new FormData();
  for(var name in obj) {
  formData.append(name, obj[name]);
  }

  fetch('http://localhost:50607/api/item/editasync', {
    method: 'Post',
    body: formData
  }).then(res => res.json()).then(json => {
    this.state.Name = json.name;
    this.state.description = json.description;
    this.state.Iscomplete = json.Iscomplete;
    this.state.test = json.flavor;

  });


  
}

    render()
    {
      var { isLoaded, data } = this.state;
      if(!isLoaded)
      {
          return <div>Loading....</div>;
      }
     
        return(
        <Layout>
            <Form className="form" onSubmit={this.onSubmit}>
            <Col>
            <FormGroup>
             <Label>Name</Label>
              <Input type="text"  value={this.state.Name} onChange={this.onChangeName} />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
             <Label>Description</Label>
             <Input type="text" value={this.state.description} onChange={this.onChangeDescription}  />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
             <Label>Iscomplete</Label>
            <Input type="checkbox"  checked={this.state.Iscomplete} onChange={this.onChangeIscomplete}  />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
              <Label>
              Pick your id:
              </Label>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
               <DropdownToggle caret size="lg"> {this.state.test} </DropdownToggle>
                <DropdownMenu>
                {data.map(thing=>
                    <DropdownItem onClick={this.select}>{thing.id}</DropdownItem>
                )}
               </DropdownMenu>
              </ButtonDropdown>
            </FormGroup>
            </Col>


            <Button>Submit</Button>
            <Link href='/'>
                    <Button>Return to dashboard</Button>
                </Link>
          </Form>
            </Layout>
          
        );
    }
}

export default AddRecord;
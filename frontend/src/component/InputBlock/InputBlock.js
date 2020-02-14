import React, {Component} from 'react';
import {Form, FormGroup, Input, Label} from "reactstrap";

class InputBlock extends Component {
  state = {
    author: '',
    image: '',
    message: '',
    showImage: true,
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  fileChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.files[0],
    })
  };

  onSubmitHandler = event => {
    event.preventDefault();

    const formData = new FormData();

    Object.keys(this.state).forEach(key => {
      formData.append(key, this.state[key]);
    });

    if(!this.state.author){
      formData.append('author','Anonymous')
    }

    this.props.onSubmit(formData);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmitHandler}>
        <FormGroup>
          <Label for="author">Author</Label>
          <Input
            type="Author" name="author" id="author"
            placeholder="Enter author name"
            onChange={this.inputChangeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input
            type="text" name="message" id="message"
            placeholder="Type your message here"
            onChange={this.inputChangeHandler}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            type="file" name="image" id="image"
            onChange={this.fileChangeHandler}
          />
        </FormGroup>
        <button>Submit</button>
      </Form>
    );
  }
}

export default InputBlock;
import React, {Component} from 'react';
import {fetchMessages, postMessage} from "./store/actions";
import {connect} from "react-redux";
import InputBlock from "./component/InputBlock/InputBlock";

import './App.css';
import MessageBlock from "./component/MessageBlock/MessageBlock";

class App extends Component {
  componentDidMount() {
    this.props.fetchMessages();

    setInterval(() => {
      this.props.fetchMessages();
    }, 2000)
  }

  render() {
    return (
      <>
        <div className='App'>
          <div className='messageBlock'>
            {this.props.messages.reverse().map(message => (
                <MessageBlock
                  key={message.id}
                  author={message.author}
                  message={message.message}
                  image={message.image}
                />
              )
            )}
          </div>
          <div className='inputBlock'>
            <InputBlock
              onSubmit={this.props.postMessage}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages()),
  postMessage: (message) => dispatch(postMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

axios.get('https://mailtrap.io/api/v1/inboxes/653043/messages/2183724950/body.htmlsource?api_token=a7281cf0ba20007ecf510de136c28c82',{
  params:{
    Host: 'mailtrap.io',
    Authorization: 'Bearer a7281cf0ba20007ecf510de136c28c82'
  }
})
.then(function response(response) {
  console.log(response);
})
class App extends Component {
render(){
  return(
    <div>
      <h1>
        Hello World
      </h1>
    </div>
  );
}
  }



 
export default App;


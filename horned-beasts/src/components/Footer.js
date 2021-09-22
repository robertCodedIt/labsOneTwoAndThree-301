import React, { Component } from "react";
let footStyle = {
  fontStyle: "italic",
  color: "gray",
};
export default class Footer extends Component {
  
  render() {
    return (
      <footer style={footStyle}>
        All rights reserved; Odysseylive.org&reg; Author: Robert Armstrong  &copy;
      </footer>
    );
  }
}

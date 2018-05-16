import React, { Component } from "react";
import MDSpinner from "react-md-spinner";

export default class Spinner extends Component {
  render() {
    return (
      <div>
         <MDSpinner
            style={{
               position: 'absolute',
               top: '30%',
               left: '35%',
               width: 100,
               height: 100,
            }}
         />
      </div>
    );
  }
}
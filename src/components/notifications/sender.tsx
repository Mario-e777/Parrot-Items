/* React & Gatsby stuff */
import React from "react";
import FloatingSnackBar from "./snack-bars/floating";
import { unmountComponentAtNode } from "react-dom";

export default class Sender {
  type: string;
  layoutFunctions: any;
  senderTimeOut: NodeJS.Timeout;
  snackID: number;

  constructor(type: string, layoutFunctions: any) {
    this.type = type;
    this.layoutFunctions = layoutFunctions;
    this.senderTimeOut = null;
    this.snackID = Math.floor(Math.random() * 999999);
  };

  send({ isSuccess, isError }) {
    setTimeout(() => document.getElementById(`${this.snackID}`).style.display = 'none', 3333);
    this.layoutFunctions.handleNatification(
      <FloatingSnackBar
        id={`${this.snackID}`}
        key={this.snackID}
        duration={3333}
        isSuccess={isSuccess}
        isError={isError}
      />
    );
  };
};

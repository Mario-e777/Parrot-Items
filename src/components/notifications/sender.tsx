/* React & Gatsby stuff */
import React from "react";

/* Snack bars */
import FloatingSnackBar from "./snack-bars/floating";

export default class Sender {
  type: string;
  handleNatification: Function;
  senderTimeOut: NodeJS.Timeout;
  snackID: number;
  snackTTL: number;

  constructor(type: string, handleNatification: Function) {
    this.type = type;
    this.handleNatification = handleNatification;
    this.senderTimeOut = null;
    this.snackID = Math.floor(Math.random() * 9999);
    this.snackTTL = 4000;
  };

  send({ isSuccess, isError }) {
    setTimeout(() => {
      /* Delete element */
      document.getElementById(`${this.snackID}`).style.display = 'none';
    }, this.snackTTL);

    this.handleNatification(
      <FloatingSnackBar
        id={`${this.snackID}`}
        key={this.snackID}
        duration={this.snackTTL}
        isSuccess={isSuccess}
        isError={isError}
      />
    );
  };
};

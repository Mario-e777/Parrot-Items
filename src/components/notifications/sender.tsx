/* React & Gatsby stuff */
import React from "react";

/* Modules */
import uniqid from 'uniqid';

/* Snack bars */
import FloatingSnackBar from "./snack-bars/floating";

export default class Sender {
  handleNatification: Function;
  senderTimeOut: NodeJS.Timeout;
  snackID: string;
  snackTTL: number;

  constructor(handleNatification: Function) {
    this.handleNatification = handleNatification;
    this.senderTimeOut = null;
    this.snackID = uniqid();
    this.snackTTL = 4000;
  };

  send({ isSuccess, isError, message }) {
    setTimeout(() => {
      /* Remove element */
      const SNACK_ELEMENT = document.getElementById(`${this.snackID}`);
      SNACK_ELEMENT && (SNACK_ELEMENT.style.display = 'none');
    }, this.snackTTL);

    this.handleNatification(
      <FloatingSnackBar
        id={`${this.snackID}`}
        key={this.snackID}
        duration={this.snackTTL}
        isSuccess={isSuccess}
        isError={isError}
        message={message}
      />
    );
  };
};

/* React & Gatsby stuff */
import React from "react";
import FloatingSnackBar from "./snack-bars/floating";
import { unmountComponentAtNode } from "react-dom";

export default class Sender {
  type: string;
  layoutFunctions: any;

  constructor(type: string, layoutFunctions: any) {
    this.type = type;
    this.layoutFunctions = layoutFunctions;
  };

  send({ isSuccess, isError }) {
    setTimeout(() => document.getElementById('aaa').style.display = 'none', 3333);
    this.layoutFunctions.handleNatification(
      <FloatingSnackBar
        id='aaa'
        key={Math.floor(Math.random() * 999999)}
        duration={3333}
        isSuccess={isSuccess}
        isError={isError}
      />
    );
  };
};

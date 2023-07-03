import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Typer() {
  return (
    <div className="pt-40">
      <TypeAnimation
        sequence={[
          "Listen, Relax, Repeat🚀.",
          1000,
          "Listen and Embrace🚀.",
          1000,
          "Listen, Connect, Appreciate🚀",
          1000,
          "Listen to Vibrant Beats🚀",
          1000,
        ]}
        speed={30}
        style={{ fontSize: "2em", fontFamily: "Poppins-extrabold" }}
        repeat={Infinity}
      />
    </div>
  );
}

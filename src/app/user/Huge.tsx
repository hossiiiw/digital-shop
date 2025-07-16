import React from 'react';

function Huge() {
  const Huge = Array(90)
    .fill(0)
    .map((_, i) => i * 2);
  return <div>Huge Data : {Huge.length}</div>;
}

export default Huge;

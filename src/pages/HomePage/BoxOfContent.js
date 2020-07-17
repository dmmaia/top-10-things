import React from 'react';

import api from '../../services/api';

export default function BoxOfContent() {

  async function handleGetInfo(){
    const response = api.get();

    console.log(response);
  }

  return (
    <div className="content">
      <button onClick={handleGetInfo}></button>
      <p>Link teste 123</p>
      <p>Link teste 123</p>
      <p>Link teste 123</p>
      <p>Link teste 123</p>
      <p>Link teste 123</p>
      <p>Link teste 123</p>
      <p>Link teste 123</p>
      <p>Link teste 123</p>
      <p>Link teste 123</p>
    </div>
  );
}

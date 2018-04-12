import React, { Component } from 'react';
import Button from './Button';

const Home = () => (
      <div className="App">
        <header className="">
          <h1> Sport Portal </h1>
        </header>
        <div>
          <h3>Ingresa con tu cuenta de Google</h3>
          <Button />
        </div>
        <div>
          <h3>Ingresa con tu cuenta de Facebook</h3>
          <Button />
        </div>
        <div>
          <h3>Ingresa con tu correo electrónico</h3>
          <Button />
        </div>
      </div>
);

export default Home

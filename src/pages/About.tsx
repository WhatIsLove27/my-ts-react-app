import React, { Component } from 'react';

interface AboutProps {}
interface AboutState {}

export default class About extends Component<AboutProps, AboutState> {
  render() {
    return (
      <div>
        <h1>О нас</h1>
        <br />
        <p>Информация о компании.</p>
      </div>
    );
  }
}
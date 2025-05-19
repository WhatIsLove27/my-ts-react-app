import React, { Component } from 'react';

interface BlogProps {}
interface BlogState {}

export default class Blog extends Component<BlogProps, BlogState> {
  render() {
    return (
      <div>
        <h1>Блог</h1>
        <br />
        <p>Здесь будут статьи блога.</p>
      </div>
    );
  }
}
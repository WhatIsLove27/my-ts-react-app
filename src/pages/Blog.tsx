import * as React from 'react';

interface BlogProps {}

class Blog extends React.Component<BlogProps> {
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

export default Blog;
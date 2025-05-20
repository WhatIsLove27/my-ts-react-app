import * as React from 'react';

interface AboutProps {}

class About extends React.Component<AboutProps> {
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

export default About;
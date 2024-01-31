import React from 'react';
import HornedBeast from './HornedBeast';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Gallery extends React.Component {
  renderBeasts() {
    return this.props.data.map((beast, index) => (
      <Col md={4} key={index}>
        <Card style={{ width: '18rem' }}>
          <HornedBeast
            title={beast.title}
            imageUrl={beast.image_url}
            description={beast.description}
          />
        </Card>
      </Col>
    ));
  }

  render() {
    return (
      <Row>
        {this.renderBeasts()}
      </Row>
    );
  }
}

export default Gallery;

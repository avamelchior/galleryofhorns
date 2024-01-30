import React from 'react';
import HornedBeast from './HornedBeast';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Gallery extends React.Component {
    render() {
        return (
            <>
                <Row>
                    <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <HornedBeast
                         title={this.props.data[0].title}
                         imageUrl={this.props.data[0].image_url}
                         description={this.props.data[0].description}
                         />
                    </Card>
                    </Col>
                    <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <HornedBeast
                         title={this.props.data[1].title}
                         imageUrl={this.props.data[1].image_url}
                         description={this.props.data[1].description}
                         />
                    </Card>
                    </Col>
                    <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <HornedBeast
                         title={this.props.data[2].title}
                         imageUrl={this.props.data[2].image_url}
                         description={this.props.data[2].description}
                         />
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <HornedBeast
                         title={this.props.data[3].title}
                         imageUrl={this.props.data[3].image_url}
                         description={this.props.data[3].description}
                         />
                    </Card>
                    </Col>
                    <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <HornedBeast
                         title={this.props.data[4].title}
                         imageUrl={this.props.data[4].image_url}
                         description={this.props.data[4].description}
                         />
                    </Card>
                    </Col>
                    <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <HornedBeast
                         title={this.props.data[5].title}
                         imageUrl={this.props.data[5].image_url}
                         description={this.props.data[5].description}
                         />
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <HornedBeast
                         title={this.props.data[6].title}
                         imageUrl={this.props.data[6].image_url}
                         description={this.props.data[6].description}
                         />
                    </Card>
                    </Col>
                    <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <HornedBeast
                         title={this.props.data[7].title}
                         imageUrl={this.props.data[7].image_url}
                         description={this.props.data[7].description}
                         />
                    </Card>
                    </Col>
                    <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <HornedBeast
                         title={this.props.data[9].title}
                         imageUrl={this.props.data[9].image_url}
                         description={this.props.data[9].description}
                         />
                    </Card>
                    </Col>
                </Row>
            </>
        )
    }

}

export default Gallery;
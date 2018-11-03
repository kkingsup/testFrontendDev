import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import {connect} from 'react-redux';
import { 
    Container,
    Row,
    Col,
	Card,  
	CardText, 
	CardBody,
	CardTitle
 } from 'reactstrap';


class detailsEducationContainer extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			loading: false
		};
	}

	responsive = {
		768: { items: 1 },
		1024: { items: 2 },
	};
	

	handleOnDragStart = e => e.preventDefault()

	render() {
		return (
			<Container>
                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
						<AliceCarousel 
							mouseDragEnabled 
							dotsDisabled 
							fadeOutAnimation={false}
							keysControlDisabled={false}
							autoPlay={true}
							autoPlayInterval={3000}
							responsive={this.responsive}
						>
						<Card onDragStart={this.handleOnDragStart} className="marginCard">
							<CardBody>
							<CardTitle>2009 -2012</CardTitle>
							<CardText className="flex-text">Junior High School, Klaeng“Wittayasathaworn” school, Rayong Province, Thailand GPAX: 3.80 </CardText>
							</CardBody>
						</Card>
						<Card onDragStart={this.handleOnDragStart}  className="marginCard">
							<CardBody>
							<CardTitle>2011 -2013</CardTitle>
							<CardText className="flex-text">Senior High School, Klaeng“Wittayasathaworn” school, Rayong Province, Thailand GPAX: 3.62 </CardText>
							</CardBody>
						</Card>
						<Card onDragStart={this.handleOnDragStart} className="marginCard">
							<CardBody>
							<CardTitle>2014 -2018</CardTitle>
							<CardText className="flex-text">Bachelor of science, Faculty of Informatics, Software Engineering, Chonburi Province, Thailand GPAX: 3.94 </CardText>
							</CardBody>
						</Card>
						</AliceCarousel>
                        </Col>
                    </Row>
				
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(detailsEducationContainer);
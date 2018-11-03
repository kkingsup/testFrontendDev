import React from 'react';
import {connect} from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import { 
    Container,
    Row,
    Col,
	Collapse, 
	Button, 
	CardBody, 
	Card,
	CardText, 
	CardTitle
 } from 'reactstrap';


class detailsJobContainer extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			loading: false
		};

		this.toggle = this.toggle.bind(this)
    	this.state = {
				job1 : false,
				job2 : false,
				job3 : false
		};

		
	}

	responsive = {
		768: { items: 1 },
		1024: { items: 2 },
	};

	handleOnDragStart = e => e.preventDefault()

	componentDidMount(){
		console.log(this.state.job);
		
	}

	toggle = event => {
		console.log(event.target.id);
		let id = event.target.id;
	
		this.setState({ 
			[id]: !this.state[id] 
		});
	}
	

	render() {
		return (
			<Container>
				<div className="jobCard">
                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12" >
							<Button className="buttonJob" block id="job1" onClick={this.toggle}>ประวัติการทำงานที่ 1</Button>
							<Collapse isOpen={this.state.job1}>
							<Card>
								<CardBody>
								June 20 – July 29 2015 : System Administrator at BuraphaCloud, BuraphaUniversity, Thailand 
								</CardBody>
							</Card>
							</Collapse>
							<br/>
							<Button className="buttonJob" block id="job2" onClick={this.toggle}>ประวัติการทำงานที่ 2</Button>
							<Collapse isOpen={this.state.job2}>
							<Card>
								<CardBody>
								July 31 – November 17 2017 : Java Developer at G-ABLE CO., LTD. Bangkok, Thailand
								</CardBody>
							</Card>
							</Collapse>
							
							<br/>
                        </Col>
                        
                    </Row>
				</div>
				<div className="jobSlide">
					<Row>
						<Col lg="12" md="12" sm="12" xs="12" >
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
							<CardTitle>ประวัติการทำงานที่ 1</CardTitle>
							<CardText className="flex-text">June 20 – July 29 2015 : System Administrator at BuraphaCloud, BuraphaUniversity, Thailand </CardText>
							</CardBody>
						</Card>
						<Card onDragStart={this.handleOnDragStart}  className="marginCard">
							<CardBody>
							<CardTitle>ประวัติการทำงานที่ 2</CardTitle>
							<CardText className="flex-text">July 31 – November 17 2017 : Java Developer at G-ABLE CO., LTD. Bangkok, Thailand</CardText>
							</CardBody>
						</Card>
						</AliceCarousel>
						</Col>
					</Row>
				</div>
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
)(detailsJobContainer);
import React from 'react';
import {connect} from 'react-redux';
import { 
    Container,
	Row,
	Col,
	Button,
	Collapse,
	Table,
	Card, 
    CardBody
 } from 'reactstrap';


class skillsContainer extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			loading: false
		};
		this.toggle = this.toggle.bind(this)
    	this.state = {
				skill1 : false,
				skill2 : false
		};
	}

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
				<div className="skillTable">
                    <Row >
						<br/>
						<Table hover>
							<thead>
							<tr>
								<th>ชื่อทักษะ</th>
								<th>ระดับความสามารถ</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>HTML</td>
								<td>ทำได้อย่างยอดเยี่ยม</td>
							</tr>
							<tr>
								<td>CSS</td>
								<td>ทำได้อย่างยอดเยี่ยม</td>
							</tr>
						
							</tbody>
						</Table>
					</Row>
				</div>
				<div className="skillCard">
					<Row >
						<Col lg="12" md="12" sm="12" xs="12" >
							<Button className="buttonJob" block id="skill1" onClick={this.toggle}>HTML</Button>
							<Collapse isOpen={this.state.skill1}>
							<Card>
								<CardBody>
								ทำได้อย่างยอดเยี่ยม 
								</CardBody>
							</Card>
							</Collapse>
							<br/>
							<Button className="buttonJob" block id="skill2" onClick={this.toggle}>CSS</Button>
							<Collapse isOpen={this.state.skill2}>
							<Card>
								<CardBody>
								ทำได้อย่างยอดเยี่ยม
								</CardBody>
							</Card>
							</Collapse>
							
							<br/>
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
)(skillsContainer);
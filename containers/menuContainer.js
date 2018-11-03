import React from 'react';
import {connect} from 'react-redux';
import { 
    Container,
    Row,
    Col,
    Navbar,
 } from 'reactstrap';


class menuContainer extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			loading: false
		};
	}

	render() {
		return (
			<Container>
                    <Row className="menu fontMenu">
                        <Col >
                            <span>ข้อมูลส่วนตัว</span>
                        </Col>
                    </Row>
                    <Row className="menu fontMenu">
                        <Col>
                            <span>ประวัติการศึกษา</span>
                        </Col>
                    </Row>
                    <Row className="menu fontMenu">
                        <Col>
                            <span>ประวัติการทำงาน</span>
                        </Col>
                    </Row>
                    <Row className="menu fontMenu">
                        <Col>
                            <span>ตารางทักษะ</span>
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
)(menuContainer);
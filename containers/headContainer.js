import React from 'react';
import {connect} from 'react-redux';
import { 
    Container,
    Row,
    Col
 } from 'reactstrap';
 import { slide as Menu } from 'react-burger-menu'

class headContainer extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			loading: false
		};
	}

	showSettings (event) {
		event.preventDefault();
	  }

	render() {
		return (
			<div>
					<div className="menuBerger">
						<Menu right >
							<a id="home" className="menu-item" href="">ข้อมูลส่วนตัว</a>
							<a id="about" className="menu-item" href="">ประวัติการศึกษา</a>
							<a id="contact" className="menu-item" href="">ประวัติการทำงาน</a>
							<a onClick={ this.showSettings } className="menu-item--small" href="">ตารางทักษะ</a>
						</Menu>
					</div>
                    <Row className="headBack fontHead">
                        <Col lg="6" md="12" sm="12" xs="12">
                            <span>ชื่อ นางสาวกิ่งกาญจน์ ศุภผล</span>
                        </Col>
                        <Col lg="6" md="12" sm="12" xs="12">
                            <span>ตำแหน่งที่สมัคร Frontend Developer</span>
                        </Col>
                    </Row>
			</div>
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
)(headContainer);
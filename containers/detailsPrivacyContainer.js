import React from 'react';
import {connect} from 'react-redux';
import { 
    Container,
    Row,
    Col,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle
 } from 'reactstrap';


class detailsPrivacyContainer extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			loading: false
		};
	}

	render() {
		return (
			<Container>
                <div className="privacyFull">
                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <br/>
                            <Card>
                                <CardImg top width="100%" src="https://readthecloud.co/wp-content/uploads/2017/08/interview-talk-bnk48-share.jpg" alt="Card image cap" />
                            </Card>
                            <br/>
                            <Card>
                                <CardBody  className="backCard fontCard">
                                    <CardTitle>ข้อมูลส่วนตัว</CardTitle>
                                    <CardText>
                                        <span className="spanPrivacy">Date of Birth: 31.01.1996</span> <br/>
                                        <span className="spanPrivacy">Nationality: Thai</span> <br/>
                                        <span className="spanPrivacy">Gender: Female</span> <br/>
                                        <span className="spanPrivacy">E-mail: kingkarn.supapol@gmail.com</span> <br/>
                                        <span className="spanPrivacy">Phone: 0944945704</span> </CardText>
                                </CardBody>
                            </Card>
                            <br/>
                        </Col>
                    </Row>
                </div>
                <div  className="privacyHalf">
                    <br/>
                    <Row>
                        <Col lg="12" md="12" sm="4" xs="4">
                            <Card>
                                <CardImg className="editImg" top width="100%" src="https://readthecloud.co/wp-content/uploads/2017/08/interview-talk-bnk48-share.jpg" alt="Card image cap" />
                            </Card>
                        </Col>
                        <Col lg="12" md="12" sm="8" xs="8">
                            <Card>
                                <CardBody  className="backCard fontCard">
                                    <CardTitle>ข้อมูลส่วนตัว</CardTitle>
                                    <CardText className="fontPrivacyHalf">
                                        <span className="spanPrivacy">Date of Birth: 31.01.1996</span> <br/>
                                        <span className="spanPrivacy">Nationality: Thai</span> <br/>
                                        <span className="spanPrivacy">Gender: Female</span> <br/>
                                        <span className="spanPrivacy">E-mail: kingkarn.supapol@gmail.com</span> <br/>
                                        <span className="spanPrivacy">Phone: 0944945704</span> </CardText>
                                </CardBody>
                            </Card>
                            
                        </Col>
                    </Row>
                    <br/>
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
)(detailsPrivacyContainer);
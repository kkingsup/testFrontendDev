import React from 'react';
import {connect} from 'react-redux';
import { addSometing } from './../actions/AccountActions';
import { Button } from 'reactstrap';

class IndexContainer extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			loading: false
		};
	}

	render() {
		return (
			<div>
				<Button color="danger">Danger!</Button>
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
)(IndexContainer);
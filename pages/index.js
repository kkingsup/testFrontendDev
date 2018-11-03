import withRedux from 'next-redux-wrapper';
import React from 'react';

import MainLayout from './../components/layouts/MainLayout';
import Header from './../containers/headContainer';
import Menu from './../containers/menuContainer';
import Privecy from './../containers/detailsPrivacyContainer';
import Education from './../containers/datailsEducationContainer';
import Job from './../containers/datailsJobContainer';
import Skills from './../containers/skillsContainer';

import { Container, Row, Col } from 'reactstrap';

import {initStore} from './../store';

class Index extends React.Component {

    render() {
        return (
            <MainLayout>
                 <div class="container">
                     <Row>
                         <Col lg="12" md="12" sm="12" xs="12">
                            <Header/>
                         </Col>
                     </Row>
                     <Row>
                         <Col lg="3" md="3" sm="0" xs="0" className="backMenu menuMain">
                            <Menu/>
                         </Col>
                         <Col lg="9" md="9" sm="12" xs="12">
                            <Privecy/>
                            <Education/>
                            <Job/>
                            <Skills/>
                         </Col> 
                     </Row>
                 </div>
            </MainLayout>
        );
    }
}

export default withRedux(initStore, null, null)(Index);
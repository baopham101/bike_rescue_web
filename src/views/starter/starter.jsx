import React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row} from 'reactstrap';
import {Projects} from 'components/dashboard-components';

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';

const Starter = () => {
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <Projects />
                </Col>
            </Row>
        </div>
    );
}

export default Starter;

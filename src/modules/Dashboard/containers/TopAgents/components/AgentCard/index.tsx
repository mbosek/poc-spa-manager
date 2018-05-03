import * as React from 'react';
import {
    Col,
    Row,
    Card,
    CardTitle,
    CardText
} from 'reactstrap';

export const AgentCard = (props: any) => (
    <Card body key={`${props.agent.profile.name}`} className="mb-1">
        <Row>
            <Col xl={2}>
                <img src={props.agent.profile.photo} className="rounded avatar" />
            </Col>
            <Col xl={10}>
                <CardTitle>{props.agent.profile.name}</CardTitle>
                <CardText>{props.agent.stats.leads} - Leads</CardText>
                <CardText>{props.agent.stats.quality_score}% - Quality Score</CardText>
                <CardText>{props.agent.stats.verified_listings}% - Verified listings</CardText>
                <CardText>{props.agent.stats.calls_answered}% - Calls answered</CardText>
            </Col>
        </Row>
    </Card>
);

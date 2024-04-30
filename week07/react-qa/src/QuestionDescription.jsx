import { Col, Row } from "react-bootstrap";
function QuestionDescription(props){
    return (
        <Row>
            <Col md={6} as='p'>
                <Strong>Question #{props.question.id}</Strong>
            </Col>
            <Col md = {6} as ='p' className = 'text-end'>
                Asked by <span className='badge rounded-pill text-bg-secondary'>{props.question.email}</span>
            </Col>
            <Col as='p' className='lead'>{props.question.text}</Col>
        </Row>
    )
}

export default QuestionDescription;
import { Row, Col, Table } from "react-bootstrap";
function Answers(props){
    return(
        <>
        <Row> 
            <Col as='h2'>Answers:</Col>
        </Row>
        <Row>
            <Col lg={10} className='mx-auto'>
                <AnswerTable answers={propTypes.answers}></AnswerTable>
            </Col>
        </Row>
        </>
    )
};

function AnswerTable(props){
    return(
        <Table striped>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Text</th>
                    <th>Author</th>
                    <th>Score</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.answers.map((ans)=><AnswerRow answer={ans} key={ans.id}/>)}

                
            </tbody>
        </Table>
    )
};

function AnswerRow(){
    return(
        <tr><AnswerData answer={props.answer}/><AnswerAction/></tr>
    )
};
function AnswerData(){
    <>
        <td>{props.answer.date.format('YYYY-MM-DD')}</td>
        <td>props.answer.text</td>   {/* FINIREEEE */}
    </>
}
export default Answers;
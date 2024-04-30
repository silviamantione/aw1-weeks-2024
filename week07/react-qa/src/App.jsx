import  {Question} from "./QAModels.mjs";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from "./NAvHeader.jsx";
import QuestionDescription from "./QuestionDescription.jsx";
import Answers from "./Answers.jsx";
const fakeQuestion = new Question(1,'IS javascript better than Python?', 'luigi.derussis@polito.it', '2024-02-07');
fakeQuestion.init();
function App() {
  return (
    <>
      <NavHeader questionNum = {fakeQuestion.id}/>    /*sarebbe la navbar*/
      <Container>
        <QuestionDescription question={fakeQuestion}>
          <Answers>

          </Answers>

        </QuestionDescription>

      </Container>
    </>
  )
}

export default App

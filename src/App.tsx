import Form from "./Form"
import useQuiz from "./useQuiz"
import Explanation from "./lib/Explanation"
import { Button } from "@/components/ui/button"
import Results from "./Results"

export function App() {
  const {
    state: {
      currentQuestion,
      showNextQuestionBtn,
      showSummaryBtn,
      questions,
      areResultsVisible,
      result,
    },
    submitAnswer,
    nextQuestion,
    showResults,
    resetQuiz,
  } = useQuiz()

  return (
    <div className="flex min-h-svh justify-center p-6">
      {areResultsVisible ? (
        <div className="mt-16 flex h-fit max-w-2xl min-w-0 flex-col items-center gap-4 text-center text-sm leading-loose">
          <h1 className="text-[48px] font-bold">
            Azure <span>Fundamentals</span>
          </h1>
          <Results
            result={result}
            handleTryAgain={resetQuiz}
            questions={questions}
          />
        </div>
      ) : (
        <>
          <div className="mt-16 flex h-fit max-w-md min-w-0 flex-col items-center gap-4 text-center text-sm leading-loose">
            <h1 className="text-2xl font-bold">
              Azure <span>Fundamentals</span>
            </h1>
            <div>
              <div className="mb-6">
                <p className="text-right">{`${currentQuestion.id} / ${questions.length}`}</p>
                <div className="h-2 w-full rounded-2xl bg-gray-200">
                  <span
                    style={{
                      width: (currentQuestion.id / questions.length) * 100,
                    }}
                    className="block h-full w-full rounded-2xl bg-blue-600"
                  />
                </div>
              </div>
              <Form
                handleOptionClick={submitAnswer}
                question={currentQuestion}
              />
            </div>
            {currentQuestion.userChoice.id.length > 0 && (
              <Explanation
                explanation={currentQuestion.explanation}
                isValid={
                  currentQuestion.userChoice.id === currentQuestion.correct
                }
              />
            )}
            {showNextQuestionBtn && (
              <Button className={`w-fit px-8`} onClick={nextQuestion}>
                Next question
              </Button>
            )}
            {showSummaryBtn && (
              <Button className={`w-fit px-8`} onClick={showResults}>
                See results
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default App

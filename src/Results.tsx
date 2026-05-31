import type { Question } from "./questions"
import { Item } from "./components/ui/item"
import { Button } from "@/components/ui/button"
const Results: React.FC<{
  questions: Question[]
  result: {
    percentage: number
    summary: string
    color: string
    correctCount: number
  }
  handleTryAgain: () => void
}> = ({ questions, handleTryAgain, result }) => {
  const getCorrectIcon = (wasAnswerValid: boolean) =>
    wasAnswerValid ? "✔" : "❌"

  const getTextColor = (color: string) => {
    switch (color) {
      case "red":
        return "text-red-700"
      case "orange":
        return "text-orange-700"
      case "green":
        return "text-green-700"
      default:
        return ""
    }
  }

  const textColor = getTextColor(result.color)

  return (
    <div className="grid gap-4">
      <h2 className={`${textColor} text-[100px] leading-none font-bold`}>
        {result.percentage}%
      </h2>
      <p className={`${textColor} text-[18px] font-bold`}>{result.summary}</p>
      <p className="mb-4">{`${result.correctCount} out of ${questions.length} questions correct`}</p>
      {questions.map((question) => {
        const wasAnswerValid = question.userChoice.id === question.correct

        console.log(question.userChoice.id)
        console.log(question.correct)
        const goodAnswer = question.options.find(
          (option) => option.id === question.correct
        )

        return (
          <Item
            className="flex flex-nowrap text-left data-[valid=false]:border-red-400 data-[valid=false]:bg-red-50 data-[valid=true]:border-green-400 data-[valid=true]:bg-green-50"
            data-valid={wasAnswerValid}
            key={question.id}
          >
            <div>
              <p>{getCorrectIcon(wasAnswerValid)}</p>
            </div>
            <div>
              <p>{question.question}</p>
              {!wasAnswerValid && (
                <p>
                  <span className="font-bold">Correct answer: </span>
                  {goodAnswer?.value}
                </p>
              )}
            </div>
          </Item>
        )
      })}
      <div className="flex justify-center">
        <Button className="my-8 w-fit px-16 py-6" onClick={handleTryAgain}>
          Try Again
        </Button>
      </div>
    </div>
  )
}

export default Results

import { RadioGroup } from "./components/ui/radio-group"
import type { Question } from "./questions"
import RadioButton from "./RadioButton"
const Form: React.FC<{
  question: Question
  handleOptionClick: ({ value, id }: { value: string; id: string }) => void
}> = ({ question, handleOptionClick }) => {
  return (
    <form className="flex flex-col justify-center gap-4">
      <h2>{question.question}</h2>
      <RadioGroup
        value={question.userChoice.value}
        className="flex w-full flex-col items-center justify-center"
      >
        {question.options.map((option) => {
          const isValid =
            (question.userChoice.id === option.id &&
              question.correct === option.id) ||
            (question.correct === option.id &&
              question.userChoice.id.length !== 0)

          const isInvalid =
            question.userChoice.id === option.id &&
            question.correct !== option.id
          return (
            <RadioButton
              handleOptionClick={handleOptionClick}
              value={option.value}
              optionTag={option.tag}
              description={option.value}
              key={option.id}
              isInvalid={isInvalid}
              isValid={isValid}
              id={option.id}
              disabled={
                question.userChoice.id.length > 0 && !isValid && !isInvalid
              }
            />
          )
        })}
      </RadioGroup>
    </form>
  )
}

export default Form

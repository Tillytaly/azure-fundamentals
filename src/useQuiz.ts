import { questions } from "./questions"
import { useReducer } from "react"
const initialState = {
  questions,
  score: 0,
  progress: 0,
  currentQuestion: questions[0],
  showNextQuestionBtn: false,
  showSummaryBtn: false,
  areResultsVisible: false,
  result: {
    percentage: 0,
    summary: "",
    color: "",
    correctCount: 0,
  },
}

type Reducer<S, A> = (prevState: S, action: A) => S
type Action =
  | {
      type: "ANSWER_QUESTION"
      payload: {
        value: string
        id: string
      }
    }
  | { type: "NEXT_QUESTION" }
  | { type: "RESET_QUIZ" }
  | { type: "SHOW_RESULTS" }

const getSummary = (percentage: number) => {
  if (percentage < 50) return "You need to study more"
  if (percentage >= 50 && percentage < 80)
    return "Not bad, but you can do better"
  return "Excellent work! You're ready for the exam"
}

const getSummaryColor = (percentage: number) => {
  if (percentage < 50) return "red"
  if (percentage >= 50 && percentage < 80) return "orange"
  return "green"
}

const reducer: Reducer<typeof initialState, Action> = (prevState, action) => {
  switch (action.type) {
    case "ANSWER_QUESTION": {
      const value = action.payload

      const isLastQuestion =
        prevState.currentQuestion.id === prevState.questions.length

      const progress =
        (prevState.currentQuestion.id / prevState.questions.length) * 100

      const updatedQuestions = prevState.questions.map((question) => {
        if (prevState.currentQuestion.id === question.id) {
          return {
            ...question,
            userChoice: value,
          }
        }

        return question
      })

      return {
        ...prevState,
        questions: updatedQuestions,
        currentQuestion: {
          ...prevState.currentQuestion,
          userChoice: value,
        },
        showNextQuestionBtn: !isLastQuestion,
        showSummaryBtn: isLastQuestion,
        progress,
      }
    }
    case "NEXT_QUESTION": {
      const nextQuestionID = prevState.currentQuestion.id + 1
      const nextQuestion = prevState.questions.find(
        (question) => question.id === nextQuestionID
      )

      if (!nextQuestion) return prevState

      return {
        ...prevState,
        currentQuestion: nextQuestion,
        showNextQuestionBtn: false,
      }
    }
    case "SHOW_RESULTS": {
      const filteredCorrectAnswers = prevState.questions.filter(
        (question) => question.userChoice.id === question.correct
      )

      const result =
        (filteredCorrectAnswers.length / prevState.questions.length) * 100

      const percentageRounded = Math.round(result)
      return {
        ...prevState,
        areResultsVisible: true,
        result: {
          percentage: percentageRounded,
          summary: getSummary(result),
          color: getSummaryColor(result),
          correctCount: filteredCorrectAnswers.length,
        },
      }
    }
    case "RESET_QUIZ": {
      return initialState
    }

    default:
      return prevState
  }
}

function useQuiz() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const submitAnswer = (value: { value: string; id: string }) => {
    if (state.currentQuestion.userChoice.id.length > 0) return
    dispatch({
      type: "ANSWER_QUESTION",
      payload: value,
    })
  }

  const resetQuiz = () => {
    dispatch({ type: "RESET_QUIZ" })
  }

  const nextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" })
  }

  const showResults = () => {
    dispatch({ type: "SHOW_RESULTS" })
  }

  return {
    state,
    submitAnswer,
    resetQuiz,
    nextQuestion,
    showResults,
  }
}

export default useQuiz

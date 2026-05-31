import { Item, ItemTitle } from "../components/ui/item"

const Explanation = ({
  explanation,
  isValid,
}: {
  explanation: string
  isValid: boolean
}) => {
  const title = isValid ? "✔ Correct" : "❌ Incorrect"
  return (
    <Item
      data-valid={isValid}
      className="mt-4 mb-4 border data-[valid=false]:border-amber-300 data-[valid=false]:bg-amber-50 data-[valid=true]:border-lime-100 data-[valid=true]:bg-lime-50"
    >
      <ItemTitle
        data-valid={isValid}
        className="font-bold data-[valid=false]:text-orange-500 data-[valid=true]:text-green-500"
      >
        {title}
      </ItemTitle>
      <p className="text-start">{explanation}</p>
    </Item>
  )
}

export default Explanation

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroupItem } from "@/components/ui/radio-group"

const RadioButton: React.FC<{
  optionTag: string
  description: string
  value: string
  id: string
  isValid: boolean
  isInvalid: boolean
  disabled: boolean
  handleOptionClick: ({ value, id }: { value: string; id: string }) => void
}> = ({
  description,
  id,
  optionTag,
  value,
  isValid,
  isInvalid,
  disabled,
  handleOptionClick,
}) => {
  return (
    <FieldLabel
      htmlFor="plus-plan"
      onClick={() => handleOptionClick({ value, id })}
      data-valid={isValid}
      data-invalid={isInvalid}
      className="data-[invalid=true]:border-red-400 data-[valid=true]:border-green-400"
    >
      <Field
        data-invalid={isInvalid}
        data-valid={isValid}
        orientation="horizontal"
        className="rounded-[10px] data-[invalid=true]:bg-red-50 data-[valid=true]:bg-green-50"
      >
        <FieldContent>
          <FieldDescription
            data-valid={isValid}
            data-invalid={isInvalid}
            className="data-[invalid=true]:text-red-500 data-[valid=true]:text-green-500"
            // data-invalid={isInvalid}
            // className="data-[invalid=true]:text-red-500"
          >
            {optionTag}
          </FieldDescription>
          <FieldTitle data-valid={isValid} className="text-start">
            {description}
          </FieldTitle>
        </FieldContent>
        <RadioGroupItem
          className="sr-only"
          disabled={disabled}
          value={value}
          id={id}
        />
      </Field>
    </FieldLabel>
  )
}

export default RadioButton

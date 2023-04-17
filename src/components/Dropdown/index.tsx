import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

type TOption = {
  id: string
  value: string
  label: string
  groupLabel?: string
}

interface TDropdownProps extends React.InputHTMLAttributes<HTMLInputElement> {
  options: TOption[]
  shouldGroup?: boolean
}

interface TGroupedOptions {
  groupLabel: string
  options: TOption[]
}

export default function Dropdown({
  options,
  shouldGroup,
  ...rest
}: TDropdownProps) {
  const [showOptions, setShowOptions] = useState(false)
  const [groupedOptions, setGroupedOptions] = useState<TGroupedOptions[]>([])

  const handleGroupedOptions = useCallback(() => {
    const groupedOptions = options.reduce((acc: TGroupedOptions[], option) => {
      const { groupLabel } = option

      if (groupLabel) {
        const group = acc.find((group) => group.groupLabel === groupLabel)

        if (group) {
          group.options.push(option)
        } else {
          acc.push({ groupLabel, options: [option] })
        }
      }

      return acc
    }, [])
    return groupedOptions
  }, [options])

  useEffect(() => {
    if (shouldGroup) {
      setGroupedOptions(handleGroupedOptions())
    }
  }, [shouldGroup, handleGroupedOptions])

  return (
    <>
      <input
        data-testid="dropdown-input"
        {...rest}
        onFocus={() => setShowOptions(true)}
      />

      {showOptions && (
        <div
          data-testid="dropdown-input-options"
          className="w-full max-w-md px-6 py-4 mt-3 bg-white rounded-md"
        >
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                key={option.id}
                control={<Checkbox value={option.value} />}
                label={option.label}
              />
            ))}
          </FormGroup>
        </div>
      )}
    </>
  )
}

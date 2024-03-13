import { useState, Fragment } from 'react'
import { Combobox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

function Selector({data}) { 

  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? data
      : data.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox value={selected} onChange={setSelected}>
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        displayValue={(person) => person.name}
      />
      <Combobox.Options>
        {filteredPeople.map((person) => (
          /* Use the `active` state to conditionally style the active option. */
          /* Use the `selected` state to conditionally style the selected option. */
          <Combobox.Option key={person.id} value={person} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
              >
                {selected && <CheckIcon />}
                {person.name}
              </li>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}
export default Selector
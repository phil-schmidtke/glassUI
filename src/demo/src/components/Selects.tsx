import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
  ]

export default function Selects() {
    const [selected, setSelected] = useState(people[0])
    const [open, setOpen] = useState(false)

    return (
        <div className="mt-4">
            Selects
            <div className="w-1/6">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                <Listbox.Button className="select relative w-full" onClick={() => setOpen(!open)}>
                    <span className="block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        {open ? <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 rotate-180 transition-all ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg></div> : <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 transition-all ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg></div>}
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="select-option absolute mt-1 max-h-60 w-full overflow-auto py-1 text-base sm:text-sm">
                    {people.map((person, personIdx) => (
                        <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                            `relative cursor-pointer select-none py-2 pl-10 pr-4 hover:text-gray-100 ${
                            active ? '' : ''
                            }`
                        }
                        value={person}
                        >
                        {({ selected }) => (
                            <>
                            <span
                                className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                                }`}
                            >
                                {person.name}
                            </span>
                            {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            ) : null}
                            </>
                        )}
                        </Listbox.Option>
                    ))}
                    </Listbox.Options>
                </Transition>
                </div>
            </Listbox>
            </div>
        </div>
    )
}
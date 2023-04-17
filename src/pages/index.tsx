import Dropdown from '@/components/Dropdown'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const options = [
    { id: '1', value: '1', label: 'MSC Carnival', groupLabel: 'MSC' },
    { id: '2', value: '2', label: 'Ventura Cruise', groupLabel: 'Ventura' },
    { id: '3', value: '3', label: 'Ventura Magestic ', groupLabel: 'Ventura' },
  ]

  return (
    <main className="flex flex-col min-h-screen p-24">
      <h1>Hello Next</h1>
      <Dropdown
        placeholder="Select a ship..."
        options={options}
        multiple
        shouldGroup
        onChange={(e) => console.log(e.currentTarget.value)}
      />
    </main>
  )
}

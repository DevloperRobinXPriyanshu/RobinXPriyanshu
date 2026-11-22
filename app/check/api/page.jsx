"use client"
import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'

export default function StudentManager() {
  // 1. Yahan createClient() ko call karke supabase instance banayein
  const supabase = createClient()
  const [students, setStudents] = useState([])

  // 2. Data Fetch (Read) karne ka example
  const getStudents = async () => {
    const { data, error } = await supabase
      .from('AllStudents')
      .select('*')

    if (error) {
      alert("Error: " + error.message)
    } else {
      console.log(data)
      setStudents(data)
    }
  }

  // 3. Naya Data Add (Insert) karne ka example
  const addStudent = async () => {
    const { error } = await supabase
      .from('AllStudents')
      .insert([
        {
          "class-number": "10th",
          rollnumber: 5,
          name: "Aman Kumar",
          father: "Rajesh Kumar",
          mobilenumber: "9876543210"
        }
      ])

    if (error) {
      alert("Insert Error: " + error.message)
    } else {
      alert("Student add ho gaya!")
      getStudents() // list refresh karne ke liye
    }
  }

  return (
    <div className="p-6 space-y-4">
      <div className="flex gap-3">
        <button onClick={getStudents} className="px-4 py-2 bg-blue-600 text-white rounded">
          Load Students
        </button>
        <button onClick={addStudent} className="px-4 py-2 bg-green-600 text-white rounded">
          Add Dummy Student
        </button>
      </div>

      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(students, null, 2)}
      </pre>
    </div>
  )
}
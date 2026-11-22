  const students=
                  [
                  {
                    "sr": 1,
                    "roll_number": "43101613163",
                    "Name": "Priyanka Devi",
                    "father": "Ramesh Kumar",
                    "mother": "Meera Devi",
                    "phone_number": "9876543210"
                  },
                  {
                    "sr": 2,
                    "roll_number": "43101613164",
                    "Name": "Aarav Sharma",
                    "father": "Suresh Sharma",
                    "mother": "Sunita Sharma",
                    "phone_number": "9123456780"
                  },
                  {
                    "sr": 3,
                    "roll_number": "43101613165",
                    "Name": "Ananya Verma",
                    "father": "Rajesh Verma",
                    "mother": "Kavita Verma",
                    "phone_number": "9988776655"
                  },
                  {
                    "sr": 4,
                    "roll_number": "43101613166",
                    "Name": "Rohan Yadav",
                    "father": "Mahesh Yadav",
                    "mother": "Rekha Yadav",
                    "phone_number": "9811223344"
                  },
                  {
                    "sr": 5,
                    "roll_number": "43101613167",
                    "Name": "Neha Gupta",
                    "father": "Dinesh Gupta",
                    "mother": "Anita Gupta",
                    "phone_number": "9712345678"
                  }
                ]



      {students.map((student) => (
        <ClassStudent 
          key={student.sr}
          sr={student.sr}
          roll_number={student.roll_number}
          Name={student.Name}
          father={student.father}
          mother={student.mother}
          phone_number={student.phone_number}
        />
      ))}
    
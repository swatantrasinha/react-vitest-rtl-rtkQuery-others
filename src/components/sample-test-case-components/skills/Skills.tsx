import { useState, useEffect } from 'react'
import { SkillsProps } from './Skills.types'

export const Skills = (props: SkillsProps) => {
  const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1001)
  }, [])
  return (
    <>
    <h1>Page2- getAllBy, queryBy and findBy</h1>
    <h3>findBy has default timeout of 1000ms - we can give timeout if need to wait more</h3>
    <hr />
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}
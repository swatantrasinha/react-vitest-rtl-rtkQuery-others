import React from 'react'

type GreetProps= {
    name?: string;
}
const Greet = (props: GreetProps) => {
  return (
    <div>hello {props.name ? props.name : "Guest"}</div>
  )
}

export default Greet;
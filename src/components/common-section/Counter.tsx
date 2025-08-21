"use client"
import CountUp from 'react-countup';


const Counter = ({count,decimals}: {count: number, decimals: number}) => {
  return (
    <>
    <CountUp end={count} decimals={decimals} enableScrollSpy={true} />
    </>
  )
}

export default Counter
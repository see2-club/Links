"use client";

import { useState, useEffect } from 'react'
import { Wallet } from 'lucide-react'

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 6,
    minutes: 7,
    seconds: 8,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 }
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
        } else if (prevTime.days > 0) {
          return { days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prevTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
          Coming Soon to See2.link
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-400">
          Get ready to showcase your lifestyle with the next generation of Web3 ID
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-gray-900 rounded-lg p-4">
              <div className="text-4xl md:text-5xl font-bold text-neon-green mb-2">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm uppercase text-gray-500">{unit}</div>
            </div>
          ))}
        </div>

        {/* <button className="bg-neon-green text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-80 transition duration-300 flex items-center justify-center mx-auto mb-8">
          <Wallet className="mr-2" />
          Connect Wallet
        </button> */}

        <div className="text-sm text-gray-500">
          Be the first to know when we launch. No spam, just the good stuff.
        </div>
      </div>
    </div>
  )
}
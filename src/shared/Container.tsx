import React from 'react'

type ChildrenProp = {
  children: React.ReactNode
}



const Container = ({ children }: ChildrenProp) => {
  return (
    <div className={`container overflow-hidden xl:px-[130px] sm:px-2 mx-auto `}>
      {children}
    </div>
  )
}

export default Container
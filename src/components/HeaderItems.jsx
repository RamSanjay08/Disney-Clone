import React from 'react'

const HeaderItems = ({title,Icon}) => {
  return (
    <div className='flex items-center gap-3 text-[1rem] text-white font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'>
      <Icon />
      <h2 className=''>{title}</h2>
    </div>
  )
}

export default HeaderItems
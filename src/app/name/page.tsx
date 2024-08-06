"use client"
import React from 'react'
import  {useRouter}  from 'next/navigation';

function Name() {
  const router = useRouter();
  return (
    <div>
      Hi, my name is Nabeel Imran
      <br/>
      <button type='button' onClick={()=> router.push('/name/address')}>
        get address
      </button>
    </div>
    
  )
}

export default Name;
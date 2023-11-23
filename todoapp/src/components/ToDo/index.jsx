import React from 'react'

const Todo = ({list,remove}) => {
  return (
    <div className='Todo'>
         {list.length>0?(
      <ul className='list'>
        {list.map((x,i)=>(
          <div>
              <li key={i}>
                {x}
                <button className='deletetodo' onClick={()=>{
                  remove(x)
                }}>Delete</button>
              </li>
          </div>
        ))}

      </ul>
   ):null}
    </div>
  )
}

export default Todo
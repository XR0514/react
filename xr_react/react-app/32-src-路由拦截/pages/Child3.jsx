/* eslint-disable no-unused-vars */
import React, { useState, Suspense } from 'react'

const Box = React.lazy(() => import('../components/Box'))

const Child3 = () => {

  const [show, setShow] = useState()

  return (
    <div>
      <h2>Child3</h2>
      <button onClick={() => setShow(true)}>展示Box</button>
      <Suspense fallback={<div style={{width: 300, height: 300, background: 'rgba(0,0,0,0.5)', color: 'white'}}>加载中</div>}>
        {show && <Box></Box>}
      </Suspense>
    </div>
  )
}

export default Child3
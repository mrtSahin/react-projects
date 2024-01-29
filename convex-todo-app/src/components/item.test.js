import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend/expect'
import userEvent from '@testing-library/user-event'

import item from './item'

test ('duzgun render edildi mi',()=>{
  const {getByPlaceholderText, debug}= render(<item/>)
  debug()
})
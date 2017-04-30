import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

import Layout from './Layout'

import 'tachyons'
import 'font-awesome/css/font-awesome.css'
import './index.css'

moment.locale('es')

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
)

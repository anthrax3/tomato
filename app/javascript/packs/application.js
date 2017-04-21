require('bootstrap/dist/css/bootstrap.css')

import m from 'mithril'
import {main as Main} from 'container'
import Clock from 'clock'
import Task from 'task'

m.mount(document.querySelector('#main'), {
  view: vnode => {
    return(
      <Main>
        <Clock></Clock>
        <Task></Task>
      </Main>
    )
  }
})

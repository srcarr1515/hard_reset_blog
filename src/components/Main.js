import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'

const Main = () => (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/blog' component={Blog}/>
      </Switch>
  )

  export default Main
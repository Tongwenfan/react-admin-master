import { Switch, Route, Redirect } from 'react-router-dom'
import { Suspense } from 'react'

function ViewRouter({ routes }) {
  return (
    <Suspense fallback={ <div>loading...</div> }>
      <Switch>
        {
          routes.map(o => (
            <Route
              key={ o.path }
              path={ o.path }
              render={ props => <o.component { ...props } routes={o.ChildMenus} /> }
            />
          ))
        }
        <Route exact path="/" render={() => <Redirect to='/dashboard' />} />
      </Switch>
    </Suspense>
  )
}

export default ViewRouter

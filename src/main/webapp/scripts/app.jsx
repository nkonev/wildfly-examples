void function() { 'use strict'

var {DefaultRoute, Route, RouteHandler} = ReactRouter

var NavItem = createActiveRouteComponent('li')

var ActivePara = createActiveRouteComponent('p', {link: false})

var App = React.createClass({
  render() {
    return <div className="App container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <span className="navbar-brand">Дикий залёт</span>
          <ul className="nav navbar-nav">
            <NavItem to="dashboard">Главная</NavItem>
            <NavItem to="tasks">Почта</NavItem>
            <li>
              <p className="navbar-text"><span className="glyphicon glyphicon-user"></span>Вся мощь Wildfly</p>
            </li>
          </ul>
        </div>
      </nav>
      <RouteHandler/>
      <hr/>
      <footer>
        Подвал
      </footer>
    </div>
  }
})

var Dashboard = React.createClass({
  render() {
    return <div className="Dashboard">
      <h2>Dashboard</h2>
      <p>I'm a regular paragraph.</p>
      <ActivePara to="dashboard" activeClassName="special">
        I get highlighted because the Dashboard route is active.
      </ActivePara>
    </div>
  }
})

var Tasks = React.createClass({
  render() {
    return <div className="Tasks row">
      <div className="col-md-3">
        <ul className="nav nav-pills nav-stacked">
          <NavItem to="e-mail-react">Почта React</NavItem>
          <NavItem to="e-mail-jsf">Почта jsf</NavItem>
          <NavItem to="hibernate">Hibernate</NavItem>
          <li>
            <p className="navbar-text"><code>&lt;li&gt;</code>s in this nav get the <code>active</code> class</p>
          </li>
        </ul>
      </div>
      <div className="col-md-9">
        <ActivePara to="hibernate" activeClassName="special">
          I get highlighted when the My Tasks route is active.
        </ActivePara>
        <RouteHandler/>
      </div>
    </div>
  }
})

var TasksDashboard = React.createClass({
  render() {
    return <div className="TasksDashboard">
      <h2>Tasks Dashboard</h2>
    </div>
  }
})

var Email = React.createClass({
  render() {
    return <div className="Email">
      <h2>Почта</h2>
    </div>
  }
})

var EmailJsf = React.createClass({
  render() {
    return <div className="Email">
      <a href="mail.jsf">Послать почту jsf</a>
    </div>
  }
})

var MyTasks = React.createClass({
  render() {
    return <div className="MyTasks">
      <h2>Hibernate</h2>
    </div>
  }
})

var routes = <Route handler={App}>
  <DefaultRoute name="dashboard" handler={Dashboard}/>
  <Route name="tasks" handler={Tasks}>
    <DefaultRoute handler={TasksDashboard}/>
    <Route name="e-mail-react" path="e-mail-react" handler={Email}/>
    <Route name="hibernate" path="hibernate" handler={MyTasks}/>
    <Route name="e-mail-jsf" path="e-mail-jsf" handler={EmailJsf}/>
  </Route>
</Route>

ReactRouter.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('content'))
})

}()
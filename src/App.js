import AuthorPage from "./Features/author/AuthorPage";
import TasksPage from "./Features/tasks/TasksPage/index";
import TaskPage from "./Features/tasks/TaskPage/index";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyledNavLink, NavStyled, UlStyled } from "./styled";

export default () => (
  <HashRouter>
    <NavStyled>
      <UlStyled>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </li>
      </UlStyled>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </NavStyled>
  </HashRouter>
);

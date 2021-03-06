import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import { Container } from '@material-ui/core'

import {
  AppModals,
  PersistentDrawerLeft
} from '../../components'
import Inbox from './Inbox'
import Today from './Today'
import Upcoming from './Upcoming'
import ProjectSingle from './ProjectSingle'
import TagSingle from './TagSingle'

const Dashboard = () => (
  <PersistentDrawerLeft>
    <AppModals />
    <Container maxWidth="md">
      <Switch>
        <Route path="/app/projects/:id">
          <ProjectSingle />
        </Route>
        <Route path="/app/tags/:id">
          <TagSingle />
        </Route>
        <Route path="/app/upcoming">
          <Upcoming />
        </Route>
        <Route path="/app/today">
          <Today />
        </Route>
        <Route path="/app">
          <Inbox />
        </Route>
      </Switch>
    </Container>
  </PersistentDrawerLeft>
)

export default Dashboard

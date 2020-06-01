import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton
} from '@material-ui/core'

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import AddIcon from '@material-ui/icons/Add'

import { ProjectType } from '../../store/reducers/project/types'
import { TagType } from '../../store/reducers/tag/types'
import { useStyles } from './styles'

type ItemType = ProjectType | TagType

type ListItemCollapseProps = {
  title: string
  list: ItemType[]
  onAdd: () => void
}

const ListItemCollapse: React.FC<ListItemCollapseProps> = ({ title, list, onAdd }) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const history = useHistory()

  return (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemIcon className={classes.listItemIcon}>
          {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
      {!open && (
        <ListItemIcon className={classes.listItemAddIcon}>
          <IconButton onClick={onAdd}>
            <AddIcon />
          </IconButton>
        </ListItemIcon>
      )}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {list.map(({ id, name }) => (
            <ListItem key={id} button className={classes.nested} onClick={() => {
              history.push(`/app/${title.toLowerCase()}/${id}`)
            }}>
              <ListItemIcon className={classes.listItemIcon}>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
          <ListItem button className={classes.nested} onClick={onAdd}>
            <ListItemIcon className={classes.listItemIcon}>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Project" />
          </ListItem>
        </List>
      </Collapse>
    </>
  )
}

export default ListItemCollapse

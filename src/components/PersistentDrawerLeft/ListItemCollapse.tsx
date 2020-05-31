import React, { useState } from 'react'
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

import { useStyles } from './styles'

type ListItemCollapseProps = {
  title: string
  list: string[]
  onAdd: () => void
}

const ListItemCollapse: React.FC<ListItemCollapseProps> = ({ title, list, onAdd }) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

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
          {list.map((item, i) => (
            <ListItem key={i} button className={classes.nested}>
              <ListItemIcon className={classes.listItemIcon}>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <ListItemText primary={item} />
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

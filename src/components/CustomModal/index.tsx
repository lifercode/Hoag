import React from 'react'
import { Modal } from '@material-ui/core'

import { useStyles } from './styles'

type CustomModalProps = {
  open: boolean,
  closeModal: () => void
}

const CustomModal: React.FC<CustomModalProps> = ({ open, closeModal }) => {
  const classes = useStyles()

  return (
    <Modal open={open} onClose={closeModal}>
      <div className={classes.paper}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aut delectus sit, odit enim architecto quos facilis nobis deserunt fugit quod ea veniam cupiditate eaque, quis dolore corrupti officiis. Excepturi!</p>
      </div>
    </Modal>
  )
}

export default CustomModal

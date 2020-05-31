import React from 'react'
import { Modal } from '@material-ui/core'

import { useStyles } from './styles'

type CustomModalProps = {
  open: boolean,
  closeModal: () => void
}

const CustomModal: React.FC<CustomModalProps> = ({ children, open, closeModal }) => {
  const classes = useStyles()

  return (
    <Modal open={open} onClose={closeModal}>
      <div className={classes.paper}>
        {children}
      </div>
    </Modal>
  )
}

export default CustomModal

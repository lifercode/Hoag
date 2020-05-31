import React, { useContext } from 'react'

import { AppContext } from '../../store'
import { Types } from '../../store/reducers/types'
import {
  CustomModal,
  CreateTask,
  CreateProject,
  CreateTag
} from '../'

const AppModals = () => {
  const { state, dispatch } = useContext(AppContext)

  const closeModal = (type: string) => dispatch({ type })

  return (
    <>
      <CustomModal
        open={state.modalOpen.createTask}
        closeModal={() => closeModal(Types.TOGGLE_MODAL_CREATE_TASK)}
      >
        <CreateTask />
      </CustomModal>

      <CustomModal
        open={state.modalOpen.createProject}
        closeModal={() => closeModal(Types.TOGGLE_MODAL_CREATE_PROJECT)}
      >
        <CreateProject />
      </CustomModal>

      <CustomModal
        open={state.modalOpen.createTag}
        closeModal={() => closeModal(Types.TOGGLE_MODAL_CREATE_TAG)}
      >
        <CreateTag />
      </CustomModal>
    </>
  )
}

export default AppModals

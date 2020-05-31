import React from 'react'
import { Typography } from '@material-ui/core'

type PageHeaderProps = {
  title: string
}

const styles = {
  paddingTop: 30,
  paddingLeft: 15
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => (
  <Typography
    variant="h6"
    component="h2"
    gutterBottom
    style={styles}
  >
    {title}
  </Typography>
)

export default PageHeader

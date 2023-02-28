import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const ProfileCard = () => {
  return (
    <Link>
      <StaticImage src='../images/into-sun.jpg' />
      <h3>This is the Title</h3>
    </Link>
  )
}

export default ProfileCard

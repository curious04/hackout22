import React from 'react'
import {Video} from "../types"
import { NextPage } from 'next'

interface IProps {
    post: Video;
}

const PhotoCard: NextPage<IProps> = ({post}) => {
  return (
    <div>Photocard</div>
  )
}

export default PhotoCard
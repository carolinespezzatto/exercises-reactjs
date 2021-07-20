import React from 'react'
import { BLOG } from './constants'

export const Blog = () => {

    const values = Object.keys(BLOG)
  
    const renderBlog = (index) => {
      return (
        <div key={index}>
          <img src={BLOG.img03} alt=""></img>
        </div>
      )   
    }
  
    return (
      <div>
        {values.map(renderBlog)}
      </div>
    )
  }

export default Blog
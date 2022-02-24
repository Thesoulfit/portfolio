import React from 'react'
import { projects } from '../../data'
import Project from '../project/Project'
import "./projectList.css"


function ProjectList() {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Create & Inspire</h1>
            <p className="pl-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur mollitia totam aperiam, facilis suscipit unde autem excepturi obcaecati quae modi rerum hic, aliquam repellat, officiis commodi magnam quia recusandae?
            </p>
        </div>
        <div className="pl-list">
            {projects.map((item) => (
              <Project key={item.id} img={item.img} link={item.link}/>
            ))}
            
        </div>
    </div>
  )
}

export default ProjectList
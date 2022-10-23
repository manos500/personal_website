import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { projectsData, projectsNav } from '../constants';
import WorksItems from './WorksItems';


const Works = () => {
  const [item,setItem] = useState({name: 'all'});
  const [projects,setProjects] = useState([]);
  const [active,setActive] = useState(0);

  useEffect(() =>{
    if(item.name === "all"){
      setProjects(projectsData);

    }
    else{
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name
      });
      setProjects(newProjects);
    }
  },
  [item]);

  const handleClick = (e,index) => {
    setItem({name: e.target.textContent});
  };
  return (
    <div className='md:p-20 p-6'>
    <div className='work_filters'>{projectsNav.map((item, index) => {
        return (
            <span onClick={(e) => {
              handleClick(e,index);
            }} className="work_item" key={index}>{item.name}</span>
        )
    })}
    </div>
        <div className="work_container grid md:grid-cols-3 gap-3 xs:grid-cols-2">
            {projects.map((item) => {
                return <WorksItems item={item} key={item.id}/>
            })}
     </div>
    </div>
  )
}

export default Works
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"


const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="2014-2018"
        iconStyle={{background: "#3e497a", color:"#000"}}
        icon={<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title">
            Frsico High School - Frisco, TX</h3>
            <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="2018-2020"
        iconStyle={{background: "#3e497a", color:"#000"}}
        icon={<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title">
            Collin College - Plano, TX</h3>
            <p>Business Associate Degree</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience

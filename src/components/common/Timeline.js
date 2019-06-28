import React from 'react';

import {Timeline, TimelineEvent} from 'react-event-timeline';

const TimelineComp = () => (
  <Timeline>
    <TimelineEvent
      title="iboss Cybersecurity"
      createdAt="June 2017 - PRESENT"
      icon={<i />}
      iconColor="#51af61"
    >
      <p>
        Created RESTful web services and APIs using the Spring Boot framework.
      </p>
      <p>
        Migrated existing accounts from legacy code to newer implementation designed
        to enable customers to create and host custom Proxy Auto Configuration (PAC) files.
      </p>
      <p>
        Restructured Cloud Network Operations Center (CNOC), using several AWS services
        (SNS, SQS, and S3), to support accurate metrics, alerts, and horizontal-scaling.
      </p>
      <p>
        Integrated the iboss cloud platform with various cloud services
        (Microsoft CASB, Microsoft Azure, and Okta) to allow customers to more easily manage their users.}
      </p>
      <p>
        Led small team in design and implementation of Chrome Extension used to manage students
        within Google Classroom.
      </p>
    </TimelineEvent>
    <TimelineEvent
      title="Amazon Robotics"
      createdAt="Summer(s) 2015 - 2016"
      icon={<i />}
      iconColor="#f07730"
    >
      <p>
        Worked in an agile environment within small software teams to develop software and tools to meet project goals.
      </p>
      <p>
        Designed and built both modular Java applications and websites.
      </p>
      <p>
        Gained valuable hands-on experience in software design and development.
      </p>
    </TimelineEvent>
    <TimelineEvent
      title="Web Developer WPI - HUA"
      createdAt="Sept. 2013 - June 2016"
      icon={<i />}
      iconColor="#a42f32"
    >
      <p>
        Designed, built, and maintained web pages for JazzHistoryDatabase.com.
      </p>
      <p>
        Helped standardized development processes and tools among other student developers.
      </p>
    </TimelineEvent>
  </Timeline>
);

export default TimelineComp;

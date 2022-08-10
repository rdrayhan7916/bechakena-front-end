import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import './OrderTimeline.css'
const OrderTimeline = () => {
  return (
    <div>
      <h3>Timeline</h3>
      <hr></hr>
      <Timeline position="" className='timeline'>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 PM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='secondary' className='dot' />
            <TimelineConnector className='connector' />
          </TimelineSeparator>
          <TimelineContent>
            <h5>Order Placed</h5>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='secondary' className='dot' />
            <TimelineConnector className='connector' />
          </TimelineSeparator>
          <TimelineContent>
            <h5>Order Placed</h5>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='secondary' className='dot' />
            <TimelineConnector className='connector' />
          </TimelineSeparator>
          <TimelineContent>
            <h5>Order Placed</h5>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='secondary' className='dot' />
            <TimelineConnector className='connector' />
          </TimelineSeparator>
          <TimelineContent>
            <h5>Order Placed</h5>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='secondary' className='dot' />
            <TimelineConnector className='connector' />
          </TimelineSeparator>
          <TimelineContent>
            <h5>Order Placed</h5>
          </TimelineContent>
        </TimelineItem>


      </Timeline>

    </div>
  );
};

export default OrderTimeline;
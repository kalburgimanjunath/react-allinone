import React from 'react';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
export default function Topics() {
  const topics = [
    'topic1',
    'topic2',
    'topic3',
    'topic4',
    'topic5',
    'topic6',
    'topic7',
  ];
  return (
    <div>
      <div>
        {topics.map((item) => {
          return (
            <Link to="#">
              <Badge as="span" pill bg="light" text="dark">
                {item.toUpperCase()}
              </Badge>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

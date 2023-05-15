"use client"; // This is a client component 👈🏽

import { useState } from 'react'

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [subChecked, setSubChecked] = useState({});
  let topics = [
    {
      id: 1,
      name: 'Topic 1',
      subtopics: [
        {
          id: 1,
          name: 'Subtopic a',
        },
        {
          id: 2,
          name: 'Subtopic b',
        },
      ],
    },
    {
      id: 2,
      name: 'Topic 2',
      subtopics: [
        {
          id: 3,
          name: 'Subtopic c',
        },
        {
          id: 4,
          name: 'Subtopic d',
        }
      ]
    },
  ]

  const handleTopicChange = (e) => {
    e.preventDefault();
    setChecked(e.target.checked);
    let topicId = parseInt(e.target.id);
    let subtopicIds = topics.find((topic) => topic.id === topicId).subtopics.map((subtopic) => subtopic.id);
    let newSubChecked = {};
    subtopicIds.forEach((id) => {
      newSubChecked[id] = e.target.checked;
    });
    setSubChecked({ ...subChecked, ...newSubChecked });
  };

  return (
    <div>
      {topics.map((topic) => (
        <div key={topic.id}>
          <input type="checkbox" id={topic.id} name={topic.name} value={topic.name} checked={checked} onChange={handleTopicChange} />
          <label htmlFor={topic.name}>{topic.name}</label>
          {topic.subtopics.map((subtopic) => (
            <div key={subtopic.id}>
              <input type="checkbox" id={subtopic.id} name={subtopic.name} value={subtopic.name} checked={subChecked[subtopic.id]}  />
              <label htmlFor={subtopic.name}>{subtopic.name}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
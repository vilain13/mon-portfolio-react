import React, { useEffect, useState } from 'react';
import ProgressBar from '../progress-bar';
import data from '../../data/competences-data.json';

function ProgressList  () {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    // Charger les données depuis le fichier JSON
    setProgressData(data);
  }, []);

  return (
    <div>
      {progressData.map((item, index) => (
        <ProgressBar
          key={index}
          title={item.title}
          percentage={item.percentage}
        />
      ))}
    </div>
  );
}

export default ProgressList;

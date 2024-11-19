import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ProjectCards({ img, title, summary }) {
  const [isVisible, setIsVisible] = useState(false); // État pour savoir si l'élément est visible

  // Hook pour observer l'élément lorsque celui-ci entre dans le viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Quand la carte devient visible, on active l'animation
            observer.unobserve(entry.target); // On arrête d'observer l'élément
          }
        });
      },
      {
        threshold: 0.5, // L'élément doit être à 50% visible pour déclencher l'animation
      }
    );

    const card = document.querySelector('.card');
    if (card) {
      observer.observe(card); // On commence à observer l'élément
    }

    return () => {
      if (card) {
        observer.unobserve(card); // Nettoyage de l'observateur à la destruction du composant
      }
    };
  }, []);

  return (
    <article className={`card ${isVisible ? 'active' : ''}`}>
      <div className="card-img">
        <img src={img} alt={title} />
        <div className="overlay"></div>
      </div>

      <div className="card__text">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </article>
  );
}

ProjectCards.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default ProjectCards;

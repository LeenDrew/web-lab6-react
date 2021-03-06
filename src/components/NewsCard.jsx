import React from 'react';
import PropTypes from 'prop-types';

function NewsCard(props) {
  const { imgAlt, title, bodyText } = props;

  return (
    <div className="card news-card">
      <img src="https://placehold.it/350x175" className="card-img-top" alt={imgAlt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{bodyText}</p>
        <button type="button" className="btn btn-primary">
          Читать далее
        </button>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
};

export default NewsCard;

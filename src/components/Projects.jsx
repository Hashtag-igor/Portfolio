import Carousel from './Carousel'
import PropTypes from 'prop-types';

export default function Projects({ title, description, link, carouselsData }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{link}</p>
        <div>
          {carouselsData.map((carouselData, index) => (
            <div key={index}>
              <h2>{carouselData.title}</h2>
              <Carousel images={carouselData.images} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

    Projects.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    carouselsData: PropTypes.arrayOf(
      PropTypes.shape({
        images: PropTypes.array.isRequired,
      })
    ).isRequired,   
  };

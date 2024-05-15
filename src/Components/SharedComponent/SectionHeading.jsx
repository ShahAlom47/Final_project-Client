import PropTypes from 'prop-types';

const SectionHeading = ({h1,p}) => {
    return (
        <div className="header flex flex-col justify-center items-center my-10">
        <p className='text-yellow-500 italic text-lg font-semibold'>{p}</p>
        <h1 className='text-4xl my-5 border-b-4 border-t-4 p-4'>{h1}</h1>
    </div>
    );
};

export default SectionHeading;
SectionHeading.propTypes = {
    h1: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
  };
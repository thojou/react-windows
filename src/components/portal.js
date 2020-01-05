import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ target, children }) => {
  const element = document.querySelector(target);
  return element && ReactDOM.createPortal(children, element);
};

Portal.propTypes = {
  target: PropTypes.string,
  children: PropTypes.element
};

Portal.defaultProps = {
  target: 'body'
};

export default Portal;

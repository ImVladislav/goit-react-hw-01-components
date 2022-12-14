import PropTypes from 'prop-types';
import { StyledTitle } from './PageTitle.styled';

export const Title = ({ name }) => {
  return <StyledTitle>{name}</StyledTitle>;
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
};
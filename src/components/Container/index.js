import styled from "styled-components";
import PropTypes from "prop-types";

export const Container = styled.div`
  display: ${props => props.display ? props.display : "flex"};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : "center"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "center"};
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  
`;

Container.propTypes = {
    display: PropTypes.string,
    flexDirection: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
}
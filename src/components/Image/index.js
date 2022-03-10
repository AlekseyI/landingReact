import styled from "styled-components";
import PropTypes from "prop-types";

export const Image = styled.div`
  background: ${(props) => (props.url ? `url('${props.url}')` : "")};
  background-size: ${props => props.backgroundSize ? props.backgroundSize : "contain"};
  background-repeat: ${props => props.backgroundRepeat ? props.backgroundRepeat : "no-repeat"};
  ${(props) => (props.width ? `width: ${props.width}` : null)}
  ${(props) => (props.height ? `height: ${props.height}` : null)}
`;

Image.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundSize: PropTypes.string,
  backgroundRepeat: PropTypes.string,
};

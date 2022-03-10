import styled from "styled-components";
import PropTypes from "prop-types";

export const Typography = styled.div`
  font-size: ${props => props.fontSize ? props.fontSize : "20px"};
  font-weight: ${props => props.fontWeight ? props.fontWeight : "400"};
  font-style: ${props => props.fontStyle ? props.fontStyle : "normal"};
  line-height: ${props => props.lineHeight ? props.lineHeight : "20px"};
  color: ${props => props.color ? props.color : "black"};
  text-align: ${props => props.textAlign ? props.textAlign : "left"};
    `;

Typography.propTypes = {
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    fontStyle: PropTypes.string,
    lineHeight: PropTypes.string,
    color: PropTypes.string,
    textAlign: PropTypes.string
}
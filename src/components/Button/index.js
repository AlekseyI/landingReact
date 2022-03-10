import styled from "styled-components";
import PropTypes from 'prop-types';
import {COLOR} from "../../constants/color";


export const Button = styled.button`
  width: ${props => props.width ? props.width : "160px"};
  height: ${props => props.height ? props.height : "60px"};
  border-radius: ${props => props.borderRadius ? props.borderRadius : "80px"};
  border-width: ${props => props.borderWidth ? props.borderWidth : "0"};
  background: ${props => props.primary ? COLOR.orange : "white"};
  color: ${props => props.color ? props.color : "black"};
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  cursor: pointer;
`;

Button.propTypes = {
    primary: PropTypes.bool,
    color: PropTypes.string,
    background: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string,
    borderWidth: PropTypes.string,
}
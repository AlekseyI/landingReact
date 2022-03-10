import styled from "styled-components";
import PropTypes from "prop-types";

export const Page = styled.div`
  background: ${(props) => (props.url ? `url('${props.url}')` : "")};
  background-repeat: no-repeat;
  background-size: cover;
`;

Page.propTypes = {
  url: PropTypes.string,
};

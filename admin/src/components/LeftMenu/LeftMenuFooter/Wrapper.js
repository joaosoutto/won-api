import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${props => props.theme.main.colors.strapi['blue-darker']};
  bottom: 0;
  .poweredBy {
    width: 100%;
    bottom: 0;
    height: 3rem;
    line-height: 3rem;
    background-color: ${({ theme }) => theme.main.colors.won.blue};
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.main.colors.strapi['gray-light']};

    a {
      color: ${({ theme }) => theme.main.colors.won.orange};
    }
  }
`;

const A = styled.a`
  &:hover {
    color: #007bff;
    text-decoration: underline;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        strapi: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
export { A };

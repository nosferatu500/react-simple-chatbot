import styled from 'styled-components';

const FloatButton = styled.a`
  align-items: center;
  cursor: pointer;
  background: ${({ theme }) => theme.headerBgColor};
  bottom: ${({ theme }) => theme.floatBottom};
  border-radius: 100%;
  display: flex;
  fill: ${({ theme }) => theme.floatBackground};
  height: ${({ theme }) => theme.floatHeight};
  justify-content: center;
  position: fixed;
  left: ${({ theme }) => theme.floatLeft};
  right: ${({ theme }) => theme.floatRight};
  transform: ${props => props.opened ? 'scale(0)' : 'scale(1)'};
  transition: transform .3s ease;
  width: ${({ theme }) => theme.floatWidth};
  z-index: 999;
`;

// box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);


FloatButton.defaultProps = {
  theme: {
    headerBgColor: '#6e48aa',
    headerFontColor: '#fff',
  },
};

export default FloatButton;

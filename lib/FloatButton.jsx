import styled from 'styled-components';

const FloatButton = styled.a`
  align-items: center;
  cursor: pointer;
  background: ${({ theme }) => theme.headerBgColor};
  bottom: 32px;
  border-radius: 100%;
  display: flex;
  fill: ${({ theme }) => theme.background};
  height: 56px;
  justify-content: center;
  position: fixed;
  left: 32px;
  transform: ${props => props.opened ? 'scale(0)' : 'scale(1)'};
  transition: transform .3s ease;
  width: 56px;
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

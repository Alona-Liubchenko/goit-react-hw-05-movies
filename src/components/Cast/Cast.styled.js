import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
  list-style: none;
  padding: ${p => p.theme.space[0]};
  justify-content: center;
`;
export const Item = styled.li`
  flex-basis: calc(100% / 5 - 16px);
  height: 100%;
`;
export const Image = styled.img`
  align-items: center;
  justify-content: center;
  display: block;
  margin: 0 auto;

  height: 380px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

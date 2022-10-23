import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  background-color: #be444475;
`;
export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin: ${p => p.theme.space[5]};
  text-transform: uppercase;
  align-items: center;
  text-align: center;
`;
export const MovieList = styled.ul`
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
export const Link = styled(NavLink)`
  text-decoration: none;

  &.active {
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;
export const MovieTitle = styled.h2`
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  color: ${p => p.theme.colors.text};
  justify-content: center;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
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

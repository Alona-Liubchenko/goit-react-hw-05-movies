import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: ${p => p.theme.space[4]}px;
  background-color: #be444475;
`;
export const Info = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1000;
  padding: ${p => p.theme.space[3]}px;
  border-bottom: ${p => p.theme.borders.box};
  box-shadow: ${p => p.theme.shadows.shadow};
  background-color: #f12222;
`;
export const Back = styled(NavLink)`
  display: flex;
  width: 120px;
  height: 28px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  cursor: pointer;
  margin: ${p => p.theme.space[3]}px;
  background: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`;

export const Box = styled.div`
  display: flex;
  gap: ${p => p.theme.space[6]}px;
`;
export const Image = styled.img`
  align-items: center;
  justify-content: center;
  display: block;
  margin: 0 auto;
  height: 380px;
`;
export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin: ${p => p.theme.space[5]};
  text-transform: uppercase;
`;
export const DetailsTitle = styled.h2`
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  color: ${p => p.theme.colors.text};
  /* justify-content: center; */
  /* text-align: center; */
  margin: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  /* justify-content: center; */
`;
export const Link = styled(NavLink)`
  display: inline-block;
  width: 64px;
  height: 28px;
  text-align: center;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  cursor: pointer;
  margin: ${p => p.theme.space[3]}px;

  &.active {
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;

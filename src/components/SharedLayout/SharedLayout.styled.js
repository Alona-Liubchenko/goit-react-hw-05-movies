import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Heder = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  padding: ${p => p.theme.space[3]}px;
  border-bottom: ${p => p.theme.borders.box};
  box-shadow: ${p => p.theme.shadows.shadow};
  background-color: #f12222;
`;
export const Container = styled.div``;
export const Navigate = styled.nav`
  gap: ${p => p.theme.space[5]}px;
  display: flex;
  justify-content: center;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  cursor: pointer;

  &.active {
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;

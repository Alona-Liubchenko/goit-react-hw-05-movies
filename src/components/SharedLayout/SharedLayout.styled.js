import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Heder = styled.div`
  padding: ${p => p.theme.space[3]}px;
  border-bottom: ${p => p.theme.borders.box};
  box-shadow: ${p => p.theme.shadows.shadow};
  background-color: #f12222c9;
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
  /* gap: ${p => p.theme.space[4]}px; */
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  &.active {
    background: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Searchbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.m};
  border: ${p => p.theme.borders.none};
  outline: none;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 64px;
  height: 48px;
  border: 0;

  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  justify-content: center;

  background-color: #be444475;
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

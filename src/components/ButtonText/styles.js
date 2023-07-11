import styled from 'styled-components';
import { Link } from "react-router-dom";
import font from '../../Styles/fonts';
const fontFamily = font.FONTS;

export const Container = styled(Link)`
    background: none;
    border: none;

    /* color: ${({ theme, isActive }) => isActive ? theme.COLORS.HIGHLIGHT_200 : theme.COLORS.GRAY_100}; */
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    font-family: ${fontFamily.FONT_400};
    font-size: 1.6rem;
    letter-spacing: 0.1rem;

    > &:hover {
        color: ${({ theme }) => theme.COLORS.HIGHLIGHT_200};
        background-color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;
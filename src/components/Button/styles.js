import styled from "styled-components";
import font from "../../Styles/fonts";
const fontFamily = font.FONTS;

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT_200};
    color: #121212;

    height: 5.6rem;
    border: 0;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    border-radius: 1rem;

    font-family: ${fontFamily.FONT_300};
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`;
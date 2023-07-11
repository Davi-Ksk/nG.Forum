import styled from 'styled-components';
import font from '../../Styles/fonts';
const fontFamily = font.FONTS;

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

    > #logo {
        margin-top: 15.8rem;
    }

    > #button-text {
        margin-top: 3.2rem;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        gap: 10.8rem;

        padding: 0 7rem ;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    }

`;

export const Hero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    text-align: center;
    max-width: clamp(30rem, 30rem + 15vw, 60rem);
    
    > h1 {
        font-family: ${fontFamily.FONT_100};
        color: ${({ theme }) => theme.COLORS.WHITE};

        > span {
            color: ${({ theme }) => theme.COLORS.HIGHLIGHT_100};
        }
    }

    > p:first-of-type {
        font-family: ${fontFamily.FONT_300};
        font-size: 2.4rem;
        margin-bottom: 2.4rem;
    }

    > p {
        font-family: ${fontFamily.FONT_300};

        > a {
        color: ${({ theme }) => theme.COLORS.HIGHLIGHT_100};
        }
    }


`;

export const LoginWrapper = styled.div`

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    width: clamp(25rem, 100vw, 40rem);
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 1rem;

    padding: 4rem;

    > h1 {
        font-family: ${fontFamily.FONT_300};
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin-bottom: 2.5rem;

    }

    > .button-text {
        margin-top: 2.5rem;
    }


`;

export const Form = styled.form`

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    text-align: center;
    gap: 1rem;

    > input {
        width: clamp(30rem, 20rem + 15vw, 34rem);
    }
`;
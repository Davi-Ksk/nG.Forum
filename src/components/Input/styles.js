import styled from 'styled-components';
import font from '../../Styles/fonts';
const fontFamily = font.FONTS;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    > label {
        font-family: ${fontFamily.FONT_300};
        font-size: 1.8rem;
        line-height: 100%;
        margin-bottom: 8px;
    }

    > .input-field {
        width: 100%;
        display: flex;
        align-items: center;
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300 };

        margin-bottom: 0.8rem;
        border-radius: 1rem;

        > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem 1.8rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100 };

        font-family: ${fontFamily.FONT_300};
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;


        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300 };
        }

        
        &:focus {
            border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
            border-radius: 1rem;
        }

        }

    
        > svg {
            margin-left: 1.6rem;
            
        }
    }



    `;
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.font};
        transition: all 0.50s linear;
    }

    a {
        color: ${({ theme }) => theme.colors.link.text};
        cursor: pointer;
    }

    button {
        background-color: ${({ theme }) => theme.colors.button.background};
        border: 0;
        border-radius: 4px;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-family: ${({ theme }) => theme.font};
        font-size: 14px;
        padding: 12px 24px;
        margin-top: 5px;
    }

    button.btn {
        background-color: ${({ theme }) => theme.colors.button.background};
        color: ${({ theme }) => theme.colors.button.text};
    }
`;
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}

:root {
    --color--brand1: #ffda3e;
    --color--brand2: #e98336;

    --color--grey-0: #0B0D0D;
    --color--grey-1: #212529;
    --color--grey-2: #DEE2E6;
    --color--grey-3: #F8F9FA;
    --color--whiteFixed: #FFFFFF;
}

button {
    cursor: pointer;
}

ul,ol,li {
    list-style: none;
}
`;

export default GlobalStyled;

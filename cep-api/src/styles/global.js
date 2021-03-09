import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline: none;
        list-style: none;
        border: none;
        box-sizing: border-box;
    }

    body , input , button{
        font: 18px 'Nunito', sans-serif;
        background-color: #eeeeee;
    }

    button{
        cursor: pointer;
    }
`;

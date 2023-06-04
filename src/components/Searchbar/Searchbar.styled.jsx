import styled from "@emotion/styled";
import {Form, Field}  from "formik";

export const SearchForm = styled(Form)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`;

export const SearchFormBtn = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-image: url("data:image/svg+xml,<svg viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' clip-rule='evenodd'/></svg>");
    background-color: #303f9f;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
&:hover {
    opacity: 1;
}
`;

export const SearchFormBtnLabel = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
`;

export const SearchFormInput = styled(Field)`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
&::placeholder {
    font: inherit;
    font-size: 18px;
}
`;
import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from 'yup';
import PropTypes from "prop-types";
import {  SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from "./Searchbar.styled";

const schema = yup.string().required();

const SearchBar = ({onSubmit}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = event => {
        setSearchValue(event.target.value.toLowerCase());
    };

    const handleSubmit = (values, {resetForm}) => {

        if (searchValue.trim() === '') {
            alert('Please, enter movie name!');
            return;
        }

        onSubmit(searchValue);
        resetForm();
    };

        return (
        <div>
            <Formik
                initialValues={{ searchValue: ''}}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <SearchForm>
                    <SearchFormInput
                        type="text"
                        name="searchValue"
                        value={searchValue}
                        onChange={handleSearchChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                    />
                    <SearchFormBtn
                        type="submit">
                        <SearchFormBtnLabel>
                            Search
                        </SearchFormBtnLabel>
                    </SearchFormBtn>
                    <ErrorMessage
                        name="searchValue"
                        component="div"
                    />
                </SearchForm>
            </Formik>
        </div>
    )
}

export default SearchBar;

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
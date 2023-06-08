import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from 'yup';
import PropTypes from "prop-types";
import {  SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from "./Searchbar.styled";

const schema = yup.string().required();

const SearchBar = ({onSubmit, query}) => {
    const [searchValue, setSearchValue] = useState(query);

    const handleSearchChange = event => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = () => {

        if (searchValue.trim() === '') {
            alert('Please, enter movie name!');
            return;
        }

        onSubmit(searchValue);
    };

        return (
        <div>
            <Formik
                initialValues={{ searchValue: query}}
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
    onSubmit: PropTypes.func.isRequired,
    query: PropTypes.string
}
import React from "react";
import {Box} from '@material-ui/core';

function Test() {

    const data = localStorage.getItem('answersData');

    console.log(data);

    return (
        <div>
            <Box justifyContent="center">

            </Box>

        </div>
    );
}

export default Test;

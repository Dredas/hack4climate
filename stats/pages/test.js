import React from "react";
import {Box} from '@material-ui/core';

function Test() {

    const data = localStorage.getItem('answersData');

    if (data) {
        console.log(JSON.parse(data));
    }

    return (
        <div>
            <Box justifyContent="center">

            </Box>

        </div>
    );
}

export default Test;

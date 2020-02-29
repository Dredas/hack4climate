import Link from "next/link";
import {LinearProgress, Button, Box, Grid} from '@material-ui/core';
import React from "react";


const Questions = () => (
    <div>
        <Box justifyContent="center">
            <LinearProgress variant="determinate" value={10}/>
            <h1 className={'question'}>Ar geriate pieną?</h1>

            <Grid
                container
                spacing={0}
                alignItems="center"
                justify="center"
                style={{ minHeight: "60vh" }}
            >
                <Grid item xs={12}>
                    <Button className={"answer-button"} size={"large"} fullWidth={true} variant={"outlined"} color={"secondary"}>
                        TAIP
                    </Button>

                    <Button className={"answer-button"} size={"large"} fullWidth={true} variant={"outlined"} color={"secondary"}>
                        NE
                    </Button>
                </Grid>
            </Grid>
        </Box>

        <style jsx global>{`
            .question {
                text-align: center;
                margin-top: 12vh;
                font-size: 40px;
            }
            
            .answer-button {
                margin-top: 5vh;
                min-height: 200px
            }
		`}</style>
    </div>
);

export default Questions;
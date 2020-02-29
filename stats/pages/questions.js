import {LinearProgress, Button, Box, Grid} from '@material-ui/core';
import React from "react";

function Questions() {
    const [question, setQuestion] = React.useState(1);
    const [progress, setProgress] = React.useState(1);


    var data = [{
        "id": "1",
        "task": "Ar geriate karvių pieną?",
    }, {
        "id": "1",
        "task": "Ar geriate karvių pieną?",
    }, {
        "id": "1",
        "task": "Ar geriate karvių pieną?",
    }];


    return (
        <div className={"background"}>
            <Box justifyContent="center">
                <LinearProgress variant="determinate" value={progress}/>
                <h1 className={'question'}>Ar geriate karvių pieną?</h1>

                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                    style={{minHeight: "60vh"}}
                >
                    <Grid item xs={12} style={{padding: "0 10vh"}}>
                        <Button className={"answer-button"} size={"large"} fullWidth={true} variant={"outlined"}
                                color={"primary"}>TAIP</Button>

                        <Button className={"answer-button"} size={"large"} fullWidth={true} variant={"outlined"}
                                color={"primary"}>NE</Button>
                    </Grid>
                </Grid>
            </Box>

            <style jsx global>{`
            body {
                display: block;
                margin: 0px;
                background-color: #98FB98;
            }
            .question {
                text-align: center;
                margin-top: 12vh;
                font-size: 40px;
            }
            
            .answer-button {
                margin-top: 30px!important;
                min-height: 200px;
                background-color: #fff!important;
            }
		`}</style>
        </div>
    );
}

    export default Questions;

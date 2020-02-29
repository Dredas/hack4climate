import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {LinearProgress, Button, Box, Grid} from '@material-ui/core';

function Questions() {
    const questionsData = [{
        "question": "Ar geriate karvių pieną?",
    }, {
        "question": "Ar valgote mėsą?",
    }, {
        "question": "Ar rūkote cigaretes?",
    }];

    const [question, setQuestion] = React.useState(0);
    const [progress, setProgress] = React.useState(1);

    const useStyles = makeStyles({
        question: {
            textAlign: 'center',
            marginTop: '12vh',
            fontSize: '40px'
        },
        button: {
            marginTop: '30px',
            minHeight: '200px',
            backgroundColor: '#fff',
            fontSize: '30px'
        }
    });

    const classes = useStyles();

    const handleNext = () => (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        const countQuestions = questionsData.length - 1;

        if(question < countQuestions) {
            setQuestion(question + 1)
        } else {
            alert('done');
        }

    };

    return (
        <div>
            <Box justifyContent="center">
                <LinearProgress variant="determinate" value={progress}/>
                <h1 className={classes.question}>{questionsData[question]['question']}</h1>

                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                    style={{minHeight: "60vh"}}
                >
                    <Grid item xs={12} style={{padding: "0 10vh"}}>
                        <Button className={classes.button} size={"large"} fullWidth={true} variant={"outlined"}
                                color={"primary"} onClick={handleNext(this)}>TAIP</Button>

                        <Button className={classes.button} size={"large"} fullWidth={true} variant={"outlined"}
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
		`}</style>
        </div>
    );
}

    export default Questions;

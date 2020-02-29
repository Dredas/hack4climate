import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {LinearProgress, Button, Box, Grid} from '@material-ui/core';
import Router from "next/router";

function Questions() {
    const questionsData = [{
        "id": "pienas",
        "question": "Ar geriate karvių pieną?",
    }, {
        "id": "mesa",
        "question": "Ar valgote mėsą?",
    }, {
        "id": "cigaretes",
        "question": "Ar rūkote cigaretes?",
    }];

    const [question, setQuestion] = React.useState(0);
    const [progress, setProgress] = React.useState(1);
    const [answers, setAnswers] = React.useState([]);

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
            '&:hover': {
                background: "#fceda7",
            },
            fontSize: '30px',
            fontWeight: "bold"
        }
    });

    const classes = useStyles();

    //Add answer data
    const onAddItem = (answer) => {
        const currentAnswers = answers;
        currentAnswers.push({"id": questionsData[question]['id'], "value": answer});

        setAnswers(currentAnswers);
    };

    //Handle next click
    const handleNext = () => (reason, answer) => {
        if (reason === 'clickaway') {
            return;
        }

        const countQuestions = questionsData.length;

        onAddItem(reason.currentTarget.value);

        if (question < countQuestions - 1) {
            setQuestion(question + 1);
            setProgress((100 / countQuestions) * (question + 1));
        } else {
            localStorage.setItem('answersData', JSON.stringify(answers));

            Router.push({
                pathname: '/pools',
            });
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
                                value={true} color={"primary"} onClick={handleNext(this)}>TAIP</Button>

                        <Button className={classes.button} size={"large"} fullWidth={true} variant={"outlined"}
                                value={false} color={"primary"} onClick={handleNext(this)}>NE</Button>
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

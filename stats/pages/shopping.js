import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import NavigateNext from '@material-ui/icons/NavigateNext';
import Link from "next/link";


function Shopping() {
    const [checked, setChecked] = React.useState([]);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        console.log(newChecked);
    };

    const useStyles = makeStyles({
        question: {
            textAlign: 'center',
            marginTop: '12vh',
            fontSize: '40px'
        },
        stickToBottom: {
            width: '100%',
            position: 'fixed',
            bottom: 0,
        },
    });

    const classes = useStyles();

    const items = [
        {id: 'pienas', value: 'Pienas'},
        {id: 'mesa', value: 'Mėsa'},
        {id: 'cigaretes', value: 'Cigaretės'},
    ];

    return (
        <div>
            <Toolbar style={{"background-color": "#fff"}}>
                <Typography variant="h6" className={classes.title}>
                    Suplanuoti pirkiniai
                </Typography>
                <div style={{marginLeft: 'auto', marginRight: -5}}>
                    <Link href="/shop" passHref>
                        <IconButton edge="end" color="inherit">
                            <AddIcon/>
                        </IconButton>
                    </Link>
                </div>
            </Toolbar>

            <List className={classes.root}>
                {items.map(value => {
                    const labelId = `checkbox-list-label-${value['id']}`;

                    return (
                        <ListItem key={value} role={undefined} dense button onClick={handleToggle(value['id'])}>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="edit" style={{color: "#fff"}}>
                                    <EditIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(value['id']) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    style={{
                                        color: "#fff",
                                    }}
                                    inputProps={{'aria-labelledby': labelId}}
                                />
                            </ListItemIcon>
                            <ListItemText style={{color: "#fff",}} id={labelId} primary={value['value']}/>
                        </ListItem>
                    );
                })}
            </List>

            <Link href="/pools" passHref>
                <BottomNavigation
                    showLabels
                    className={classes.stickToBottom}
                >
                    <BottomNavigationAction style={{fontWeight: "bold"}} label="Toliau" icon={<NavigateNext/>}/>
                </BottomNavigation>
            </Link>

            <style jsx global>{`
            
            html {
                height: 100%;
            }

            body {
                min-height: 100%;
                display: block;
                margin: 0;
                background-color: #98FB98;
                background:linear-gradient(rgba(0, 128, 0, 0.8),transparent);
            }
		`}</style>
        </div>
    );
}

export default Shopping;

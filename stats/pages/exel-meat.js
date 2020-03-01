import React from 'react';

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    makeWidthFlexible
} from 'react-vis';

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import NavigateNext from "@material-ui/icons/NavigateNext";
import {makeStyles} from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

export default function Exel(props) {
    const useStyles = makeStyles({
        stickToBottom: {
            width: '100%',
            position: 'fixed',
            bottom: 0,
        },
    });

    const classes = useStyles();

    return (
        <div>
            <Toolbar style={{"background-color": "#fff"}}>
                <Typography variant="h6">
                    Rinkitės augalinius baltymus (sunaudotas vanduo)
                </Typography>
            </Toolbar>

            <Fade in={true} timeout={3000}>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                    <FlexibleXYPlot margin={{bottom: 70}} xType="ordinal" width={"300"} height={300}>
                        <VerticalGridLines/>
                        <HorizontalGridLines/>
                        <XAxis tickLabelAngle={-45}/>
                        <YAxis/>
                        <VerticalBarSeries
                            data={[
                                {x: 'Jautiena', y: 15415},
                                {x: 'Lešiai', y: 1896},
                            ]}
                        />
                    </FlexibleXYPlot>
                    <Link href="/exel-smoke" passHref>
                        <BottomNavigation
                            showLabels
                            className={classes.stickToBottom}
                        >
                            <BottomNavigationAction style={{fontWeight: "bold"}} label="Toliau" icon={<NavigateNext/>}/>
                        </BottomNavigation>
                    </Link>
                </div>
            </Fade>

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
                .rv-xy-plot  {
                    width: 100%!important;
                }
                
                .rv-xy-plot__inner {
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      margin: -100px 0 0 -150px;
                }
                .rv-xy-plot__axis--vertical .rv-xy-plot__axis__tick__text {
                    transform: translate(0, 0);
                }
	    	    `}</style>

        </div>
    );
}
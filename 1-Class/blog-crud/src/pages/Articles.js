import React from 'react';
import AppBar from '../components/AppBar';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container } from '@material-ui/core/';
import articles from '../data/articles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    cardMedia: {
        paddingTop: '55%',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const Articles = () => {

    const classes = useStyles();

    const cards = articles;
    
    return (
        <>
            <AppBar title="Articles" />        
            <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md="4">
                                <Card>
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image={card.mainImage}
                                        title={card.title}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography align="left" variant="h5" component="h2" gutterBottom >
                                           {card.title} 
                                        </Typography>
                                        <Typography align="left">
                                            {card.shortDescription}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>    
                                </Card>
                            </Grid>    
                        ))}
                    </Grid>
               </Container>
        </>
    );
};

export default Articles;
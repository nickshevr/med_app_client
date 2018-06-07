import React from 'react';
import {
    Card, TextField, Button, CardContent, CardActions, Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    rightIcon: {
        marginLeft: '10px',
    },
    root: {
        margin: '100px auto',
        maxWidth: 345,
    },
    text: {
        margin: '0 auto',
    },
    button: {
        margin: '0 auto',
    },
};

const AuthForm = ({classes}) => (
    <div className={classes.root}>
        <Card>
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    Войдите в свой аккаунт
                </Typography>
                <TextField
                    className={classes.text}
                    id="name"
                    label="Email"
                    margin="normal"
                />
                <TextField
                    className={classes.text}
                    id="email"
                    label="Пароль"
                    margin="normal"
                />
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" className={classes.button}>
                    Отправить
                </Button>
            </CardActions>
        </Card>
    </div>
);

export default withStyles(styles)(AuthForm);

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function AdvisorDropDown() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div style={{marginLeft:'15px'}}>
            <div>
                <h1 style={{fontSize:'30px'}}>Advisor Name: </h1>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Achee'}>Bonnie Achee</MenuItem>
                        <MenuItem value={'Alkadi'}>Ghassan Alkadi</MenuItem>
                        <MenuItem value={'Burris'}>John Burris</MenuItem>
                        <MenuItem value={'Kousougeras'}>Cris Koutsougeras</MenuItem>
                        <MenuItem value={'McDowell'}>Patrick McDowell</MenuItem>
                        <MenuItem value={'McNulty'}>Matthew McNulty</MenuItem>
                        <MenuItem value={'Russell'}>Steele Russell</MenuItem>
                        <MenuItem value={'Sekeroglu'}>Kazim Sekeroglu</MenuItem>
                        <MenuItem value={'Soysal'}>Omer Soysal</MenuItem>
                        <MenuItem value={'Tran'}>Quoc-Nam Tran</MenuItem>
                        <MenuItem value={'Pao'}>Kuo-Pao Yang</MenuItem>
                    </Select>
                </FormControl>
            </div>

        </div>
    );
}

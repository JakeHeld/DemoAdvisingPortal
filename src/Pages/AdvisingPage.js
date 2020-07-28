import React from 'react';
import AdvisorDropDown from "../Components/AdvisorDropDown";
import ConcentrationDropDown from "../Components/ConcentrationDropdown";
import Classes from "../Components/Classes";
import {Button} from '@material-ui/core';

function AdvisingPage (){
    return(
        <div style={{marginLeft:'15px'}}>
            <h1>Advising</h1>
            <AdvisorDropDown />
            <ConcentrationDropDown />
            <Classes />
            <br/>
            <Button style={{marginLeft: '15px'}} variant="contained" color="primary">
                Submit
            </Button>
        </div>
    )
}

export default AdvisingPage;

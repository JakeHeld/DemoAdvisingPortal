import React from 'react';
import {TextField} from '@material-ui/core';

function Classes(){
    return(
        <div>
            <h1 style={{fontSize:'30px', marginLeft:'15px'}}>Classes</h1>
            <div style={{marginLeft:'30px'}}>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Class Name" /> <br/>
                    <TextField id="standard-basic" label="Class Name" /> <br/>
                    <TextField id="standard-basic" label="Class Name" /> <br/>
                    <TextField id="standard-basic" label="Class Name" /> <br/>
                    <TextField id="standard-basic" label="Class Name" /> <br/>
                    <TextField id="standard-basic" label="Class Name" /> <br/>
                    <TextField id="standard-basic" label="Class Name" /> <br/>
                    <TextField id="standard-basic" label="Class Name" /> <br/>
                    <TextField id="standard-basic" label="Class Name" /> <br/>
                </form>
            </div>
        </div>
    )
}

export default Classes;

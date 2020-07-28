import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';
import preMBA from '../resources/cs_pre_mba_2019_2020.jpg';
import infoTech from '../resources/info_tech_2019_2020.jpg';
import scientific from '../resources/cs_scientific_2019_2020.jpg';

function CurriculumSheets(){
    const [isOpenScientific, setIsOpenScientific] = useState(false);
    const toggleScientific = () => setIsOpenScientific(!isOpenScientific);
    const [isOpenIT, setIsOpenIT] = useState(false);
    const toggleIT = () => setIsOpenIT(!isOpenIT);
    const [isOpenMBA, setIsOpenMBA] = useState(false);
    const toggleMBA = () => setIsOpenMBA(!isOpenMBA);

    const styleSheet ={
        paddingLeft: '10px'
    }

    return(
        <div style={styleSheet}>
            <h1>Curriculum Sheets</h1>
            <br/>
            <Button color="primary" onClick={toggleScientific} style={{ marginBottom: '1rem' }}>Scientific</Button>
            <Collapse isOpen={isOpenScientific}>
                <img src={scientific} />
            </Collapse>
            <br/>
            <Button color="primary" onClick={toggleIT} style={{ marginBottom: '1rem' }}>Information Technology</Button>
            <Collapse isOpen={isOpenIT}>
                <img src={infoTech} />
            </Collapse>
            <br/>
            <Button color="primary" onClick={toggleMBA} style={{ marginBottom: '1rem' }}>Pre-MBA</Button>
            <Collapse isOpen={isOpenMBA}>
                <img src={preMBA} />
            </Collapse>
            <br/>
            <br/>
        </div>
    )
}

export default CurriculumSheets;

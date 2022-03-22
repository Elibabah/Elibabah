import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion(props) {
    return (
    <div>
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
        <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            <ul>
      <li><a href="www.google.com" target="blank" className="certifica">Responsive Web Design</a></li>
      <li><a href="www.google.com" target="blank" className="certifica">JavaScript, Algorithms and Data Structures</a></li>
      <li><a href="https://www.google.com" target="blank" className="certifica">React frontend development libraries</a></li>
    </ul>
            </Typography>
        </AccordionDetails>
        </Accordion>
    </div>
);
}

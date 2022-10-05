import React, {useState} from "react";
import { accordion_data } from "./api";
import './Accordion.css';
import MyAccordion from "./MyAccordion";

const Accordion = () => {
    const [accordionDropdown, setAccordionDropdown] = useState(accordion_data);
    return (
        <>
            <h1 className="main-heading">React Interview Questions and Answers</h1>
            {
                accordionDropdown.map((res) => {
                    const {id} = res;
                    return <MyAccordion key={res.id} {...res} />;
                })
            }
        </>
    )
}

export default Accordion;
import { Container } from "react-bootstrap";

import classes from './BookDetails.module.css';

export default function EBookDetails({ details }) {
    console.log(details);

    return (
        <Container className={classes.details}>
            <h1>{ details.attributes.book.title }</h1>
            <div className="d-flex gap-2">
                <h3>{details.attributes.currency}</h3>
                <h2>{details.attributes.price}</h2>
            </div>
            <h1 className="fst-italic mt-4">DESCRIPTION</h1>
            <h2>{ details.attributes.book.description }</h2>
        </Container>
    )
}
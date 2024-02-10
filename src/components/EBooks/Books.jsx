import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import classes from './Books.module.css';

export default function Books({ books }) {
    const navigate = useNavigate();

    console.log(books);

    const convertedBooks = books.map(book => ({
        product_id: book.attributes.book.product_id,
        title: book.attributes.book.title,
        price: book.attributes.price,
        currency: book.attributes.currency,
        book_img: book.attributes.book.image_url
    }));

    function showDetailsHandler(product_id) {
        console.log(product_id);
        navigate(`/e-books/${product_id}`)
    }

    const renderedBooks = convertedBooks.map((book, index) => (
        <Col sm={12} md={6} lg={4} key={index}>
            <div className={classes.bookCard}>
                <div><img src={book.book_img} alt={book.title} className='w-100' /></div>
                <div className='px-2 py-4'>
                    <div>
                        <h3>{ book.title.substr(0, 17) }...</h3>
                        <div className='d-flex gap-3'>
                            <h3>{ book.currency }</h3><h3>{ book.price }</h3>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <button className='w-100' onClick={showDetailsHandler.bind(this, book.product_id)}>SHOW DETAILS</button>
                    </div>
                </div>
            </div>
        </Col>
    ))


    return (
        <Container>
            <Row>
                { renderedBooks }
            </Row>
        </Container>
    )
}
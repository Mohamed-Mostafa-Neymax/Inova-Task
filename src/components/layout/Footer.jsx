import { Container } from 'react-bootstrap';

import classes from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={classes.footerWrapper}>
            <Container>
                <div className='py-4 py-lg-5'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <img 
                                src="http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg" 
                                alt="logo" />
                        </div>
                        <div>
                            <p>Join our</p>
                            <p>Newsetter</p>
                        </div>
                        <div>
                            <input type="text" placeholder='What you are looking for' />
                            <button type='button'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </Container>
            <p className='py-2 m-0 text-center'>2024 LOGO. All Rights Reserved.</p>
        </footer>
    );
}
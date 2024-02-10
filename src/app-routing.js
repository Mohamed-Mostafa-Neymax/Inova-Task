import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// Layout
import RootLayout from "./components/layout/RootLayout";

// Pages
import EBooks, { eBooksLoader } from "./pages/EBooks";
import BookDetails, { eBookDetailsLoader } from "./pages/BookDetails";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="contact-us" element={<ContactUs />} />
            {/* <Route index element={<AboutUs />} /> */}
            <Route path="e-books" element={<EBooks />} loader={eBooksLoader} />
            <Route path="e-books/:id" element={<BookDetails />} loader={eBookDetailsLoader} />
            
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default router;
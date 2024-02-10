import { useLoaderData } from "react-router-dom";
import Books from "../components/EBooks/Books";

export default function EBooks() {
    const books = useLoaderData();

    return (
        <Books books={books.data} />
    )
}

export const eBooksLoader = async () => {
    const res = await fetch('http://3.65.32.166/api/v2/storefront/products');

    if (!res.ok) {
        throw Error('Could not find the books');
    }

    return res.json();
}
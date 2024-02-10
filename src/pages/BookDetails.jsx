import { useLoaderData } from "react-router-dom";
import EBookDetails from "../components/EBooks/BookDetails";

export default function BookDetails() {
    const details = useLoaderData();

    return (
        <EBookDetails details={details.data} />
    )
}

export const eBookDetailsLoader = async ({ params }) => {
    console.log(params.id);

    const res = await fetch(`http://3.65.32.166/api/v2/storefront/products/${params.id}`);

    if (!res.ok) {
        throw Error('There\'s no book with that ID.');
    }

    return res.json();
}
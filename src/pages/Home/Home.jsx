import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Products from "../Shared/Products";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(data => data.json())
            .then(data => setProducts(data))
    }, [])
    const state = useSelector((state) => state);
    console.log(state);

    return (
        <div className="grid grid-cols-4 gap-4">
            {
                products.map(product => <Products key={product._id} product={product}></Products>)
            }
        </div>
    );
};

export default Home;
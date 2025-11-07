import { Navbar } from "../Component/Navbar"
import shopping from "../../../assets/shopping.webp"
import { useEffect, useState } from "react"
import { ProductCard } from "../Component/ProductCard";


// const LazyProductCard = lazy(() => import('./../Component/ProductCard'))

export default function Cart() {
    const [data, setData] = useState([]);
    console.log("inside cart")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                if (!response.ok) {
                    throw new Error(`error: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                // setError(error);
                console.log(error)
            }
        }
        fetchData();
    }, [])
    return (
        <>
            <div>
                <Navbar />
                <div className="md:mx-40">
                    <img src={shopping} alt="image" className="w-full h-150" />
                </div>
                <div className="place-self-center">
                    <h1 className="md:text-4xl text-2xl place-self-center font-bold m-2">Products</h1>
                    <div className="grid md:grid-cols-3 md:gap-4 grid-cols-2 gap-5">
                        {
                            data?.map((item, key) => (
                                // {console.log(item)}
                                <ProductCard key={key} data={item}/>
                                
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
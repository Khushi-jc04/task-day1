import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
export default function DetailPage() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true)
    const [productDetail, setProductDetail] = useState({})
    const { id } = useParams();
    // { console.log(id) }
    const fetchProduct = async () => {

        await axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setLoading(false)
                setProductDetail(response.data)
                // console.log(productDetail)
            })
            .catch(error => {
                console.error("error fetching data", error)
            })
    }
    useEffect(() => {
        fetchProduct();
    }, [])
    return (
        <>
            {
                loading ? <p>Loading</p> :
                    <div className="md:m-10 md:flex">
                        <div className="shadow-lg md:max-w-800 bg-gray-100 rounded-lg border-1 border-gray-200">
                            <img src={productDetail.image} alt="image" className="md:p-4 md:w-100 md:max-w-200" />
                        </div>
                    
                        <div className="md:m-8">
                           <h1 className="md:mx-40 place-self-ceneter text-3xl font-bold w-auto">{productDetail.title}</h1>
                           <p>
                            {productDetail.description}
                           </p>
                           <p className="md:text-2xl font-bold">
                            Price:
                            <span className="text-red-800">
                            ${productDetail.price}
                                </span> 
                           </p>
                         <p className="md:text-xl font-bold">
                            Ratings: {productDetail.rating.rate}
                          </p>
                          <p>Stock:
                            {
                                productDetail.rating.count
                            }
                          </p>
                        </div>
                    </div>
            }
        </>
    )
}
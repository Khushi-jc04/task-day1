import {Link} from "react-router-dom"
export function ProductCard({ data }) {
    // debugger
    return (
        <>
            <Link to={`/product/${data.id}`}>
            <div className="md:w-100 md:h-120  shadow-xl md:p-15">
                <img src={data.image} alt="product" className="md:h-70 md:w-full place-self-center m-2 h-40 w-30" />
                <div className="place-self-center">
                    <h1 className="mlace-self-center">{data.title}</h1>
                    <p className="place-self-center font-bold text-center">
                       price:${data.price}
                    </p>
                    <p className="place-self-center font-bold">
                        Rating: {data.rating.rate}
                    </p>
                </div>
            </div>
            </Link>
        </>
    )
}
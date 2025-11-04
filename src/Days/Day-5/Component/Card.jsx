import React from "react";

const Card = React.memo(({ data }) => {
    return (
        <>
            <div className="m-4 border-3 border-green text-white p-6 rounded-md">
                <div>
                    {data.logo}
                </div>
                <div>
                    <p className="font-bold text-2xl">
                        {data.title}
                    </p>
                    <p>
                        {data.description}
                    </p>
                </div>
            </div>
        </>
    )
});
export default Card;
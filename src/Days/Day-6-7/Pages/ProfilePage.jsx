import { useEffect, useState } from "react"
import { useRef } from "react"
import generatePDF from "react-to-pdf"
export function ProfilePage() {
    const profileRef = useRef();
    const [data, setData] = useState({})
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('formData')))
        console.log(data)
    }, [])
    const downloadPdf = () => {
        const originalBody = document.body.innerHTML
        document.body.innerHTML = profileRef.current.outerHTML;
        window.print()
        document.body.innerHTML = originalBody
    }

    return (
        <>
            <div className="bg-white h-180"

            >
                <button onClick={downloadPdf} className="rounded-md bg-blue-500 p-2 text-white">Download pdf </button>
                <div className="place-self-center bg-blue-50 border-blue-500 shadow-lg w-200 my-5 m-5">
                    <p className="p-10 text-5xl " >
                        Welcome to your profile {data.name} !
                    </p>
                    <div className="flex" ref={profileRef}>
                        <div className="w-1/2 p-2 flex flex-col gap-4">
                            <h1 className="font-bold">
                                Personal information
                            </h1>
                            <p>
                                Name: {data?.name}
                            </p>
                            <p>
                                Email: {data?.email}
                            </p>
                            <p>
                                Contact: {data?.phone}
                            </p>

                        </div>
                        <div className="w-1/2 p-2 flex flex-col gap-4">
                            <h1 className="font-bold">
                                Professional information
                            </h1>
                            <p>
                                Higher Education: {data?.education?.label}
                            </p>

                            <p>
                                Skills:

                                {data?.skill?.map((item, key) => (
                                    <li key={key}>
                                        {item.label}
                                    </li>
                                ))}
                            </p>
                            {/* <p className="flex ">
                                Editor text:
                                <span dangerouslySetInnerHTML={{__html:data?.editor}}></span>
                            </p> */}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
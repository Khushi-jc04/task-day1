import photo2 from "../../assets/photo2.png"
import photo1 from "../../assets/school.png"
import { useState } from "react"
import { useRef } from "react"
export function Page1() {
  const [img, setImg] = useState(photo1)
  const buttonref = useRef(null);
  const handleChange = () => {
    img === photo1 ? setImg(photo2) : setImg(photo1)
  }
  const mouseOver = () => {
    buttonref.current.style.color = "red"
  }
  const onblur = () => {
    console.log("on blur")
    buttonref.current.style.color = "black";
  }
  return (
    <>
      <div className="place-self-center h-100 w-100 ">
        <img src={img} alt="image" className="h-100 w-100" />
        <button onClick={handleChange}
          ref={buttonref}
          onMouseOver={mouseOver}
          className={`${img == photo1 ? 'rounded-sm mx-40 p-2 m-2 bg-pink-400/20' : 'rounded-sm mx-40 p-2 m-2 bg-blue-400/50'}`}>
          Click me
        </button>
      </div>
    </>
  )
}
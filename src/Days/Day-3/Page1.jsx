import photo2 from "../../assets/photo2.png"
import photo1 from "../../assets/school.png"
import { useState } from "react"
import { useRef } from "react"
import dog from "../../assets/dog.jpg"
import cat from "../../assets/cat.jpg"
import lion from "../../assets/lion.webp"
import { Parent } from "./Parent"
import rabbit from "../../assets/rabbit.png"
export function Page1() {
  const [img, setImg] = useState(photo1)
  const [selectedValue, setselectedValue] = useState("");
  const [name, setname] = useState("")
  const [placeholder, setPlaceholder] = useState("Enter your name")
  const buttonref = useRef(null);
  const handleChange = (e) => {
    e.target.textContent = "Click me"
    img === photo1 ? setImg(photo2) : setImg(photo1)
  }
  const mouseOver = () => {
    buttonref.current.style.color = "red"
  }
  const handleFocus = (e) => {
    // e.target.value="Khushi"
    setPlaceholder("Khushi")
  }
  const handleMouseLeave = () => {
    buttonref.current.style.color = "black"

  }
  const handleDoubleClick = (e) => {
    e.target.textContent = "Double clicked"
  }
  const handleBlur = () => {
    // console.log(placeholder)
    setPlaceholder("Enter your name")
  }
  const handleWheel = () => {
    e.target.textContent = "Click me"
    img === photo1 ? setImg(photo2) : setImg(photo1)
  }
  const handleKeyDown = (e) => {
    e.target.style.color = "red"
    e.target.style.backgroundColor = "pink"
  }
  const handleKeyUp = (e) => {
    e.target.style.color = "black"
    e.target.style.backgroundColor = ""

  }
  const selectValue = (e) => {
    // console.log("handle")
    setselectedValue(e.target.value)

  }
  const handleInput = (e) => {
    setname(e.target.value)
  }
  const handleSubmit = () => {
    console.log("")
    alert("Thanku for submitting")
  }
  return (
    <>
      {/* <Parent/> */}
      <div className="place-self-center">
        <img src={img} alt="image" className="h-100 w-100" />
        <button
          onClick={handleChange}
          ref={buttonref}
          onMouseOver={mouseOver}
          onMouseLeave={handleMouseLeave}
          onDoubleClick={handleDoubleClick}
          className={`${img == photo1 ? 'rounded-sm mx-40 p-2 m-2 bg-pink-400/20' : 'rounded-sm mx-40 p-2 m-2 bg-blue-400/50'}`}>
          Click me
        </button>
      </div>
      <div className="place-self-center">
        <form action="" onSubmit={handleSubmit}>
          <input type="text"
            placeholder={placeholder}
            value={name}
            className="border-1 m-5"
            onFocus={handleFocus}
            onBlur={handleBlur} selectedValue
            onInput={handleInput}
          />
          <button type="submit">Submit</button>
        </form>
        <button
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onSubmit={handleSubmit}
          className="border-1 m-4 p-1 rounded-sm">
          press key to see changes
        </button>
        <p>{name}</p>
      </div>
      <div className="place-self-center flex">
        <div>
          <label htmlFor="animal">
            Choose any option:
          </label>
          <select name="animal" id="drop-down" value={selectedValue} onChange={selectValue}>
            <option value="dog">Dog</option>
            <option value="rabbit">Rabbit</option>
            <option value="cat">Cat</option>
            <option value="lion">Lion</option>
          </select>
        </div>
        <div className="mx-3 h-100 w-50">
          {selectedValue === "" ?
            <></> :
            <>
              {

                selectedValue === "dog" ?
                  <img src={dog} alt="dog" /> :
                  selectedValue === "cat" ?
                    <img src={cat} alt="cat" /> :
                    selectedValue === "lion" ?
                      <img src={lion} alt="rabbit" /> :
                      <img src={rabbit} alt="rabbit" />
              }
            </>
          }
        </div>
      </div>
    </>
  )
}
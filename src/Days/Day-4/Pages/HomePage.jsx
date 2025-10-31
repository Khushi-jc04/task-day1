import { NavBar } from "../components/NavBar"
import { Component1 } from "../components/Component1"
// import photo1 from "../../../assets/school.png"
import photo1 from "../../../assets/about.jpeg"
import photo2 from "../../../assets/Campus.jpeg"
import photo3 from "../../../assets/choose.png"
import photo4 from "../../../assets/Scholar.avif"
import { ReusableComp } from "../components/ReusableComp"
import { Footer } from "../components/Footer"
export function HomePage() {
    const data = [{
        id: 1,
        Title: "About Our College",
        Description: "The history of the Carolina College of Arts and Science begins with the founding of the college by John Gilstone, a prominent resident of Columbia. We are a vibrant accredited learning institution with a big choice of undergraduate and graduate degree programs designed for working professionals.",
        image: photo1 

    },
    {
        id:2,
        Title:"Campus Life",
        Description:"The years you spend in college will give you not only a degree but also new friends, many hobbies, ways of broadening your horizons, and much more.",
        image:photo2

    },
     {
        id:3,
        Title:"Why Choose Us",
        Description:"Our programs meet the highest educational standards in the United States and around the world.The equipment of our laboratories allows to carry out practical experiments of any complexity.",
        image:photo3

    },
     {
        id:4,
        Title:"New Scholar's Program",
        Description:"Learn more about the establishment of the new Scholars Program designed to foster diversity and mutual respect at Carolina. Every month, we run a variety of activities that are useful for current students and applicants. We advise you to check our calendar more often! Check out the latest events at Carolina below.",
        image:photo4

    }
    ]
    return (
        <>
            <NavBar />
            <Component1 />
            <div >
                <div className="m-10 flex-col gap-4">

            {
                data.map((item,index)=>(
                  <ReusableComp key={item.id} data={item}/>
                ))
            }
                </div>
            </div>
            <Footer/>
        </>
    )
}
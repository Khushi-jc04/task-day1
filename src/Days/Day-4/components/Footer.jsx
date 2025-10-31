import "./footer.css"
export function Footer() {
    return (
        <>
            <div className="bg-green-800 text-white flex md:gap-20 w-full">
                <div>
                    <img src="https://res2.weblium.site/res/5f05a781c91c5b00229bcef4/5f1162dec3ffc600210d627c?nowebp" alt="image" className="lg:h-20 h-10" />
                </div>
                <div class="lis">
                    <ul>
                        <li>
                             About us
                        </li>
                        <li>
                            Admissions
                        </li>
                        <li>
                            Academics
                        </li>
                    </ul>
                </div>
                <div className="lis">
                    <ul>
                        <li>
                            Campus Life
                        </li>
                        <li>
                            News
                        </li>
                        <li>
                        Contact us
                        </li>
                    </ul>
                </div>
                <div className="lis">
                    <ul>
                        <li>
                             Our Teams
                        </li>
                        <li>
                            Testimonals
                        </li>
                        <li>
                            Events
                        </li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}
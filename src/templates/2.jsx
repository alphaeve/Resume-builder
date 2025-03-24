import { Stack } from 'react-bootstrap'
import { BsLinkedin, BsGithub, BsGlobe } from 'react-icons/bs'
import { HiLocationMarker, HiOfficeBuilding, HiOutlineMail, HiPhone } from 'react-icons/hi'

export default function Template2({ profile, file, aboutMe, experience, education, skills }) {
    const GetIcon = (icon) => {
        switch (icon.icon) {
            case "HiOutlineMail":
                return <HiOutlineMail size={30} />
            case "HiPhone":
                return <HiPhone size={30} />
            case "BsLinkedin":
                return <BsLinkedin size={30} />
            case "BsGithub":
                return <BsGithub size={30} />
            case "BsGlobe":
                return <BsGlobe size={30} />
            default:
                return "●"
        }
    }
    const GetLinks = () => {
        const list = [];
        if (profile.email) {
            list.push({
                icon: "HiOutlineMail",
                link: profile.email,
            });
        }
        if (profile.contact) {
            list.push({
                icon: "HiPhone",
                link: profile.contact,
            });
        }
        if (profile.linkedin) {
            list.push({
                icon: "BsLinkedin",
                link: profile.linkedin,
            });
        }
        if (profile.github) {
            list.push({
                icon: "BsGithub",
                link: profile.github,
            });
        }
        if (profile.website) {
            list.push({
                icon: "BsGlobe",
                link: profile.website,
            });
        }

        return (
            list.map((item, id) => {
                return (
                    <div className={id % 2 === 0 ? "d-flex aligh-items-start align-items-center bg-2 text-white p-3" : "d-flex aligh-items-start align-items-center bg-3 text-white p-3"} key={id}>
                        <p className="m-0"><GetIcon icon={item.icon} /></p><span className="mx-2"></span><p className="m-0">{item.link}</p>
                    </div>
                )
            })
        )

    }
    return (
        <div className="row pdf bg-light" id="divToPrint" size="A4">
            <div className="row">
                {/* Left Sidebar */}
                <div className="col-md-4 bg-primary text-white p-4">
                <div className="text-center">
                    <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="rounded-circle img-fluid mb-3"
                    />
                    <h3>Victor Frank</h3>
                    <p>Quality Manager</p>
                </div>
                <hr />
                <h5>Contact</h5>
                <p>Email: info@resumekraft.com</p>
                <p>Phone: 202-555-0120</p>
                <p>Location: Chicago, Illinois, US</p>
                <hr />
                <h5>Skills</h5>
                <ul>
                    <li>Strong Communication</li>
                    <li>Critical Thinking</li>
                    <li>Problem Solving</li>
                    <li>Microsoft Office & SAP-ERP</li>
                </ul>
                <hr />
                <h5>Languages</h5>
                <p>English, French, Arabic, German</p>
                <hr />
                <h5>Awards</h5>
                <p>ISO 17025:2017 Certification</p>
                </div>

                {/* Right Content */}
                <div className="col-md-8 p-4">
                <h3>Summary</h3>
                <p>
                    Dedicated Quality Management personnel with a 7-year track record of providing outstanding quality standards...
                </p>
                <hr />
                <h3>Experience</h3>
                <h5>QA Officer - R&D | Berger Paints NY</h5>
                <p>Apr 2015 - Present</p>
                <ul>
                    <li>Plan, control & ensure product quality...</li>
                    <li>Analyze & monitor production process...</li>
                </ul>

                <h5>Executive, Export Documentation | Renata Ltd.</h5>
                <p>Dec 2012 - Mar 2015</p>
                <ul>
                    <li>Regular communication with country representatives...</li>
                </ul>
                </div>
            </div>
        </div>
    )
}
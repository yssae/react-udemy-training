import './DigitalAssistants.css';
import Profile from './Profile/Profile';

export const profiles = [
    {
        title: "Alexa",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Amazon_Alexa_App_Logo.png"
    },
    {
        title: "Cortana",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Microsoft_Cortana_transparent.svg/1200px-Microsoft_Cortana_transparent.svg.png"
    },
    {
        title: "Siri",
        image: "https://www.nicepng.com/png/detail/298-2982739_apples-siri-logo.png"
    }
]

function DigitalAssistants() {
    return (
        <div className="DigitalAssistants mt-6 pb-5">
            <section className="hero is-small is-info">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div> 
            </section>
            <br />
            <div className="container">
                <div className="section columns">
                    { 
                        profiles.map(profile => <div className="column is-4" key={profile.title}><Profile title={profile.title} image={profile.image}/></div>)
                    }
                </div>
            </div>
        </div>

    )
}

export default DigitalAssistants;
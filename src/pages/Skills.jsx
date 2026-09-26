import st from '../styles/App.module.scss'
import useScrollReveal from '../hooks/useScrollReveal'

const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// A skill chip that links to the section/card where the skill was actually used.
function Chip({ icon, label, target, duration, tone }) {
    return (
        <li
            onClick={() => target && scrollTo(target)}
            title={target ? `Jump to where I used ${label}` : ''}
            className={tone ? st[`tone_${tone}`] : ''}
        >
            {icon && <i className={icon}></i>}
            <span className={st.chipLabel}>{label}</span>
            {duration && <span className={st.chipDuration}>{duration}</span>}
        </li>
    );
}

function Skills() {
    const [ref, visible] = useScrollReveal();

    return (
        <div id='skills' className={st.container}>
            <div ref={ref} className={`${st.reveal} ${visible ? st.visible : ''}`}>
                <h2>Skills</h2>
                <p className={st.skillsIntro}>
                    Grouped by where I actually used them. Click any skill to jump to the relevant work,
                    project, or education entry.
                </p>

                {/* ===== WORK EXPERIENCE ===== */}
                <h4 className={st.skillsGroupHeading}>
                    <span className={st.dotWork}></span> Work Experience
                </h4>
                <div className={st.skills}>
                    <ul>
                        <Chip icon="devicon-vuejs-plain" label="Vue 2/3" target="experiences" duration="3 yrs" tone="work" />
                        <Chip icon="devicon-javascript-plain" label="JavaScript" target="experiences" duration="3 yrs" tone="work" />
                        <Chip icon="devicon-nodejs-plain" label="NodeJS" target="experiences" duration="2 yrs" tone="work" />
                        <Chip icon="devicon-express-original" label="ExpressJS" target="experiences" duration="2 yrs" tone="work" />
                        <Chip icon="devicon-mongodb-plain" label="MongoDB" target="fletrix" duration="2 yrs" tone="work" />
                        <Chip icon="devicon-socketio-original" label="Socket.IO" target="experiences" duration="2 yrs" tone="work" />
                        <Chip icon="devicon-bootstrap-plain" label="Bootstrap" target="experiences" duration="2 yrs" tone="work" />
                        <Chip icon="devicon-typescript-plain" label="TypeScript" target="experiences" duration="1 yr" tone="work" />
                        <Chip icon="devicon-nestjs-plain" label="NestJS" target="fletrix" duration="1 yr" tone="work" />
                        <Chip icon="devicon-tailwindcss-plain" label="Tailwind CSS" target="experiences" duration="1 yr" tone="work" />
                        <Chip icon="devicon-nuxtjs-plain" label="NuxtJS" target="experiences" duration="1 yr" tone="work" />
                        <Chip icon="devicon-react-original" label="React" target="wealthskey" duration="&lt;1 yr" tone="work" />
                        <Chip icon="devicon-nextjs-plain" label="NextJS" target="wealthskey" tone="work" />
                        <Chip label="JWT" target="experiences" tone="work" />
                        <Chip label="Microservices" target="experiences" duration="1 yr" tone="work" />
                    </ul>
                </div>

                {/* ===== TOOLS & INFRASTRUCTURE ===== */}
                <h4 className={st.skillsGroupHeading}>
                    <span className={st.dotTools}></span> Tools &amp; Infrastructure
                </h4>
                <div className={st.skills}>
                    <ul>
                        <Chip icon="devicon-git-plain" label="Git" target="projects" duration="3 yrs" tone="tools" />
                        <Chip icon="devicon-amazonwebservices-plain" label="AWS EC2" target="arm-mooc" duration="1 yr" tone="tools" />
                        <Chip icon="devicon-docker-plain" label="Docker" target="arm-mooc" duration="&lt;1 yr" tone="tools" />
                        <Chip icon="devicon-kubernetes-plain" label="Kubernetes" target="arm-mooc" duration="&lt;1 yr" tone="tools" />
                        <Chip icon="devicon-linux-plain" label="Linux" target="projects" tone="tools" />
                        <Chip label="XAMPP" target="projects" tone="tools" />
                    </ul>
                </div>

                {/* ===== PERSONAL / EDUCATION ===== */}
                <h4 className={st.skillsGroupHeading}>
                    <span className={st.dotPersonal}></span> Personal &amp; Education Projects
                </h4>
                <div className={st.skills}>
                    <ul>
                        <Chip icon="devicon-cplusplus-plain" label="C/C++" target="arduino-gameboy" duration="2 yrs" tone="personal" />
                        <Chip icon="devicon-c-plain" label="C" target="arduino-gameboy" duration="2 yrs" tone="personal" />
                        <Chip icon="devicon-java-plain" label="Java" target="projects" duration="1 yr" tone="personal" />
                        <Chip icon="devicon-arduino-plain" label="Arduino" target="arduino-gameboy" tone="personal" />
                        <Chip icon="devicon-html5-plain" label="HTML5" target="projects" tone="personal" />
                        <Chip icon="devicon-css3-plain" label="CSS3" target="projects" tone="personal" />
                    </ul>
                </div>

                {/* ===== SPOKEN LANGUAGES ===== */}
                <h4 className={st.skillsGroupHeading}>
                    <span className={st.dotLang}></span> Spoken Languages
                </h4>
                <div className={st.skills}>
                    <ul>
                        <li className={st.noAction}>English (Fluent)</li>
                        <li className={st.noAction}>Nepali (Native)</li>
                        <li className={st.noAction}>Cantonese (Conversational)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;

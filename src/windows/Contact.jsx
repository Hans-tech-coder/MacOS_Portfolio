import WindowWrapper from "#hoc/WindowWrapper";
import { socials } from "#constants";
import { WindowControls } from "#components";

const Contact = () => {
  return (
    <>
        <div id="window-header">
            <WindowControls target="contact" />
            <h2>Contact Me</h2>
        </div>

        <div className="p-5 space-y-5">
            <img src="/images/hans.png" alt="Hans" className="w-20 rounded-2xl" />

            <h3>Let's Connect</h3>
            <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
            <p>
                <span className="flex items-center gap-2">
                    <img src="/icons/envelope.svg" alt="Email" className="size-5" />
                    <a href="mailto:obenahans@gmail.com">obenahans@gmail.com</a>
                </span>
                <span className="flex items-center gap-2">
                    <img src="/icons/phone.svg" alt="Phone" className="size-5" />
                    <a href="tel:+639457287481">+639457287481</a>
                </span>
            </p>

            <ul>
                {socials.map(({ id, bg, link, icon, text }) => (
                    <li key={id} style={{ backgroundColor: bg }}>
                        <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                            <img src={icon} alt={text} className="size-5" />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
import { FaDiscord, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="hidden lg:inline absolute transform top-1/2 -right-[160px] bg-light-mode-card dark:bg-stone-900 rounded-t-3xl -rotate-90">
        <ul className="flex justify-center items-center flex-row p-5 gap-3">
        <li><FaWhatsapp/></li>
        <li><FaLinkedin/></li>
        <li><FaGithub/></li>
        <li><FaDiscord/></li>
        <li><hr className="w-[100px]"></hr></li>
        <li className="tracking-[.5em] font-semibold">SOCIALS</li>
        </ul>
    </div>
  )
}

export default Socials
import { FaDiscord, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { Element } from 'react-scroll'
const Footer = () => {
    const icons = [
        {icon: <FaWhatsapp/>},
        {icon: <FaLinkedin/>},
        {icon: <FaGithub/>},
        {icon: <FaDiscord/>}
    ]

  return (
    <Element className="bg-light-mode-card dark:bg-[#222222] mt-10 p-10">
        <div className="flex flex-col justify-center items-center space-y-10">
            <div className="text-6xl font-bold font-sans">C</div>
            <div className="flex flex-row gap-3">
                    {
                        icons.map((icon:any, i:number) => (
                            <div key={i} className="bg-light-mode-bg dark:bg-[#464646] rounded-full p-3 text-white">{icon.icon}</div>
                        ))
                    }
            </div>
            <div className="text-xl">© Copyright 2024. All rights reserved</div>
        </div>
    </Element>
  )
}

export default Footer
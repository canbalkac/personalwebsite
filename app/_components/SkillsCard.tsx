interface skillsCardProps{
    logo:string
    title:string
    detail:string
}

const SkillsCard = ({ logo, title, detail }:skillsCardProps) => {
  return (
    <div data-aos="fade-right" className="flex flex-col items-center bg-[#222222] rounden-lg p-4">
        <div className="flex flex-row justify-center p-6 relative border border-[#5a5a5a] rounded-full">
            <div>
                <div className="bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[50px] -left-[7px]"></div>
                <div className="bg-[#5a5a5a] rounded-full h-[15px] w-[15px] absolute top-[50px] -right-[7px]"></div>
            </div>
            <img className="w-[70px] h-[70px]" alt="" src={"/static/media/" + logo }></img>
        </div>
        <p className="text-lg text-[#61dafb] font-semibold mb-8 text-center">{title}</p>
        <p className="text-[#afafaf] font-semibold text-sm leading-5 text-center">
            {detail}
        </p>
    </div>
  )
}

export default SkillsCard
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props{
    title:string;
    des:string;
    listItem:string[];
    link:string;
}

const ProjectsCard = ({ title, des, listItem, link }: Props) => { // remove bg-[#003153]
  return (
    <a href={link} target="_blank"> 
        <div className="w-full h-80 rounded-lg bg-gradient-to-tl from-slate-900 via-purple-950 to-slate-900 p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textCyan" />
          <RxOpenInNewWindow className="text-4xl hover:text-textCyan" />
        </div>
        <div>
            <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textCyan">
                {title}
            </h2>
            <p className="text-sm mt-3">
                {des}
            </p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
            {listItem.map((item, i)=>(
              <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
    </a>
  );
};

export default ProjectsCard;
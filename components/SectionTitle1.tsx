interface Props{
    title:string;
    titleNO:string;
}

const SectionTitle1 = ({title, titleNO}: Props) => {
  return (
    <h2 className="font-titleFont text-xl md:text-2xl lg:text-2xl text-slate-300 font-semibold flex items-center">
        <span className="text-base md:text-lg text-textCyan mr-2">
          {titleNO}
        </span>
        {title}
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.9px] bg-textCyan ml-6"></span>
    </h2>
  );
};

export default SectionTitle1;
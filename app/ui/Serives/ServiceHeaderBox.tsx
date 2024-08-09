import {FC, SVGProps} from "react";

interface ServiceHeaderBoxProps {
  Icon: FC<SVGProps<SVGElement>>;
  title: string;
  link: string;
}

export default function ServiceHeaderBox({Icon, title, link}: ServiceHeaderBoxProps) {
  return (
    <a
      href={link}
      className="flex flex-col justify-center items-center h-full max-h-40 w-full gap-2 p-4 bg-box-button border rounded-lg shadow-2xl overflow-hidden">
      <Icon />
      <p>{title}</p>
    </a>
  );
}

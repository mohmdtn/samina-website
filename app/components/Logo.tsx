import Image from 'next/image';

interface LogoProps {
  name: string;
}

const Logo: React.FC<LogoProps> = ({ name }) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={"/images/logo.svg"} width={40} height={40} alt="samina logo" />
      <h3 className="text-2xl font-bold text-brand-900">{name}</h3>
    </div>
  )
}

export default Logo
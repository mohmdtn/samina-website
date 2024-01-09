import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  name: string;
}

const Logo: React.FC<LogoProps> = ({ name }) => {
  const language = useLocale();
  return (
    <Link href={`/${language}/`}>
      <div className="flex items-center gap-2 cursor-pointer">
        <Image src={"/images/logo.svg"} width={40} height={40} alt="samina logo" />
        <h3 className="text-2xl font-bold text-brand-900">{name}</h3>
      </div>
    </Link>
  )
}

export default Logo
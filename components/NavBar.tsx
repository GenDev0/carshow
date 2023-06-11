import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className='w-full absolute z-10'>
      <nav className='max-width flex-between sm:px-16 px-6 py-4'>
        <Link href={"/"} className='flex-center'>
          <Image
            src={"/logo.svg"}
            alt={"Car Hub Logo"}
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>
        <CustomButton
          title='Sign In'
          btnType='button'
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        />
      </nav>
    </div>
  );
};

export default NavBar;
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/user-provider";

export default function NavComponent() {
  const { user, logOut } = useUser();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='/' className='flex items-center'>
          Pages
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='/' className='flex items-center'>
          Account
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='/' className='flex items-center'>
          Blocks
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href='/' className='flex items-center'>
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className='mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 shadow-sm'>
      <div className='container mx-auto flex items-center justify-between text-blue-gray-900'>
        <Typography
          as={Link}
          to='/'
          variant='small'
          className='mr-4 cursor-pointer py-1.5 font-normal'
        >
          <img
            src='https://doctoraltheme.com/wp-content/themes/doctoral/assets/images/logo.png'
            alt=''
          />
        </Typography>
        <div className='hidden lg:block'>{navList}</div>
        {user?.uid ? (
          <Button
            onClick={logOut}
            variant='filled'
            size='sm'
            className='hidden lg:inline-block bg-blue-800'
          >
            Logout
          </Button>
        ) : (
          <Link to={"/login"}>
            <Button
              variant='filled'
              size='sm'
              className='hidden lg:inline-block bg-blue-800'
            >
              <span>Login</span>
            </Button>
          </Link>
        )}

        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        {user?.uid ? (
          <Button
            variant='filled'
            size='sm'
            fullWidth
            className='mb-2'
            onClick={logOut}
          >
            Logout
          </Button>
        ) : (
          <Link to={"/login"}>
            <Button variant='filled' size='sm' fullWidth className='mb-2'>
              <span>Login</span>
            </Button>
          </Link>
        )}
      </MobileNav>
    </Navbar>
  );
}

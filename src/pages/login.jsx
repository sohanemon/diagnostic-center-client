import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  CardFooter,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/user-provider";

export default function Example({ reg }) {
  const { createUser, signIn } = useUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    ["email", "password"].forEach((el) => (data[el] = e.target[el].value));
    if (reg) createUser(data);
    else signIn(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className='w-full max-w-lg mt-[5%] mx-auto mb-[10%]'>
        <CardHeader
          variant='gradient'
          className='mb-4 grid h-28 bg-blue-900 place-items-center'
        >
          <Typography variant='h3' color='white'>
            {reg ? "Sign Up" : "Sign In"}
          </Typography>
        </CardHeader>
        <CardBody className='flex flex-col gap-4'>
          <Input name='email' color='blue-gray' label='Email' size='lg' />
          <Input name='password' color='blue-gray' label='Password' size='lg' />
          <div className='-ml-2.5'>
            <Checkbox
              className='[&#checkbox]:checked:!bg-blue-900 [&#checkbox]:border-blue-900'
              label='Remember Me'
            />
          </div>
        </CardBody>
        <CardFooter className='pt-0'>
          <Button type='submit' className='bg-blue-900' fullWidth>
            Sign In
          </Button>
          <Typography variant='small' className='mt-6 flex justify-center'>
            {reg ? "Already" : "Don't"} have an account?
            <Typography
              as={Link}
              to={reg ? "/login" : "/register"}
              variant='small'
              className='ml-1  font-bold text-blue-900'
            >
              {reg ? "Sign in" : "Sign up"}
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </form>
  );
}

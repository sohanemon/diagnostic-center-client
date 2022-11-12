import Heading from "./heading";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
const OurServices = () => {
  return (
    <section>
      <Heading>Our services</Heading>
      <div className='grid grid-cols-3 gap-7'>
        <Card className=''>
          <CardHeader floated={false} className='h-52'>
            <img
              className='object-cover h-full w-full'
              src='https://images.unsplash.com/photo-1514416309827-bfb0cf433a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VyZ2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </CardHeader>
          <CardBody className='pb-0'>
            <Typography variant='h4' color='blue-gray' className='mb-2'>
              Surgery
            </Typography>
            <Typography color='gray' className='font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              minus.
            </Typography>
          </CardBody>
          <CardFooter className='flex justify-center pt-0'>
            <Button variant='text'>Read more</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default OurServices;

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Heading from "./heading";
const MedicalExperts = () => {
  return (
    <section>
      <Heading>Medical Experts</Heading>
      <div className='grid grid-cols-3 gap-10'>
        <Card className='w-full'>
          <CardHeader floated={false} className='h-56'>
            <img
              className='object-cover h-full w-full'
              src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt='profile'
            />
          </CardHeader>
          <CardBody className='text-center'>
            <Typography variant='h4' color='blue-gray' className='mb-2'>
              Natalie Paisley
            </Typography>
            <Typography color='blue' className='font-medium' textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default MedicalExperts;

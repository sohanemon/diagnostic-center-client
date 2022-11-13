import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { client } from "../utilities/axios-instances";
import Heading from "./heading";
const MedicalExperts = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    client.get("doctor").then((res) => setDoctors(res.data));

    return () => {};
  }, []);

  return (
    <section>
      <Heading>Medical Experts</Heading>
      <div className='grid grid-cols-3 gap-10'>
        {doctors?.map((el) => (
          <Card className='w-full' key={el._id}>
            <CardHeader floated={false} className='h-56'>
              <img
                className='object-cover h-full w-full'
                src={el.image}
                alt='profile'
              />
            </CardHeader>
            <CardBody className='text-center'>
              <Typography variant='h4' color='blue-gray' className='mb-2'>
                {el.firstName + " " + el.lastName}
              </Typography>
              <Typography color='blue' className='font-medium' textGradient>
                {el.degree}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MedicalExperts;

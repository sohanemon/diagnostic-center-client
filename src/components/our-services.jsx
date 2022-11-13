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
import { useEffect, useState } from "react";
import { client } from "../utilities/axios-instances";
const OurServices = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    client.get("service?limit=3").then((res) => setService(res.data));

    return () => {};
  }, []);

  return (
    <section>
      <Heading>Our services</Heading>
      <div className='grid grid-cols-3 gap-7'>
        {service?.map((el) => (
          <Card className='' key={el._id}>
            <CardHeader floated={false} className='h-52'>
              <img
                className='object-cover h-full w-full'
                src={el.thumbnail}
                alt=''
              />
            </CardHeader>
            <CardBody className='pb-0'>
              <Typography variant='h4' color='blue-gray' className='mb-2'>
                {el.name}
              </Typography>
              <Typography color='gray' className='font-medium'>
                {el.description.slice(0, 75) + " ..."}
              </Typography>
            </CardBody>
            <CardFooter className='flex justify-center pt-0'>
              <Button variant='text'>Read more</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OurServices;

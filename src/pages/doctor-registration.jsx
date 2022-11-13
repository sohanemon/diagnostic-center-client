import { Button, Input, Textarea } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { client } from "../utilities/axios-instances";

const DoctorRegistration = () => {
  const handleSubmit = (e) => {
    const data = {};
    e.preventDefault();
    ["firstName", "lastName", "image", "degree", "age", "about"].forEach(
      (el) => (data[el] = e.target[el].value)
    );
    toast.promise(client.post("doctor", data), {
      loading: "applying",
      success: "Added successfully",
      error: "Something went wrong ",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='space-y-5'>
        <div className='flex gap-5'>
          <Input
            required
            color='blue-gray'
            name='firstName'
            size='lg'
            label='firstName'
          />
          <Input color='blue-gray' name='lastName' size='lg' label='lastName' />
        </div>
        <Input
          required
          color='blue-gray'
          name='image'
          size='lg'
          label='Profile image'
        />

        <div className='flex gap-5'>
          <Input
            required
            color='blue-gray'
            name='degree'
            size='lg'
            label='degree'
          />
          <Input color='blue-gray' name='age' size='lg' label='age' />
        </div>
        <Textarea color='blue-gray' name='about' label='about' />
        <Button className='bg-blue-900 ml-auto block' type='submit'>
          Apply
        </Button>
      </form>
    </>
  );
};

export default DoctorRegistration;

import { Button, Input, Textarea } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { client } from "../utilities/axios-instances";

const AddService = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    ["name", "type", "thumbnail", "description"].forEach(
      (el) => (data[el] = e.target[el].value)
    );
    toast
      .promise(client.post("/service", data), {
        loading: "loading",
        success: "added successfully",
        error: "something went wrong",
      })
      .then(() => {
        e.target.reset();
      });
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-5'>
      <div className='flex gap-5'>
        <Input
          required
          color='blue-gray'
          name='name'
          size='lg'
          label='Service name'
        />
        <Input color='blue-gray' name='type' size='lg' label='Service type' />
      </div>
      <Input
        required
        color='blue-gray'
        name='thumbnail'
        size='lg'
        label='Thumbnail'
      />
      <Textarea color='blue-gray' name='description' label='Description' />
      <Button className='bg-blue-900 ml-auto block' type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default AddService;

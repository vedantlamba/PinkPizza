import { useNavigate, useRouteError } from 'react-router-dom';
import Button from './Button';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div className='bg-secondary-meduim flex flex-col justify-center items-center h-[100vh] w-[100vw] font-montserrat text-2xl'>
      <h1>Something went wrong 😢</h1>
      <p className='mb-4'>{error.data || error.message}</p>
      <Button type='primary' px='3' py='6' onClick={() => navigate(-1)}>&larr; Go back</Button>
    </div>
  );
}

export default Error;
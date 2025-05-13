import { PuffLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div>
      <PuffLoader color="#02fd80" cssOverride={{ display: 'inline-block' }} />
    </div>
  );
}
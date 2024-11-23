import React from 'react';
import { FaAccusoft } from 'react-icons/fa';
import { dateFormat } from '@repo/utils/dateFormat';

export default function App() {
  const [value, setValue] = React.useState(1234);

  React.useEffect(() => {
    setValue(value);
  }, []);

  return (
    <div>
      HI
      <FaAccusoft size={30} />
      {dateFormat.date2(String(new Date()))}
    </div>
  );
}

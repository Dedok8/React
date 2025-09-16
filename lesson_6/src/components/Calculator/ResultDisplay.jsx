import { memo } from 'react';

function ResultDisplay({ res }) {
  console.log('Виведення результату');
  return <div>{res}</div>;
}

export default memo(ResultDisplay);

import { useState } from 'react';
import Input from '@shared/components/input/input';

const HomePage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('')

  return (
    <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력해주세요."
      />
      <Input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="정답을 입력하세요."
      />
    </div>
  );
};

export default HomePage;
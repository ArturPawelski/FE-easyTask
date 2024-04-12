import React, { useState } from 'react';
import { AnimatedPresenceContainer } from '../../Components/UI/AnimatedPresenceContainer';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      <AnimatedPresenceContainer isVisible={isVisible}>
        <div style={{ padding: '20px', background: 'salmon', margin: '20px 0' }}>Animated</div>
      </AnimatedPresenceContainer>
    </div>
  );
};

export default Home;

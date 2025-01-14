This solution uses conditional rendering to avoid displaying the count until it has been initialized:

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(10);
    }, 1000);
  }, []);

  return (
    <View>
      {count !== 0 && <Text>{count}</Text>}
      {count === 0 && <Text>Loading...</Text>}
    </View>
  );
}

export default MyComponent;
```

Alternatively, provide a default value in the initial state:

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

function MyComponent() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCount(10);
    }, 1000);
  }, []);

  return (
    <View>
      {count !== null && <Text>{count}</Text>}
      {count === null && <Text>Loading...</Text>}
    </View>
  );
}

export default MyComponent;
```
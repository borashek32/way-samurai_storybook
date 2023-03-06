import React from 'react';

export default {
  title: 'Example/Button',
  // component: ControlledInput,
}

export const ControlledInputWithoutMemo = () => <input value={"nataly"} />

export const ControlledInput = React.memo(ControlledInputWithoutMemo)
import React, { useRef, useImperativeHandle, forwardRef } from 'react';
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  // Expose the 'focusInput' method to the parent component
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={props.placeholder}
    />
  );
});

export default CustomInput; 
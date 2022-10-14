import React, {useRef, useImperativeHandle} from "react"
import classes from "./LoginField.module.css"

const LoginField = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            activate: activate
        }
    })

    return (
        <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={`${props.id}`}>{`${props.label}`}</label>
        <input
          type={`${props.type}`}
          id={`${props.id}`}
          ref={inputRef}
          value={props.value}
          onChange={props.onChangeHandler}
          onBlur={props.onBlurHandler}
        />
      </div>
    );
});

export default LoginField
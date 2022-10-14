import classes from "./LoginField.module.css"

export default function LoginField(props) {
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
          value={props.value}
          onChange={props.onChangeHandler}
          onBlur={props.onBlurHandler}
        />
      </div>
    );
}
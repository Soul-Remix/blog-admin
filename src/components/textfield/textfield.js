import { useField } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>

      <textarea
        className={meta.touched && meta.error ? 'input-error' : ''}
        {...field}
        {...props}
      ></textarea>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextField;

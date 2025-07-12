import styles from './input.module.css';
type DefaultInputProps = {
  id: string;
  labeText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labeText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labeText}</label>
      <input className={styles.input} id='meuInput' type={type} {...rest} />
    </>
  );
}

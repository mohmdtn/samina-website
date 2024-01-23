interface InputErrorMessageProps {
  message: string;
}

const InputErrorMessage: React.FC<InputErrorMessageProps> = ({ message }) => {
  return <h6 className="text-sm mt-[6px] text-red-600">{message}</h6>;
};

export default InputErrorMessage;

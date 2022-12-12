const UserInput = ({ register, index, errors }) => {
  let count = index + 1;
  return (
    <>
      <strong>이름{count}</strong>
      <input
        type="text"
        {...register(`user.${index}.userName`, {
          required: "* 필수 입력입니다.",
        })}
      />
      <div className="error-message">
        {errors.user?.[index]?.userName?.message}
      </div>
      <strong>메시지{count}</strong>
      <input type="text" {...register(`user.${index}.userMessage`)} />
    </>
  );
};
export default UserInput;

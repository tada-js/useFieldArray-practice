const UserInput = ({ register, index, errors }) => {
  return (
    <>
      <strong>이름</strong>
      <input
        type="text"
        {...register(`user.${index}.userName`, {
          required: "* 필수 입력입니다.",
        })}
      />
      {errors.user && (
        <div className="error-message">
          {errors?.user[index].userName.message}
        </div>
      )}
      {errors.user && console.log(errors.user)}
      <strong>메시지</strong>
      <input type="text" {...register(`user.${index}.userMessage`)} />
    </>
  );
};
export default UserInput;

import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import SubSelect from "./SubSelect";
import UserInput from "./UserInput";

const Form = () => {
  // react hook form
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      user: [
        {
          type: "user",
          userName: "userName",
          userEmail: "userEmail",
          userId: "userId",
        },
      ],
      sub: [
        {
          type: "sub",
          subInputValue: "subInputValue",
          subSelectValue: "subSelectValue",
          subCheckBoxValue: "subCheckBoxValue",
        },
      ],
    },
  });

  // useFieldArray
  const { fields: userFields, append: userAppend } = useFieldArray({
    control,
    name: "user",
  });
  const { fields: subFields, append: subAppend } = useFieldArray({
    control,
    name: "sub",
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/test-url", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>TEST FORM</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button
          type="button"
          onClick={() => {
            userAppend({
              type: "user",
              userName: "userName",
              userEmail: "userEmail",
              userId: "userId",
            });
          }}
        >
          인원 추가
        </button>

        <div className="row-wrap">
          {userFields.map((value, index) => {
            return <UserInput />;
          })}
        </div>

        <button
          type="button"
          onClick={() => {
            subAppend({
              type: "sub",
              subInputValue: "subInputValue",
              subSelectValue: "subSelectValue",
              subCheckBoxValue: "subCheckBoxValue",
            });
          }}
        >
          서브 추가
        </button>

        <div className="row-wrap">
          {subFields.map((value, index) => {
            return <SubSelect />;
          })}
        </div>

        <button type="submit">제출</button>
      </form>
    </>
  );
};
export default Form;

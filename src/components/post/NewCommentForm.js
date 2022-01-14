import styled from "styled-components";

const NewCommentForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED");
  };

  return (
    <FormWrapper onSubmit={submitHandler}>
      <Input
        type="text"
        name="comment"
        id="comment"
        placeholder="Leave your comment here..."
      />
      <SubmitBtn type="submit">Comment</SubmitBtn>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  padding-top: 1rem;
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
  font-size: 0.9rem;
  padding: 10px;
`;

const SubmitBtn = styled.button`
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.darkblue};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.darkblue};
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.mediumblue};
    background-color: ${({ theme }) => theme.colors.mediumblue};
  }
`;

export default NewCommentForm;

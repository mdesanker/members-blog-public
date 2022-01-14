import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  createComment,
  fetchCommentsByPostId,
} from "../../store/slices/commentsSlice";

const NewCommentForm = ({ toggleForm }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    content: "",
  });

  const { content } = formData;

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    toggleForm();
    const body = formData;
    body.post = id;
    console.log(body);
    dispatch(createComment(body));
  };

  return (
    <FormWrapper onSubmit={submitHandler}>
      <Input
        type="text"
        name="content"
        id="content"
        placeholder="Leave your comment here..."
        value={content}
        onChange={inputHandler}
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

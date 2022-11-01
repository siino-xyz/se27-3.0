import { GetForm } from "@hooks/getForm";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  categorySelector: string;
  message: string;
};

const contact = () => {
  const { register, handleSubmit, onSubmit, errors } = GetForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">お名前</label>
        <input
          id="name"
          {...register("name", {
            required: true,
            maxLength: 50,
          })}
        />
        {errors.name && (
          <label htmlFor="名前を入力してください">名前を入力してください</label>
        )}
      </div>
      <button type="submit">送信</button> */
    </form>
  );
};

export default contact;

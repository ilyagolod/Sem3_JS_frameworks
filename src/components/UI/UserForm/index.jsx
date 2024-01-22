import React from "react";
import { useForm } from "react-hook-form";
import DiscountButton from "../DiscountButton";
import Button from "../Button";
import Input from "../Input";
import { DISCOUNT_INPUTS } from "../../../constants/data";

import styles from "./userForm.module.scss";

const UserForm = ({ isDark = true, btnType = "discount", onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = () => {
    handleSubmit(onSubmit)();
    reset();
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={styles.inputs__container}>
        {DISCOUNT_INPUTS.map((item, index) => (
          <Input isDark={isDark} key={index} placeholder={item.placeholder} {...register(item.name)} />
        ))}
      </div>

      {btnType === "discount" ? (
        <DiscountButton onClick={submitHandler}>Get a discount</DiscountButton>
      ) : (
        <Button isActionBtn={true} width="100%" onClick={submitHandler} activeText="The Order is Placed">
          Order
        </Button>
      )}
    </form>
  );
};

export default UserForm;

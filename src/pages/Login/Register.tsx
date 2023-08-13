import React from "react";
import "./style.scss";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
};

function UserRegister() {
  const [form] = Form.useForm();
  const userName = Form.useWatch("username", form);
  const password = Form.useWatch("password", form);
  const repassword = Form.useWatch("repassword", form);
  const contact = Form.useWatch("contact", form);

  return (
    <Form
      name="normal_login"
      className="login-form register-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout={"vertical"}
      form={form}
    >
      <div className="login-title">Register</div>
      <div className="user-name-group">
        <Form.Item
          label="User Name"
          name="username"
          className="user-name"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input />
        </Form.Item>
        <Button className={`generate ${userName ? "active" : ""}`}>
          Generate
        </Button>
      </div>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="repassword"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Note"
        name="contact"
        rules={[{ required: true, message: "Please input your contact!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={`login-form-button register-button ${
            userName && password && repassword && contact
              ? "login-normal"
              : "login-disabled"
          }`}
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
export default UserRegister;

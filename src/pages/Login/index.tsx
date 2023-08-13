import React from "react";
import "./style.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
};

function UserLogin() {
  const [form] = Form.useForm();
  const userName = Form.useWatch("username", form);
  const password = Form.useWatch("password", form);
  const navigate = useNavigate();

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout={"vertical"}
      form={form}
    >
      <div className="login-title">Login</div>
      <Form.Item
        label="User Name"
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item className="remember-me-group">
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <div>
          <a className="login-form-forgot" href="">
            Find Id |{" "}
          </a>
          <a className="login-form-forgot" href="">
            Find Password
          </a>
        </div>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={`login-form-button ${
            userName && password ? "login-normal" : "login-disabled"
          }`}
        >
          Log in
        </Button>
        <div className="register-group">
          Don't hava an account?{" "}
          <div onClick={() => navigate("/register")} className="register-now">
            Register now!
          </div>
        </div>
      </Form.Item>
    </Form>
  );
}
export default UserLogin;

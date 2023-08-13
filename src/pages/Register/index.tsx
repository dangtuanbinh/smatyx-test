import "./style.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const userName = Form.useWatch("username", form);
  const password = Form.useWatch("password", form);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    navigate("/auth");
  };

  return (
    <div className="register-wrapper">
      <Form
        name="normal_register"
        className="register-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout={"vertical"}
        form={form}
      >
        <div className="register-title">Register</div>
        <Form.Item
          label="User Name"
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input autoComplete="new-user" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password autoComplete="new-password" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={`register-form-button ${
              userName && password ? "register-normal" : "register-disabled"
            }`}
          >
            Sign up
          </Button>
          <div className="register-group">
            Have an account?{" "}
            <div onClick={() => navigate("/register")} className="register-now">
              Login now!
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
export default Register;

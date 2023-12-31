import "./style.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const userName = Form.useWatch("username", form);
  const password = Form.useWatch("password", form);

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);

    if (values.username === "admintest" && values.password === "12345678") {
      localStorage.setItem("is-login", "true");
      navigate("/");
    }
  };

  return (
    <div className="login-wrapper">
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
            Don't have an account?{" "}
            <div onClick={() => navigate("/auth/register")} className="register-now">
              Register now!
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
export default UserLogin;

import React from "react";
import { Button, Form, Input, Modal } from "antd";
import { FormComponentProps } from "antd/lib/form";
import styled from "styled-components";

/**
 * 1. Form.Item다루기
 * 2. validator 사용하기
 * 3. Modal사용하기
 * 4. Modal커스트마이징
 */

interface IProps extends FormComponentProps {
  email?: string;
}

const Container = styled.div`
  padding: 30px;
  margin: 0 auto;
  width: 500px;
  background: #eee;
  border: 2px solid #ccc;
  border-radius: 10px;

  .ant-btn + .ant-btn {
    margin-left: 8px;
  }
`;

class JoinForm extends React.Component<IProps> {
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { validateFields } = this.props.form;

    validateFields(async (err: any, values: any) => {
      if (!err) {
        Modal.info({
          transitionName: "slidedown",
          className: "my-ant-modal",
          title: "form data",
          content: JSON.stringify(values)
        });
      }
    });
  };

  render() {
    const { email } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="E-mail">
            {getFieldDecorator("email", {
              initialValue: email,
              rules: [
                {
                  type: "email"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator("password", {
              // validateTrigger: "onBlur",
              rules: [
                {
                  required: true,
                  message: "Please input your password!"
                },
                {
                  validator: (rule: any, value: any, callback: any) => {
                    if (value === "1") {
                      callback("Error 발생");
                      return;
                    }
                    callback();
                  }
                },
                {
                  pattern: new RegExp(
                    "^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[`~!@#$%^&*()_+\\-=\\[\\]{}\\\\|;':\",./<>?]).{8,}$",
                    "i"
                  ),
                  message: "올바르지 않은 비밀번호 입니다."
                }
              ]
            })(<Input.Password />)}
          </Form.Item>

          <div style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            <Button
              htmlType="reset"
              onClick={() => {
                this.props.form.resetFields();
              }}
            >
              Reset
            </Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default Form.create<IProps>({})(JoinForm);

import React from "react";
import { Button, Form, Input, message } from "antd";
import { FormComponentProps } from "antd/lib/form";
import styled from "styled-components";
import confirmDialog from "../components/confirmDialog";

/**
 * 1. Form.Item다루기
 * 2. validator 사용하기
 * 3. Modal사용하기
 * 4. Modal커스트마이징
 */

interface IProps extends FormComponentProps {
  email?: string;
}
interface IState {
  loadingSubmit: boolean;
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

class JoinForm extends React.Component<IProps, IState> {
  state = {
    loadingSubmit: false
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { validateFields } = this.props.form;

    validateFields(async (err: any, values: any) => {
      if (!err) {
        this.setState({
          loadingSubmit: true
        });

        try {
          await confirmDialog({
            content: "등록하시겠습니까?"
          });

          message.success("성공하였습니다.");
        } catch (err) {
          if (err.message === "MODAL_CANCEL") {
            return;
          }
          console.log(err);
        }

        this.setState({
          loadingSubmit: false
        });
      }
    });
  };

  render() {
    const { email } = this.props;
    const { loadingSubmit } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="E-mail">
            {getFieldDecorator("email", {
              initialValue: email,
              rules: [
                // {
                //   type: "email"
                // },
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
                }
                // {
                //   validator: (rule: any, value: any, callback: any) => {
                //     if (value === "1") {
                //       callback("Error 발생");
                //       return;
                //     }
                //     callback();
                //   }
                // },
                // {
                //   pattern: new RegExp(
                //     "^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[`~!@#$%^&*()_+\\-=\\[\\]{}\\\\|;':\",./<>?]).{8,}$",
                //     "i"
                //   ),
                //   message: "올바르지 않은 비밀번호 입니다."
                // }
              ]
            })(<Input.Password />)}
          </Form.Item>

          <div style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit" loading={loadingSubmit}>
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

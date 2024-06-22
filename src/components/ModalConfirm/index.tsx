import { Form, Input, Modal } from "antd";
import { ReactNode, useState } from "react";

interface IModalConfirmJoinQuizProps {
  children: ReactNode;
  onSubmit: (playerName: string) => void;
}

const ModalConfirmJoinQuiz = (props: IModalConfirmJoinQuizProps) => {
  const { children, onSubmit } = props;

  const [form] = Form.useForm();

  const selectName = Form.useWatch("name", form);

  const [visible, setVisible] = useState(false);

  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(false);

  const onFinish = (data: { name: string }) => {
    onSubmit(data.name);
  };

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal
        open={visible}
        onClose={onClose}
        onCancel={onClose}
        title="Xác nhận tham gia trò chơi"
        cancelText="Huỷ"
        okText="Xác nhận"
        okButtonProps={{
          disabled: !selectName?.trim(),
        }}
        destroyOnClose
        onOk={() => form.submit()}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Nhập họ tên"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ tên",
              },
            ]}
          >
            <Input placeholder="Họ tên" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalConfirmJoinQuiz;

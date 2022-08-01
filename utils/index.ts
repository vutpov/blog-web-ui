import { message as antdMessage } from "antd";
import { MessageApi } from "antd/lib/message";

const showMessage = (args: {
  key?: keyof MessageApi;
  content: any;
  duration?: number;
  onClose?: () => void;
}) => {
  const { key = "info", content, duration, onClose } = args;
  antdMessage[key](content, duration, onClose);
};

const getErrorMessage = (e: any) => {
  return e?.response?.data?.message || e.message;
};

export { showMessage, getErrorMessage };

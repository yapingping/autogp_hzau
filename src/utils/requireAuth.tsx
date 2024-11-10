import { useNavigate } from "react-router-dom";
import { Modal } from 'antd';
import { getToken } from './token';

export function RequireAuth({ children }) {
  const token = getToken()
  const navigate = useNavigate();
  if (!token) {
    // 弹出提示框
    Modal.confirm({
      title: 'Not logged in',
      content: 'You are not logged in and cannot access this page, please log in.',
      okText: 'Go and log in',
      cancelText: 'Cancel',
      onOk() {
        navigate('/login');
      },
      onCancel() {
        navigate('/');
      }
    });
    return null;
  }
  return children;
}

// export function RequireAuth({ children }) {
//   const token = getToken()
//   if (!token) {
//     window.location.href = '/login';
//     return null;  // 返回 null 或者一个基础的 UI 组件，依据实际需求
//   }
//   return children;
// }
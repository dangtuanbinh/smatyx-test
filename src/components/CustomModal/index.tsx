import "./styles.scss";

import { useSelector } from "react-redux";
import {
  modalData,
  modalStatus,
  modalTemplate,
} from "../../store/selector/RootSelector";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/components/customModal/modalSlice";
import { Modal } from "antd";
import EventEditView from "src/views/event-edit-view";
import EventCreateView from "src/views/event-create-view";

const classNamePrefix = "custom-modal";

function CustomModal() {
  const dispatch = useDispatch<any>();

  const isOpen = useSelector(modalStatus);
  const template = useSelector(modalTemplate);
  const data = useSelector(modalData);

  const generateContent = (template: string) => {
    switch (template) {
      case "event-create-view":
        return <EventCreateView data={data} handleClose={handleClose} />;
      case "event-edit-view":
        return <EventEditView data={data} handleClose={handleClose} />;
      default:
        return;
    }
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      title=""
      open={isOpen}
      closable={false}
      onCancel={handleClose}
      wrapClassName="wrapper"
      width={400}
      footer={null}
      centered={true}
      zIndex={2000}
      className={classNamePrefix}
    >
      {generateContent(template)}
    </Modal>
  );
}

export default CustomModal;

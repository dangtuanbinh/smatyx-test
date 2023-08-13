import { useDispatch } from "react-redux";
import "./styles.scss";
import { ChangeEvent, useState } from "react";
import {
  ITimetableEvent,
  deleteEvent,
  editEvent,
} from "src/store/components/timetable/timetableSlice";
import { useSelector } from "react-redux";
import { getEventList } from "src/store/selector/RootSelector";
import * as lodash from "lodash";
import { openDialog } from "src/store/components/customDialog/dialogSlice";

interface IEventEditViewProps {
  data?: any;
  handleClose: () => void;
}

const classNamePrefix = "event-edit-view";

const EventEditView: React.FC<IEventEditViewProps> = (props) => {
  const { data, handleClose } = props;

  const dispatch = useDispatch();

  const eventList = useSelector(getEventList);

  const [title, setTitle] = useState<string>(data.title);
  const [start, setStart] = useState<any>(data?.start);
  const [end, setend] = useState<any>(data?.end);

  const handleDeleteEvent = () => {
    dispatch(
      openDialog({
        type: "info",
        content: "Do you really want to delete ?",
        confirmText: "Confirm",
        actionConfirm: () => handleDeleteEventConfirm(data.id),
      })
    );
  };

  const handleDeleteEventConfirm = (id: string | number) => {
    const cloneEventList = lodash.clone(eventList);

    const selectedItem = cloneEventList.find(
      (item: ITimetableEvent) => item.id === id
    );
    const indexSelectedItem = cloneEventList.indexOf(selectedItem);

    dispatch(deleteEvent(indexSelectedItem));
    handleClose();
  };

  const handleEditEvent = (id: string, title: string) => {
    const cloneEventList = lodash.clone(eventList);

    const newEventList = cloneEventList.map((item: ITimetableEvent) =>
      item.id === id ? { ...item, title: title } : item
    );

    dispatch(editEvent(newEventList));
    handleClose();
  };

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__info-wrapper`}>
        <div className={`${classNamePrefix}__info-item`}>
          <div>Event Title</div>
          <input
            type="text"
            value={title}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setTitle(event.target.value)
            }
          />
        </div>

        <div className={`${classNamePrefix}__info-item`}>
          <div>Start Date</div>
          <input type="text" value={start} onChange={() => {}} />
        </div>

        <div className={`${classNamePrefix}__info-item`}>
          <div>End Date</div>
          <input type="text" value={end} onChange={() => {}} />
        </div>
      </div>

      <div className={`${classNamePrefix}__button-group`}>
        <div
          className={`${classNamePrefix}__button event-delete`}
          onClick={handleDeleteEvent}
        >
          <span>Delete</span>
        </div>
        <div
          className={`${classNamePrefix}__button event-edit-confirm`}
          onClick={() => handleEditEvent(data.id, title)}
        >
          <span>Confirm Edit</span>
        </div>
      </div>
    </div>
  );
};

export default EventEditView;

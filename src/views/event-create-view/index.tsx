import { useDispatch } from "react-redux";
import "./styles.scss";
import { ChangeEvent, useState } from "react";
import { addEvent } from "src/store/components/timetable/timetableSlice";
import { v4 as uuidv4 } from "uuid";

interface IEventCreateViewProps {
  handleClose: () => void;
  data: any;
}

const classNamePrefix = "event-create-view";

const EventCreateView: React.FC<IEventCreateViewProps> = (props) => {
  const { data, handleClose } = props;

  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>("");

  const handleCreateEvent = () => {
    dispatch(
      addEvent({
        id: uuidv4(),
        title: title,
        start: data.start,
        end: data.end,
      })
    );

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
            placeholder="Enter Event Title"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setTitle(event.target.value)
            }
          />
        </div>

        <div className={`${classNamePrefix}__info-item`}>
          <div>Start Date</div>
          <input type="text" placeholder={data.start} />
        </div>

        <div className={`${classNamePrefix}__info-item`}>
          <div>End Date</div>
          <input type="text" placeholder={data.end} />
        </div>
      </div>

      <div className={`${classNamePrefix}__button-group`}>
        <div
          className={`${classNamePrefix}__button ${
            title ? "event-edit-confirm" : "event-edit-confirm-disabled"
          } `}
          onClick={title ? handleCreateEvent : () => {}}
        >
          <span>Create</span>
        </div>
      </div>
    </div>
  );
};

export default EventCreateView;

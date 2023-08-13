import { ITimetableEvent } from "src/store/components/timetable/timetableSlice";
import "./styles.scss";
import { ChangeEvent, useState } from "react";

interface IEventEditViewProps {
  data?: ITimetableEvent;
}

const classNamePrefix = "event-adding-view";

const EventEditView: React.FC<IEventEditViewProps> = (props) => {
  const { data } = props;

  const [title, setTitle] = useState<string | undefined>(data?.title);
  const [start, setStart] = useState<any>(data?.start);
  const [end, setend] = useState<any>(data?.end);

  return (
    <div className={classNamePrefix}>
      <div>
        <div>
          <div>New Event Title</div>
          <input
            type="text"
            value={title}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setTitle(event.target.value)
            }
          />
        </div>

        <div>
          <div>New Start Date</div>
          <input type="text" value={start} />
        </div>

        <div>
          <div>New End Date</div>
          <input type="text" value={end} />
        </div>
      </div>

      <div>
        <div>
          <span>Delete</span>
        </div>
        <div>
          <span>Confirm Edit</span>
        </div>
      </div>
    </div>
  );
};

export default EventEditView;

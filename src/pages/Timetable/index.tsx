import { useCallback, useMemo, useState } from "react";
import "./styles.scss";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEvent } from "src/store/components/timetable/timetableSlice";
import { useSelector } from "react-redux";
import { getEventList } from "src/store/selector/RootSelector";
import { openModal } from "src/store/components/customModal/modalSlice";

const classNamePrefix = "timetable";

const Timetable = () => {
  const dispatch = useDispatch();

  const [myEvents, setEvents] = useState<any>([]);

  const eventList = useSelector(getEventList);

  console.log(eventList);

  const localizer = momentLocalizer(moment);

  const handleSelectSlot = useCallback(
    ({ start, end }: any) => {
      const title = window.prompt("New Event name");
      if (title) {
        // setEvents((prev: any) => [...prev, { start, end, title }]);
        dispatch(
          addEvent({
            id: uuidv4(),
            title: title,
            start: start,
            end: end,
          })
        );
      }
    },
    []
    // [setEvents]
  );

  const handleSelectEvent = useCallback((event: any) => {
    // window.alert(event.title);
    dispatch(
      openModal({
        template: "event-edit-view",
        size: "normal",
        data: event,
      })
    );
    console.log(event);
  }, []);

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(2023, 8, 13),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  );
  return (
    <div className={classNamePrefix}>
      <Calendar
        defaultDate={defaultDate}
        defaultView={Views.WEEK}
        events={eventList}
        localizer={localizer}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        scrollToTime={scrollToTime}
      />
    </div>
  );
};

export default Timetable;

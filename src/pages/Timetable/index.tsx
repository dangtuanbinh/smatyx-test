import { useCallback, useMemo, useState } from "react";
import "./styles.scss";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const classNamePrefix = "timetable";

const Timetable = () => {
  const [myEvents, setEvents] = useState([]);

  const localizer = momentLocalizer(moment);

  // const handleSelectSlot = useCallback(
  //   ({ start, end }: any) => {
  //     const title = window.prompt("New Event name");
  //     if (title) {
  //       setEvents((prev: any) => [...prev, { start, end, title }]);
  //     }
  //   },
  //   [setEvents]
  // );

  const handleSelectEvent = useCallback(
    (event: any) => window.alert(event.title),
    []
  );

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(2015, 3, 12),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  );
  return (
    <div className={classNamePrefix}>
      <Calendar
        defaultDate={defaultDate}
        defaultView={Views.WEEK}
        localizer={localizer}
        // events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        onSelectEvent={handleSelectEvent}
        // onSelectSlot={handleSelectSlot}
        selectable
        scrollToTime={scrollToTime}
      />
    </div>
  );
};

export default Timetable;

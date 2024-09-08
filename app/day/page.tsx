import { ModeToggle } from '@/components/theme-toggle';
import {
  Calendar,
  CalendarCurrentDate,
  CalendarDayView,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTodayTrigger,
} from '@/components/ui/full-calendar';
import { addHours } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <Calendar
      view="day"
      events={[
        {
          id: '1',
          start: new Date(),
          end: addHours(new Date(), 2),
          title: 'event A',
          color: 'pink',
        },
        {
          id: '2',
          start: addHours(new Date(), 1.5),
          end: addHours(new Date(), 3),
          title: 'event B',
          color: 'blue',
        },
      ]}
    >
      <div className="h-dvh p-14 flex flex-col">
        <div className="flex px-6 items-center gap-2 mb-6">
          <CalendarCurrentDate />

          <CalendarPrevTrigger>
            <ChevronLeft size={20} />
            <span className="sr-only">Previous</span>
          </CalendarPrevTrigger>

          <CalendarTodayTrigger>Today</CalendarTodayTrigger>

          <CalendarNextTrigger>
            <ChevronRight size={20} />
            <span className="sr-only">Next</span>
          </CalendarNextTrigger>

          <ModeToggle />
        </div>

        <div className="flex-1 px-6 overflow-hidden">
          <CalendarDayView />
        </div>
      </div>
    </Calendar>
  );
}

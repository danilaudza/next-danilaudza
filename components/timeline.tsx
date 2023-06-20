import TimelineEvent from "./timeline-event"

const Timeline = ({ data }: any) => {
  return (
    <div className="ml-3 mt-3 space-y-14 border-l-2 border-muted py-16">
      {data.map((event: any, index: any) => (
        <TimelineEvent
          key={event.id}
          date={event.date}
          event={event.event}
          desc={event.desc}
          where={event.where}
          img={event.img}
        />
      ))}
    </div>
  )
}

export default Timeline

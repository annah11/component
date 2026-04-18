import React from "react";
import { Card } from "@group/ui-components";
import { formatDate } from "@group/utils";

export function ActivityTimeline({ events }) {
  return (
    <Card
      title="Feature Y: Activity Timeline"
      description="Date formatting from shared utils"
    >
      <ul style={{ margin: 0, paddingLeft: "1rem" }}>
        {events.map((event) => (
          <li key={event.id}>
            {event.message} on {formatDate(event.date)}
          </li>
        ))}
      </ul>
    </Card>
  );
}

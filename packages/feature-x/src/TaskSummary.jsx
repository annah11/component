import React from "react";
import { Badge, Card } from "@group/ui-components";
import { formatDate, toTitleCase } from "@group/utils";

export function TaskSummary({ tasks }) {
  const total = tasks.length;
  const done = tasks.filter((task) => task.done).length;
  const pending = total - done;

  return (
    <Card
      title="Feature X: Task Summary"
      description={`Updated ${formatDate(new Date())}`}
    >
      <p>{toTitleCase("project task metrics")}</p>
      <p>Total tasks: {total}</p>
      <p>Completed: {done}</p>
      <p>Pending: {pending}</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Badge tone="success">Done {done}</Badge>
        <Badge tone="warning">Pending {pending}</Badge>
      </div>
    </Card>
  );
}

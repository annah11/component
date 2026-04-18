import React from "react";
import { Badge, Card } from "@group/ui-components";

export function StatusInsights({ health = "On Track", risk = "Low" }) {
  const riskTone = risk.toLowerCase() === "low" ? "success" : "warning";

  return (
    <Card
      title="Feature Y: Status Insights"
      description="Reusable status visualization"
    >
      <p>Current health: {health}</p>
      <Badge tone="neutral">Health: {health}</Badge>{" "}
      <Badge tone={riskTone}>Risk: {risk}</Badge>
    </Card>
  );
}

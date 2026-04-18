import React from 'react';
import { Button, Card } from '@group/ui-components';

export function QuickActions({ onAdd, onCompleteAll, onReset }) {
  return (
    <Card
      title="Feature X: Quick Actions"
      description="Shared UI buttons reused inside feature-x"
    >
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button onClick={onAdd}>Add Task</Button>
        <Button variant="secondary" onClick={onCompleteAll}>
          Complete All
        </Button>
        <Button variant="secondary" onClick={onReset}>
          Reset
        </Button>
      </div>
    </Card>
  );
}

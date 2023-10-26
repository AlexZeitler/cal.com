import { useMemo } from "react";

import { trpc } from "@calcom/trpc";
import { SelectField } from "@calcom/ui";

import { useTroubleshooterStore } from "../store";

export function EventTypeSelect() {
  const { data: eventTypes } = trpc.viewer.eventTypes.list.useQuery();
  const selectedEventType = useTroubleshooterStore((state) => state.event);
  const setSelectedEventType = useTroubleshooterStore((state) => state.setEvent);

  // const selectedEventQueryParam = getQueryParam("eventType");

  const options = useMemo(() => {
    if (!eventTypes) return [];
    return eventTypes.map((e) => ({
      label: e.title,
      value: e.slug,
      id: e.id,
      duration: e.length,
    }));
  }, [eventTypes]);

  return (
    <SelectField
      label="Event Type"
      options={options}
      value={options.find((option) => option.value === selectedEventType?.slug) || options[0]}
      onChange={(option) => {
        if (!option) return;
        setSelectedEventType({
          slug: option.value,
          id: option.id,
          duration: option.duration,
        });
      }}
    />
  );
}

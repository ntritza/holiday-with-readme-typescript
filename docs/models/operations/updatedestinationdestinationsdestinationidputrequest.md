# UpdateDestinationDestinationsDestinationIdPutRequest

## Example Usage

```typescript
import { UpdateDestinationDestinationsDestinationIdPutRequest } from "holiday-with-readme/models/operations";

let value: UpdateDestinationDestinationsDestinationIdPutRequest = {
  destinationId: 1,
  destination: {
    country: "Indonesia",
    description: "Beautiful beaches and vibrant culture.",
    name: "Bali",
    rating: 4.8,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `destinationId`                                                  | *number*                                                         | :heavy_check_mark:                                               | The ID of the destination to update.                             | 1                                                                |
| `destination`                                                    | [components.Destination](../../models/components/destination.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
# Destination

Represents a holiday destination.

## Example Usage

```typescript
import { Destination } from "holiday-with-readme/models/components";

let value: Destination = {
  country: "Indonesia",
  description: "Beautiful beaches and vibrant culture.",
  name: "Bali",
  rating: 4.8,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `country`                                     | *string*                                      | :heavy_check_mark:                            | The country where the destination is located. | Indonesia                                     |
| `description`                                 | *string*                                      | :heavy_check_mark:                            | A brief description of the destination.       | Beautiful beaches and vibrant culture.        |
| `name`                                        | *string*                                      | :heavy_check_mark:                            | The name of the holiday destination.          | Bali                                          |
| `rating`                                      | *number*                                      | :heavy_check_mark:                            | Rating of the destination (0 to 5).           | 4.8                                           |
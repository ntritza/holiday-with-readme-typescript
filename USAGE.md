<!-- Start SDK Example Usage [usage] -->
```typescript
import { HolidayWithReadme } from "holiday-with-readme";

const holidayWithReadme = new HolidayWithReadme();

async function run() {
  const result = await holidayWithReadme.general.readRootGet();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
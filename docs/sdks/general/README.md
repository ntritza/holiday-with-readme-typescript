# General
(*general*)

## Overview

General endpoints

### Available Operations

* [readRootGet](#readrootget) - Read Root

## readRootGet

Root endpoint, returns a friendly greeting.

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { HolidayWithReadmeCore } from "holiday-with-readme/core.js";
import { generalReadRootGet } from "holiday-with-readme/funcs/generalReadRootGet.js";

// Use `HolidayWithReadmeCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const holidayWithReadme = new HolidayWithReadmeCore();

async function run() {
  const res = await generalReadRootGet(holidayWithReadme);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |
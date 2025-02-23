/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Destinations } from "./destinations.js";
import { General } from "./general.js";

export class HolidayWithReadme extends ClientSDK {
  private _general?: General;
  get general(): General {
    return (this._general ??= new General(this._options));
  }

  private _destinations?: Destinations;
  get destinations(): Destinations {
    return (this._destinations ??= new Destinations(this._options));
  }
}

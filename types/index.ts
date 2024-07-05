import { SVGProps } from "react";
import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as types from '@opentelemetry/api';

/**
 * Options for Honeycomb configuration
 */
export interface ExporterConfig {
  logger?: types.Logger;
  apiHost: string;
  apiKey: string;
  serviceName: string;
  dataset: string;
}

export interface HoneycombSpan {
  'trace.trace_id': string;
  'trace.span_id': string;
  name: string;
  start_time: Date;
  duration_ms: number;
  'response.status_code': number;
  'status.message': string;
  'meta.beeline_version': number;
  service_name: string;
  //event type
  'meta.type': string;
  'meta.package': string;
  'meta.package_version': string;
  'meta.instrumentations': Instrumentations;
  'meta.node_version': number;
  'meta.local_hostname': string;
}

enum Instrumentations {
  Bluebird = "bluebird",
  ChildProcess = "child_process",
  Express = "express",
  Fastify = "fastify",
  HTTP = "http",
  HTTPS = "https",
  MongoDB = "mongodb",
  Mongoose = "mongoose",
  MPromise = "mpromise",
  MySQL = "mysql2",
  PG = "pg",
  ReactDomServer = "react-dom/server",
  Sequelize = "sequelize",
}
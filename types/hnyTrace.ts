import { Span } from "@opentelemetry/api";

interface HoneycombSpan {
    'trace.trace_id': string;
    'trace.span_id': string;
    name: string;
    start_time: Date;
    duration_ms: number;
    'response.status_code': number;
    'status.message': string;
    'meta.beeline_version': number;
    service_name: string;
    'meta.type': string;
    'meta.package_version': string;
    'meta.instrumentations': 
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
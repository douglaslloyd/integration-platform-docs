---
title: Worker Properties
---

# Worker Properties

| Property| Description| Default Value |
| --- | --- | --- |
| worker.concurrency | Number of concurrent jobs this worker is allowed to process |  |
|worker.destinationId | The destination IS (job queue) this worker pulls jobs from |  |
| worker.embedded | Allows Integration Manager to spin up an embedded worker without external queueing. Not appropriate for production or network systems. | true |
| worker.engineJavaHome | The Java Runtime Environment used by this worker to create engines | $&#123;sharedDataPath}/di-standalone-engine/jre |
| worker.workerLocalDir | Temporary workspace used by the worker to process job artifacts and results | $&#123;sharedDataPath}/local |
| worker. libraryPath | Note: Set during installation. Do not edit. | $&#123;installPath}/lib |
| worker.api.port | Port used to communicate with the worker remotely | 6000 or 7000, depending on installation type |

---
title: Scheduling Properties
---

# Scheduling Properties

| Property| Description| Default Value |
| --- | --- | --- |
| org.quartz.ext.correct-timeouts-at-startup | Rebuild job timeout schedules and triggers at startup | true |
| org.quartz.ext.correct-schedules-at-startup | Rebuild job schedules and triggers at startup | false |
| spring.quartz.auto-startup | Whether to automatically start the scheduler after initialization | true |
| spring.quartz.properties.* | Additional Quartz Scheduler properties. http://www.quartz-scheduler.org/documentation/quartz-2.3.0/configuration/. You can also drop a quartz.properties file into the IntegrationManager/conf folder | — |
| spring.quartz.scheduler-name | Name of the scheduler. This is typically used in a distributed environment, or where you may have multiple Integration Manager servers connecting to a single external database. | — |
| spring.quartz.startup-delay | The amount of time in seconds to wait before starting the scheduler | 15s |
| spring.quartz.wait-for-jobs-to-complete-on-shutdown | spring.quartz.wait-for-jobs-to-complete-on-shutdown | false |
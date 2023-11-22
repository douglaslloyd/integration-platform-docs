---
title: Web Server Properties
---

# Web Server Properties

| Property| Description| Default Value |
| --- | --- | --- |
| im.base-url | Allows you to set or customize the base URL for creating or resolving API URLs | http://IM_SERVER_DOMAIN_NAME:$&#123;s erver.port} |
| security.require-ssl | Strictly disallows any non-https traffic | false |
| server.port | Port used for API and UI access | 8080 |
| server.ssl.key-alias | The alias/certificate name used for encrypting HTTPS traffic | — |
| server.ssl.key-store | The keystore file location containing the HTTPS certificate | — |
| server.ssl.key-store-password | The certificate password | — |
| server.ssl.key-store-type | The keystore type (PKCS12 recommended) | — |
| spring.servlet.multipart.enabled | Whether to enable support of multipart uploads. | true |
| spring.servlet.multipart.file-size-threshold | Threshold after which files are written to disk. | 100KB |
| spring.servlet.multipart.location | Intermediate location of uploaded files. | $&#123;sharedDataPath}/tmp |
| spring.servlet.multipart.max-file-size | Max file size. | 1MB |
| spring.servlet.multipart.max-request-size | Max request size | 10MB |
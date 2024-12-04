utils for tracking unstable APIs in denoland/std

### Unstable packages

| No | Package       | Current version | Started at | Age at<br/>2024-12-04 |
| -- | ------------- | --------------- | ---------- | --------------------- |
| 1  | @std/datetime | 0.225.2         | 2019-01-03 | 5 years               |
| 2  | @std/io       | 0.225.0         | 2019-01-12 | 5 years               |
| 3  | @std/log      | 0.224.11        | 2019-01-12 | 5 years               |
| 4  | @std/dotenv   | 0.225.2         | 2022-02-23 | 2 years               |
| 5  | @std/ini      | 1.0.0-rc.5      | 2023-12-04 | 1 year                |
| 6  | @std/webgpu   | 0.224.7         | 2023-12-12 | 11 months             |
| 7  | @std/cache    | 0.1.3           | 2024-08-09 | 3 months              |
| 8  | @std/tar      | 0.1.4           | 2024-09-04 | 3 months              |
| 9  | @std/random   | 0.1.0           | 2024-09-05 | 3 months              |
| 10 | @std/cbor     | 0.1.2           | 2024-10-10 | 1 month               |

### Unstable APIs

| No | Package              | Path                                  | Started at | Age at<br/>2024-12-04 |
| -- | -------------------- | ------------------------------------- | ---------- | --------------------- |
| 1  | @std/http            | unstable-method                       | 2023-10-13 | 1 year                |
| 2  | @std/http            | unstable-signed-cookie                | 2023-12-13 | 11 months             |
| 3  | @std/assert          | unstable-never                        | 2024-09-11 | 2 months              |
| 4  | @std/http            | unstable-header                       | 2024-09-11 | 2 months              |
| 5  | @std/uuid            | unstable-v7                           | 2024-09-11 | 2 months              |
| 6  | @std/cli             | unstable-spinner                      | 2024-09-12 | 2 months              |
| 7  | @std/data-structures | unstable-bidirectional-map            | 2024-09-12 | 2 months              |
| 8  | @std/encoding        | unstable-base32-stream                | 2024-09-12 | 2 months              |
| 9  | @std/encoding        | unstable-base32hex                    | 2024-09-12 | 2 months              |
| 10 | @std/encoding        | unstable-base32hex-stream             | 2024-09-12 | 2 months              |
| 11 | @std/encoding        | unstable-base64-stream                | 2024-09-12 | 2 months              |
| 12 | @std/encoding        | unstable-base64url-stream             | 2024-09-12 | 2 months              |
| 13 | @std/encoding        | unstable-hex-stream                   | 2024-09-12 | 2 months              |
| 14 | @std/front-matter    | unstable-yaml                         | 2024-09-12 | 2 months              |
| 15 | @std/html            | unstable-is-valid-custom-element-name | 2024-09-12 | 2 months              |
| 16 | @std/http            | unstable-route                        | 2024-09-12 | 2 months              |
| 17 | @std/net             | unstable-get-network-address          | 2024-09-12 | 2 months              |
| 18 | @std/path/posix      | unstable-basename                     | 2024-09-12 | 2 months              |
| 19 | @std/path/posix      | unstable-dirname                      | 2024-09-12 | 2 months              |
| 20 | @std/path/posix      | unstable-extname                      | 2024-09-12 | 2 months              |
| 21 | @std/path/posix      | unstable-join                         | 2024-09-12 | 2 months              |
| 22 | @std/path/posix      | unstable-normalize                    | 2024-09-12 | 2 months              |
| 23 | @std/path            | unstable-basename                     | 2024-09-12 | 2 months              |
| 24 | @std/path            | unstable-dirname                      | 2024-09-12 | 2 months              |
| 25 | @std/path            | unstable-extname                      | 2024-09-12 | 2 months              |
| 26 | @std/path            | unstable-join                         | 2024-09-12 | 2 months              |
| 27 | @std/path            | unstable-normalize                    | 2024-09-12 | 2 months              |
| 28 | @std/path/windows    | unstable-basename                     | 2024-09-12 | 2 months              |
| 29 | @std/path/windows    | unstable-dirname                      | 2024-09-12 | 2 months              |
| 30 | @std/path/windows    | unstable-extname                      | 2024-09-12 | 2 months              |
| 31 | @std/path/windows    | unstable-join                         | 2024-09-12 | 2 months              |
| 32 | @std/path/windows    | unstable-normalize                    | 2024-09-12 | 2 months              |
| 33 | @std/streams         | unstable-fixed-chunk-stream           | 2024-09-12 | 2 months              |
| 34 | @std/streams         | unstable-to-lines                     | 2024-09-12 | 2 months              |
| 35 | @std/text            | unstable-slugify                      | 2024-09-12 | 2 months              |
| 36 | @std/text            | unstable-to-constant-case             | 2024-09-12 | 2 months              |
| 37 | @std/streams         | unstable-to-bytes                     | 2024-09-18 | 2 months              |
| 38 | @std/collections     | unstable-take-while                   | 2024-09-20 | 2 months              |
| 39 | @std/collections     | unstable-chunk                        | 2024-09-23 | 2 months              |
| 40 | @std/collections     | unstable-sort-by                      | 2024-09-23 | 2 months              |
| 41 | @std/collections     | unstable-sample                       | 2024-09-24 | 2 months              |
| 42 | @std/collections     | unstable-without-all                  | 2024-09-24 | 2 months              |
| 43 | @std/collections     | unstable-drop-last-while              | 2024-10-02 | 2 months              |
| 44 | @std/async           | unstable-mux-async-iterator           | 2024-10-08 | 1 month               |
| 45 | @std/collections     | unstable-intersect                    | 2024-10-08 | 1 month               |
| 46 | @std/collections     | unstable-drop-while                   | 2024-10-09 | 1 month               |
| 47 | @std/collections     | unstable-take-last-while              | 2024-10-09 | 1 month               |
| 48 | @std/streams         | unstable-to-byte-stream               | 2024-10-09 | 1 month               |
| 49 | @std/collections     | unstable-sliding-windows              | 2024-10-16 | 1 month               |
| 50 | @std/async           | unstable-throttle                     | 2024-10-21 | 1 month               |
| 51 | @std/testing         | unstable-types                        | 2024-10-29 | 1 month               |
| 52 | @std/testing         | unstable-stub                         | 2024-10-31 | 1 month               |
| 53 | @std/csv             | unstable-stringify                    | 2024-11-14 | 20 days               |
| 54 | @std/async           | unstable-retry                        | 2024-11-22 | 12 days               |

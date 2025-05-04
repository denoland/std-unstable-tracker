utils for tracking unstable APIs in denoland/std

Run `deno task build` and `deno task render` to update.

<!-- Tables Start -->

### Unstable packages

| No | Package                                       | Current version | Started at | Age at<br/>2025-05-04 |
| -- | --------------------------------------------- | --------------- | ---------- | --------------------- |
| 1  | [@std/datetime](https://jsr.io/@std/datetime) | 0.225.4         | 2019-01-03 | 6 years               |
| 2  | [@std/io](https://jsr.io/@std/io)             | 0.225.2         | 2019-01-12 | 6 years               |
| 3  | [@std/log](https://jsr.io/@std/log)           | 0.224.14        | 2019-01-12 | 6 years               |
| 4  | [@std/dotenv](https://jsr.io/@std/dotenv)     | 0.225.3         | 2022-02-23 | 3 years               |
| 5  | [@std/ini](https://jsr.io/@std/ini)           | 1.0.0-rc.8      | 2023-12-04 | 1 year                |
| 6  | [@std/webgpu](https://jsr.io/@std/webgpu)     | 0.224.8         | 2023-12-12 | 1 year                |
| 7  | [@std/cache](https://jsr.io/@std/cache)       | 0.2.0           | 2024-08-09 | 8 months              |
| 8  | [@std/tar](https://jsr.io/@std/tar)           | 0.1.6           | 2024-09-04 | 8 months              |
| 9  | [@std/random](https://jsr.io/@std/random)     | 0.1.0           | 2024-09-05 | 8 months              |
| 10 | [@std/cbor](https://jsr.io/@std/cbor)         | 0.1.8           | 2024-10-10 | 6 months              |

### Unstable APIs

| No | Package                                                     | Path                                                                                                        | Started at | Age at<br/>2025-05-04 |
| -- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------- | --------------------- |
| 1  | [@std/http](https://jsr.io/@std/http)                       | [unstable-method](https://jsr.io/@std/http/doc/unstable-method)                                             | 2023-10-13 | 1 year                |
| 2  | [@std/http](https://jsr.io/@std/http)                       | [unstable-signed-cookie](https://jsr.io/@std/http/doc/unstable-signed-cookie)                               | 2023-12-13 | 1 year                |
| 3  | [@std/assert](https://jsr.io/@std/assert)                   | [unstable-never](https://jsr.io/@std/assert/doc/unstable-never)                                             | 2024-09-11 | 7 months              |
| 4  | [@std/http](https://jsr.io/@std/http)                       | [unstable-header](https://jsr.io/@std/http/doc/unstable-header)                                             | 2024-09-11 | 7 months              |
| 5  | [@std/uuid](https://jsr.io/@std/uuid)                       | [unstable-v7](https://jsr.io/@std/uuid/doc/unstable-v7)                                                     | 2024-09-11 | 7 months              |
| 6  | [@std/cli](https://jsr.io/@std/cli)                         | [unstable-spinner](https://jsr.io/@std/cli/doc/unstable-spinner)                                            | 2024-09-12 | 7 months              |
| 7  | [@std/data-structures](https://jsr.io/@std/data-structures) | [unstable-bidirectional-map](https://jsr.io/@std/data-structures/doc/unstable-bidirectional-map)            | 2024-09-12 | 7 months              |
| 8  | [@std/encoding](https://jsr.io/@std/encoding)               | [unstable-base32-stream](https://jsr.io/@std/encoding/doc/unstable-base32-stream)                           | 2024-09-12 | 7 months              |
| 9  | [@std/encoding](https://jsr.io/@std/encoding)               | [unstable-base64-stream](https://jsr.io/@std/encoding/doc/unstable-base64-stream)                           | 2024-09-12 | 7 months              |
| 10 | [@std/encoding](https://jsr.io/@std/encoding)               | [unstable-hex-stream](https://jsr.io/@std/encoding/doc/unstable-hex-stream)                                 | 2024-09-12 | 7 months              |
| 11 | [@std/front-matter](https://jsr.io/@std/front-matter)       | [unstable-yaml](https://jsr.io/@std/front-matter/doc/unstable-yaml)                                         | 2024-09-12 | 7 months              |
| 12 | [@std/html](https://jsr.io/@std/html)                       | [unstable-is-valid-custom-element-name](https://jsr.io/@std/html/doc/unstable-is-valid-custom-element-name) | 2024-09-12 | 7 months              |
| 13 | [@std/http](https://jsr.io/@std/http)                       | [unstable-route](https://jsr.io/@std/http/doc/unstable-route)                                               | 2024-09-12 | 7 months              |
| 14 | [@std/net](https://jsr.io/@std/net)                         | [unstable-get-network-address](https://jsr.io/@std/net/doc/unstable-get-network-address)                    | 2024-09-12 | 7 months              |
| 15 | [@std/path/posix](https://jsr.io/@std/path/doc/posix)       | [unstable-basename](https://jsr.io/@std/path/doc/posix/unstable-basename)                                   | 2024-09-12 | 7 months              |
| 16 | [@std/path/posix](https://jsr.io/@std/path/doc/posix)       | [unstable-dirname](https://jsr.io/@std/path/doc/posix/unstable-dirname)                                     | 2024-09-12 | 7 months              |
| 17 | [@std/path/posix](https://jsr.io/@std/path/doc/posix)       | [unstable-extname](https://jsr.io/@std/path/doc/posix/unstable-extname)                                     | 2024-09-12 | 7 months              |
| 18 | [@std/path/posix](https://jsr.io/@std/path/doc/posix)       | [unstable-join](https://jsr.io/@std/path/doc/posix/unstable-join)                                           | 2024-09-12 | 7 months              |
| 19 | [@std/path/posix](https://jsr.io/@std/path/doc/posix)       | [unstable-normalize](https://jsr.io/@std/path/doc/posix/unstable-normalize)                                 | 2024-09-12 | 7 months              |
| 20 | [@std/path](https://jsr.io/@std/path)                       | [unstable-basename](https://jsr.io/@std/path/doc/unstable-basename)                                         | 2024-09-12 | 7 months              |
| 21 | [@std/path](https://jsr.io/@std/path)                       | [unstable-dirname](https://jsr.io/@std/path/doc/unstable-dirname)                                           | 2024-09-12 | 7 months              |
| 22 | [@std/path](https://jsr.io/@std/path)                       | [unstable-extname](https://jsr.io/@std/path/doc/unstable-extname)                                           | 2024-09-12 | 7 months              |
| 23 | [@std/path](https://jsr.io/@std/path)                       | [unstable-join](https://jsr.io/@std/path/doc/unstable-join)                                                 | 2024-09-12 | 7 months              |
| 24 | [@std/path](https://jsr.io/@std/path)                       | [unstable-normalize](https://jsr.io/@std/path/doc/unstable-normalize)                                       | 2024-09-12 | 7 months              |
| 25 | [@std/path/windows](https://jsr.io/@std/path/doc/windows)   | [unstable-basename](https://jsr.io/@std/path/doc/windows/unstable-basename)                                 | 2024-09-12 | 7 months              |
| 26 | [@std/path/windows](https://jsr.io/@std/path/doc/windows)   | [unstable-dirname](https://jsr.io/@std/path/doc/windows/unstable-dirname)                                   | 2024-09-12 | 7 months              |
| 27 | [@std/path/windows](https://jsr.io/@std/path/doc/windows)   | [unstable-extname](https://jsr.io/@std/path/doc/windows/unstable-extname)                                   | 2024-09-12 | 7 months              |
| 28 | [@std/path/windows](https://jsr.io/@std/path/doc/windows)   | [unstable-join](https://jsr.io/@std/path/doc/windows/unstable-join)                                         | 2024-09-12 | 7 months              |
| 29 | [@std/path/windows](https://jsr.io/@std/path/doc/windows)   | [unstable-normalize](https://jsr.io/@std/path/doc/windows/unstable-normalize)                               | 2024-09-12 | 7 months              |
| 30 | [@std/streams](https://jsr.io/@std/streams)                 | [unstable-fixed-chunk-stream](https://jsr.io/@std/streams/doc/unstable-fixed-chunk-stream)                  | 2024-09-12 | 7 months              |
| 31 | [@std/streams](https://jsr.io/@std/streams)                 | [unstable-to-lines](https://jsr.io/@std/streams/doc/unstable-to-lines)                                      | 2024-09-12 | 7 months              |
| 32 | [@std/text](https://jsr.io/@std/text)                       | [unstable-slugify](https://jsr.io/@std/text/doc/unstable-slugify)                                           | 2024-09-12 | 7 months              |
| 33 | [@std/text](https://jsr.io/@std/text)                       | [unstable-to-constant-case](https://jsr.io/@std/text/doc/unstable-to-constant-case)                         | 2024-09-12 | 7 months              |
| 34 | [@std/streams](https://jsr.io/@std/streams)                 | [unstable-to-bytes](https://jsr.io/@std/streams/doc/unstable-to-bytes)                                      | 2024-09-18 | 7 months              |
| 35 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-take-while](https://jsr.io/@std/collections/doc/unstable-take-while)                              | 2024-09-20 | 7 months              |
| 36 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-chunk](https://jsr.io/@std/collections/doc/unstable-chunk)                                        | 2024-09-23 | 7 months              |
| 37 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-sort-by](https://jsr.io/@std/collections/doc/unstable-sort-by)                                    | 2024-09-23 | 7 months              |
| 38 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-sample](https://jsr.io/@std/collections/doc/unstable-sample)                                      | 2024-09-24 | 7 months              |
| 39 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-without-all](https://jsr.io/@std/collections/doc/unstable-without-all)                            | 2024-09-24 | 7 months              |
| 40 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-drop-last-while](https://jsr.io/@std/collections/doc/unstable-drop-last-while)                    | 2024-10-02 | 7 months              |
| 41 | [@std/async](https://jsr.io/@std/async)                     | [unstable-mux-async-iterator](https://jsr.io/@std/async/doc/unstable-mux-async-iterator)                    | 2024-10-08 | 6 months              |
| 42 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-intersect](https://jsr.io/@std/collections/doc/unstable-intersect)                                | 2024-10-08 | 6 months              |
| 43 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-drop-while](https://jsr.io/@std/collections/doc/unstable-drop-while)                              | 2024-10-09 | 6 months              |
| 44 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-take-last-while](https://jsr.io/@std/collections/doc/unstable-take-last-while)                    | 2024-10-09 | 6 months              |
| 45 | [@std/streams](https://jsr.io/@std/streams)                 | [unstable-to-byte-stream](https://jsr.io/@std/streams/doc/unstable-to-byte-stream)                          | 2024-10-09 | 6 months              |
| 46 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-sliding-windows](https://jsr.io/@std/collections/doc/unstable-sliding-windows)                    | 2024-10-16 | 6 months              |
| 47 | [@std/async](https://jsr.io/@std/async)                     | [unstable-throttle](https://jsr.io/@std/async/doc/unstable-throttle)                                        | 2024-10-21 | 6 months              |
| 48 | [@std/testing](https://jsr.io/@std/testing)                 | [unstable-types](https://jsr.io/@std/testing/doc/unstable-types)                                            | 2024-10-29 | 6 months              |
| 49 | [@std/testing](https://jsr.io/@std/testing)                 | [unstable-stub](https://jsr.io/@std/testing/doc/unstable-stub)                                              | 2024-10-31 | 6 months              |
| 50 | [@std/csv](https://jsr.io/@std/csv)                         | [unstable-stringify](https://jsr.io/@std/csv/doc/unstable-stringify)                                        | 2024-11-14 | 5 months              |
| 51 | [@std/async](https://jsr.io/@std/async)                     | [unstable-retry](https://jsr.io/@std/async/doc/unstable-retry)                                              | 2024-11-22 | 5 months              |
| 52 | [@std/cli](https://jsr.io/@std/cli)                         | [unstable-prompt-select](https://jsr.io/@std/cli/doc/unstable-prompt-select)                                | 2024-11-25 | 5 months              |
| 53 | [@std/cli](https://jsr.io/@std/cli)                         | [unstable-prompt-multiple-select](https://jsr.io/@std/cli/doc/unstable-prompt-multiple-select)              | 2024-12-12 | 4 months              |
| 54 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-stat](https://jsr.io/@std/fs/doc/unstable-stat)                                                   | 2024-12-16 | 4 months              |
| 55 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-types](https://jsr.io/@std/fs/doc/unstable-types)                                                 | 2024-12-16 | 4 months              |
| 56 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-lstat](https://jsr.io/@std/fs/doc/unstable-lstat)                                                 | 2024-12-19 | 4 months              |
| 57 | [@std/testing](https://jsr.io/@std/testing)                 | [unstable-bdd](https://jsr.io/@std/testing/doc/unstable-bdd)                                                | 2024-12-20 | 4 months              |
| 58 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-read-dir](https://jsr.io/@std/fs/doc/unstable-read-dir)                                           | 2025-01-13 | 3 months              |
| 59 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-chmod](https://jsr.io/@std/fs/doc/unstable-chmod)                                                 | 2025-01-17 | 3 months              |
| 60 | [@std/async](https://jsr.io/@std/async)                     | [unstable-wait-for](https://jsr.io/@std/async/doc/unstable-wait-for)                                        | 2025-01-20 | 3 months              |
| 61 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-symlink](https://jsr.io/@std/fs/doc/unstable-symlink)                                             | 2025-01-20 | 3 months              |
| 62 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-real-path](https://jsr.io/@std/fs/doc/unstable-real-path)                                         | 2025-01-27 | 3 months              |
| 63 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-link](https://jsr.io/@std/fs/doc/unstable-link)                                                   | 2025-01-28 | 3 months              |
| 64 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-read-link](https://jsr.io/@std/fs/doc/unstable-read-link)                                         | 2025-01-31 | 3 months              |
| 65 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-rename](https://jsr.io/@std/fs/doc/unstable-rename)                                               | 2025-02-03 | 3 months              |
| 66 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-make-temp-dir](https://jsr.io/@std/fs/doc/unstable-make-temp-dir)                                 | 2025-02-11 | 2 months              |
| 67 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-read-file](https://jsr.io/@std/fs/doc/unstable-read-file)                                         | 2025-02-11 | 2 months              |
| 68 | [@std/cli](https://jsr.io/@std/cli)                         | [unstable-progress-bar](https://jsr.io/@std/cli/doc/unstable-progress-bar)                                  | 2025-02-13 | 2 months              |
| 69 | [@std/cli](https://jsr.io/@std/cli)                         | [unstable-progress-bar-stream](https://jsr.io/@std/cli/doc/unstable-progress-bar-stream)                    | 2025-02-13 | 2 months              |
| 70 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-read-text-file](https://jsr.io/@std/fs/doc/unstable-read-text-file)                               | 2025-02-18 | 2 months              |
| 71 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-truncate](https://jsr.io/@std/fs/doc/unstable-truncate)                                           | 2025-02-18 | 2 months              |
| 72 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-mkdir](https://jsr.io/@std/fs/doc/unstable-mkdir)                                                 | 2025-02-20 | 2 months              |
| 73 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-copy-file](https://jsr.io/@std/fs/doc/unstable-copy-file)                                         | 2025-02-21 | 2 months              |
| 74 | [@std/text](https://jsr.io/@std/text)                       | [unstable-reverse](https://jsr.io/@std/text/doc/unstable-reverse)                                           | 2025-02-26 | 2 months              |
| 75 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-utime](https://jsr.io/@std/fs/doc/unstable-utime)                                                 | 2025-02-28 | 2 months              |
| 76 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-umask](https://jsr.io/@std/fs/doc/unstable-umask)                                                 | 2025-02-28 | 2 months              |
| 77 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-remove](https://jsr.io/@std/fs/doc/unstable-remove)                                               | 2025-03-03 | 2 months              |
| 78 | [@std/encoding](https://jsr.io/@std/encoding)               | [unstable-base64](https://jsr.io/@std/encoding/doc/unstable-base64)                                         | 2025-03-04 | 2 months              |
| 79 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-write-file](https://jsr.io/@std/fs/doc/unstable-write-file)                                       | 2025-03-04 | 2 months              |
| 80 | [@std/uuid](https://jsr.io/@std/uuid)                       | [unstable-v6](https://jsr.io/@std/uuid/doc/unstable-v6)                                                     | 2025-03-06 | 1 month               |
| 81 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-write-text-file](https://jsr.io/@std/fs/doc/unstable-write-text-file)                             | 2025-03-07 | 1 month               |
| 82 | [@std/encoding](https://jsr.io/@std/encoding)               | [unstable-base32](https://jsr.io/@std/encoding/doc/unstable-base32)                                         | 2025-03-10 | 1 month               |
| 83 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-make-temp-file](https://jsr.io/@std/fs/doc/unstable-make-temp-file)                               | 2025-03-16 | 1 month               |
| 84 | [@std/encoding](https://jsr.io/@std/encoding)               | [unstable-hex](https://jsr.io/@std/encoding/doc/unstable-hex)                                               | 2025-03-18 | 1 month               |
| 85 | [@std/text](https://jsr.io/@std/text)                       | [unstable-dedent](https://jsr.io/@std/text/doc/unstable-dedent)                                             | 2025-03-24 | 1 month               |
| 86 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-chown](https://jsr.io/@std/fs/doc/unstable-chown)                                                 | 2025-04-06 | 28 days               |
| 87 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-open](https://jsr.io/@std/fs/doc/unstable-open)                                                   | 2025-04-14 | 20 days               |
| 88 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-create](https://jsr.io/@std/fs/doc/unstable-create)                                               | 2025-04-17 | 17 days               |

<!-- Tables End -->

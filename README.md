utils for tracking unstable APIs in denoland/std

Run `deno task build` and `deno task render` to update.

<!-- Tables Start -->

### Unstable packages

| No | Package                                       | Current version | Started at | Age at<br/>2026-01-15 |
| -- | --------------------------------------------- | --------------- | ---------- | --------------------- |
| 1  | [@std/datetime](https://jsr.io/@std/datetime) | 0.225.4         | 2019-01-03 | 7 years               |
| 2  | [@std/io](https://jsr.io/@std/io)             | 0.225.2         | 2019-01-12 | 7 years               |
| 3  | [@std/log](https://jsr.io/@std/log)           | 0.224.14        | 2019-01-12 | 7 years               |
| 4  | [@std/dotenv](https://jsr.io/@std/dotenv)     | 0.225.3         | 2022-02-23 | 3 years               |
| 5  | [@std/ini](https://jsr.io/@std/ini)           | 1.0.0-rc.8      | 2023-12-04 | 2 years               |
| 6  | [@std/webgpu](https://jsr.io/@std/webgpu)     | 0.224.8         | 2023-12-12 | 2 years               |
| 7  | [@std/cache](https://jsr.io/@std/cache)       | 0.2.0           | 2024-08-09 | 1 year                |
| 8  | [@std/tar](https://jsr.io/@std/tar)           | 0.1.6           | 2024-09-04 | 1 year                |
| 9  | [@std/random](https://jsr.io/@std/random)     | 0.1.0           | 2024-09-05 | 1 year                |
| 10 | [@std/cbor](https://jsr.io/@std/cbor)         | 0.1.8           | 2024-10-10 | 1 year                |

### Unstable APIs

| No | Package                                                     | Path                                                                                                        | Type | Started at | Age at<br/>2026-01-15 |
| -- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---- | ---------- | --------------------- |
| 1  | [@std/http](https://jsr.io/@std/http)                       | [unstable-method](https://jsr.io/@std/http/doc/unstable-method)                                             | New  | 2023-10-13 | 2 years               |
| 2  | [@std/http](https://jsr.io/@std/http)                       | [unstable-signed-cookie](https://jsr.io/@std/http/doc/unstable-signed-cookie)                               | New  | 2023-12-13 | 2 years               |
| 3  | [@std/assert](https://jsr.io/@std/assert)                   | [unstable-never](https://jsr.io/@std/assert/doc/unstable-never)                                             | New  | 2024-09-11 | 1 year                |
| 4  | [@std/http](https://jsr.io/@std/http)                       | [unstable-header](https://jsr.io/@std/http/doc/unstable-header)                                             | New  | 2024-09-11 | 1 year                |
| 5  | [@std/uuid](https://jsr.io/@std/uuid)                       | [unstable-v7](https://jsr.io/@std/uuid/doc/unstable-v7)                                                     | New  | 2024-09-11 | 1 year                |
| 6  | [@std/cli](https://jsr.io/@std/cli)                         | [unstable-spinner](https://jsr.io/@std/cli/doc/unstable-spinner)                                            | New  | 2024-09-12 | 1 year                |
| 7  | [@std/data-structures](https://jsr.io/@std/data-structures) | [unstable-bidirectional-map](https://jsr.io/@std/data-structures/doc/unstable-bidirectional-map)            | New  | 2024-09-12 | 1 year                |
| 8  | [@std/encoding](https://jsr.io/@std/encoding)               | [unstable-base32-stream](https://jsr.io/@std/encoding/doc/unstable-base32-stream)                           | New  | 2024-09-12 | 1 year                |
| 9  | [@std/encoding](https://jsr.io/@std/encoding)               | [unstable-base64-stream](https://jsr.io/@std/encoding/doc/unstable-base64-stream)                           | New  | 2024-09-12 | 1 year                |
| 10 | [@std/encoding](https://jsr.io/@std/encoding)               | [unstable-hex-stream](https://jsr.io/@std/encoding/doc/unstable-hex-stream)                                 | New  | 2024-09-12 | 1 year                |
| 11 | [@std/front-matter](https://jsr.io/@std/front-matter)       | [unstable-yaml](https://jsr.io/@std/front-matter/doc/unstable-yaml)                                         | Fork | 2024-09-12 | 1 year                |
| 12 | [@std/html](https://jsr.io/@std/html)                       | [unstable-is-valid-custom-element-name](https://jsr.io/@std/html/doc/unstable-is-valid-custom-element-name) | New  | 2024-09-12 | 1 year                |
| 13 | [@std/http](https://jsr.io/@std/http)                       | [unstable-route](https://jsr.io/@std/http/doc/unstable-route)                                               | New  | 2024-09-12 | 1 year                |
| 14 | [@std/net](https://jsr.io/@std/net)                         | [unstable-get-network-address](https://jsr.io/@std/net/doc/unstable-get-network-address)                    | New  | 2024-09-12 | 1 year                |
| 15 | [@std/path/posix](https://jsr.io/@std/path/doc/posix)       | [unstable-basename](https://jsr.io/@std/path/doc/posix/unstable-basename)                                   | Fork | 2024-09-12 | 1 year                |
| 16 | [@std/path/posix](https://jsr.io/@std/path/doc/posix)       | [unstable-dirname](https://jsr.io/@std/path/doc/posix/unstable-dirname)                                     | Fork | 2024-09-12 | 1 year                |
| 17 | [@std/path/posix](https://jsr.io/@std/path/doc/posix)       | [unstable-extname](https://jsr.io/@std/path/doc/posix/unstable-extname)                                     | Fork | 2024-09-12 | 1 year                |
| 18 | [@std/path/posix](https://jsr.io/@std/path/doc/posix)       | [unstable-join](https://jsr.io/@std/path/doc/posix/unstable-join)                                           | Fork | 2024-09-12 | 1 year                |
| 19 | [@std/path/posix](https://jsr.io/@std/path/doc/posix)       | [unstable-normalize](https://jsr.io/@std/path/doc/posix/unstable-normalize)                                 | Fork | 2024-09-12 | 1 year                |
| 20 | [@std/path](https://jsr.io/@std/path)                       | [unstable-basename](https://jsr.io/@std/path/doc/unstable-basename)                                         | Fork | 2024-09-12 | 1 year                |
| 21 | [@std/path](https://jsr.io/@std/path)                       | [unstable-dirname](https://jsr.io/@std/path/doc/unstable-dirname)                                           | Fork | 2024-09-12 | 1 year                |
| 22 | [@std/path](https://jsr.io/@std/path)                       | [unstable-extname](https://jsr.io/@std/path/doc/unstable-extname)                                           | Fork | 2024-09-12 | 1 year                |
| 23 | [@std/path](https://jsr.io/@std/path)                       | [unstable-join](https://jsr.io/@std/path/doc/unstable-join)                                                 | Fork | 2024-09-12 | 1 year                |
| 24 | [@std/path](https://jsr.io/@std/path)                       | [unstable-normalize](https://jsr.io/@std/path/doc/unstable-normalize)                                       | Fork | 2024-09-12 | 1 year                |
| 25 | [@std/path/windows](https://jsr.io/@std/path/doc/windows)   | [unstable-basename](https://jsr.io/@std/path/doc/windows/unstable-basename)                                 | Fork | 2024-09-12 | 1 year                |
| 26 | [@std/path/windows](https://jsr.io/@std/path/doc/windows)   | [unstable-dirname](https://jsr.io/@std/path/doc/windows/unstable-dirname)                                   | Fork | 2024-09-12 | 1 year                |
| 27 | [@std/path/windows](https://jsr.io/@std/path/doc/windows)   | [unstable-extname](https://jsr.io/@std/path/doc/windows/unstable-extname)                                   | Fork | 2024-09-12 | 1 year                |
| 28 | [@std/path/windows](https://jsr.io/@std/path/doc/windows)   | [unstable-join](https://jsr.io/@std/path/doc/windows/unstable-join)                                         | Fork | 2024-09-12 | 1 year                |
| 29 | [@std/path/windows](https://jsr.io/@std/path/doc/windows)   | [unstable-normalize](https://jsr.io/@std/path/doc/windows/unstable-normalize)                               | Fork | 2024-09-12 | 1 year                |
| 30 | [@std/streams](https://jsr.io/@std/streams)                 | [unstable-fixed-chunk-stream](https://jsr.io/@std/streams/doc/unstable-fixed-chunk-stream)                  | New  | 2024-09-12 | 1 year                |
| 31 | [@std/streams](https://jsr.io/@std/streams)                 | [unstable-to-lines](https://jsr.io/@std/streams/doc/unstable-to-lines)                                      | New  | 2024-09-12 | 1 year                |
| 32 | [@std/text](https://jsr.io/@std/text)                       | [unstable-slugify](https://jsr.io/@std/text/doc/unstable-slugify)                                           | New  | 2024-09-12 | 1 year                |
| 33 | [@std/text](https://jsr.io/@std/text)                       | [unstable-to-constant-case](https://jsr.io/@std/text/doc/unstable-to-constant-case)                         | New  | 2024-09-12 | 1 year                |
| 34 | [@std/streams](https://jsr.io/@std/streams)                 | [unstable-to-bytes](https://jsr.io/@std/streams/doc/unstable-to-bytes)                                      | New  | 2024-09-18 | 1 year                |
| 35 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-take-while](https://jsr.io/@std/collections/doc/unstable-take-while)                              | Fork | 2024-09-20 | 1 year                |
| 36 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-chunk](https://jsr.io/@std/collections/doc/unstable-chunk)                                        | Fork | 2024-09-23 | 1 year                |
| 37 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-sort-by](https://jsr.io/@std/collections/doc/unstable-sort-by)                                    | Fork | 2024-09-23 | 1 year                |
| 38 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-sample](https://jsr.io/@std/collections/doc/unstable-sample)                                      | Fork | 2024-09-24 | 1 year                |
| 39 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-without-all](https://jsr.io/@std/collections/doc/unstable-without-all)                            | Fork | 2024-09-24 | 1 year                |
| 40 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-drop-last-while](https://jsr.io/@std/collections/doc/unstable-drop-last-while)                    | Fork | 2024-10-02 | 1 year                |
| 41 | [@std/async](https://jsr.io/@std/async)                     | [unstable-mux-async-iterator](https://jsr.io/@std/async/doc/unstable-mux-async-iterator)                    | Fork | 2024-10-08 | 1 year                |
| 42 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-intersect](https://jsr.io/@std/collections/doc/unstable-intersect)                                | Fork | 2024-10-08 | 1 year                |
| 43 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-drop-while](https://jsr.io/@std/collections/doc/unstable-drop-while)                              | Fork | 2024-10-09 | 1 year                |
| 44 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-take-last-while](https://jsr.io/@std/collections/doc/unstable-take-last-while)                    | Fork | 2024-10-09 | 1 year                |
| 45 | [@std/streams](https://jsr.io/@std/streams)                 | [unstable-to-byte-stream](https://jsr.io/@std/streams/doc/unstable-to-byte-stream)                          | New  | 2024-10-09 | 1 year                |
| 46 | [@std/collections](https://jsr.io/@std/collections)         | [unstable-sliding-windows](https://jsr.io/@std/collections/doc/unstable-sliding-windows)                    | Fork | 2024-10-16 | 1 year                |
| 47 | [@std/async](https://jsr.io/@std/async)                     | [unstable-throttle](https://jsr.io/@std/async/doc/unstable-throttle)                                        | New  | 2024-10-21 | 1 year                |
| 48 | [@std/testing](https://jsr.io/@std/testing)                 | [unstable-types](https://jsr.io/@std/testing/doc/unstable-types)                                            | Fork | 2024-10-29 | 1 year                |
| 49 | [@std/testing](https://jsr.io/@std/testing)                 | [unstable-stub](https://jsr.io/@std/testing/doc/unstable-stub)                                              | New  | 2024-10-31 | 1 year                |
| 50 | [@std/csv](https://jsr.io/@std/csv)                         | [unstable-stringify](https://jsr.io/@std/csv/doc/unstable-stringify)                                        | Fork | 2024-11-14 | 1 year                |
| 51 | [@std/async](https://jsr.io/@std/async)                     | [unstable-retry](https://jsr.io/@std/async/doc/unstable-retry)                                              | Fork | 2024-11-22 | 1 year                |
| 52 | [@std/cli](https://jsr.io/@std/cli)                         | [unstable-prompt-select](https://jsr.io/@std/cli/doc/unstable-prompt-select)                                | New  | 2024-11-25 | 1 year                |
| 53 | [@std/cli](https://jsr.io/@std/cli)                         | [unstable-prompt-multiple-select](https://jsr.io/@std/cli/doc/unstable-prompt-multiple-select)              | New  | 2024-12-12 | 1 year                |
| 54 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-stat](https://jsr.io/@std/fs/doc/unstable-stat)                                                   | New  | 2024-12-16 | 1 year                |
| 55 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-types](https://jsr.io/@std/fs/doc/unstable-types)                                                 | New  | 2024-12-16 | 1 year                |
| 56 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-lstat](https://jsr.io/@std/fs/doc/unstable-lstat)                                                 | New  | 2024-12-19 | 1 year                |
| 57 | [@std/testing](https://jsr.io/@std/testing)                 | [unstable-bdd](https://jsr.io/@std/testing/doc/unstable-bdd)                                                | Fork | 2024-12-20 | 1 year                |
| 58 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-read-dir](https://jsr.io/@std/fs/doc/unstable-read-dir)                                           | New  | 2025-01-13 | 1 year                |
| 59 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-chmod](https://jsr.io/@std/fs/doc/unstable-chmod)                                                 | New  | 2025-01-17 | 12 months             |
| 60 | [@std/async](https://jsr.io/@std/async)                     | [unstable-wait-for](https://jsr.io/@std/async/doc/unstable-wait-for)                                        | New  | 2025-01-20 | 12 months             |
| 61 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-symlink](https://jsr.io/@std/fs/doc/unstable-symlink)                                             | New  | 2025-01-20 | 12 months             |
| 62 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-real-path](https://jsr.io/@std/fs/doc/unstable-real-path)                                         | New  | 2025-01-27 | 11 months             |
| 63 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-link](https://jsr.io/@std/fs/doc/unstable-link)                                                   | New  | 2025-01-28 | 11 months             |
| 64 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-read-link](https://jsr.io/@std/fs/doc/unstable-read-link)                                         | New  | 2025-01-31 | 11 months             |
| 65 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-rename](https://jsr.io/@std/fs/doc/unstable-rename)                                               | New  | 2025-02-03 | 11 months             |
| 66 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-make-temp-dir](https://jsr.io/@std/fs/doc/unstable-make-temp-dir)                                 | New  | 2025-02-11 | 11 months             |
| 67 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-read-file](https://jsr.io/@std/fs/doc/unstable-read-file)                                         | New  | 2025-02-11 | 11 months             |
| 68 | [@std/cli](https://jsr.io/@std/cli)                         | [unstable-progress-bar](https://jsr.io/@std/cli/doc/unstable-progress-bar)                                  | New  | 2025-02-13 | 11 months             |
| 69 | [@std/cli](https://jsr.io/@std/cli)                         | [unstable-progress-bar-stream](https://jsr.io/@std/cli/doc/unstable-progress-bar-stream)                    | New  | 2025-02-13 | 11 months             |
| 70 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-read-text-file](https://jsr.io/@std/fs/doc/unstable-read-text-file)                               | New  | 2025-02-18 | 11 months             |
| 71 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-truncate](https://jsr.io/@std/fs/doc/unstable-truncate)                                           | New  | 2025-02-18 | 11 months             |
| 72 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-mkdir](https://jsr.io/@std/fs/doc/unstable-mkdir)                                                 | New  | 2025-02-20 | 10 months             |
| 73 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-copy-file](https://jsr.io/@std/fs/doc/unstable-copy-file)                                         | New  | 2025-02-21 | 10 months             |
| 74 | [@std/text](https://jsr.io/@std/text)                       | [unstable-reverse](https://jsr.io/@std/text/doc/unstable-reverse)                                           | New  | 2025-02-26 | 10 months             |
| 75 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-utime](https://jsr.io/@std/fs/doc/unstable-utime)                                                 | New  | 2025-02-28 | 10 months             |
| 76 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-umask](https://jsr.io/@std/fs/doc/unstable-umask)                                                 | New  | 2025-02-28 | 10 months             |
| 77 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-remove](https://jsr.io/@std/fs/doc/unstable-remove)                                               | New  | 2025-03-03 | 10 months             |
| 78 | [@std/encoding](https://jsr.io/@std/encoding)               | [unstable-base64](https://jsr.io/@std/encoding/doc/unstable-base64)                                         | Fork | 2025-03-04 | 10 months             |
| 79 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-write-file](https://jsr.io/@std/fs/doc/unstable-write-file)                                       | New  | 2025-03-04 | 10 months             |
| 80 | [@std/uuid](https://jsr.io/@std/uuid)                       | [unstable-v6](https://jsr.io/@std/uuid/doc/unstable-v6)                                                     | New  | 2025-03-06 | 10 months             |
| 81 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-write-text-file](https://jsr.io/@std/fs/doc/unstable-write-text-file)                             | New  | 2025-03-07 | 10 months             |
| 82 | [@std/encoding](https://jsr.io/@std/encoding)               | [unstable-base32](https://jsr.io/@std/encoding/doc/unstable-base32)                                         | Fork | 2025-03-10 | 10 months             |
| 83 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-make-temp-file](https://jsr.io/@std/fs/doc/unstable-make-temp-file)                               | New  | 2025-03-16 | 10 months             |
| 84 | [@std/encoding](https://jsr.io/@std/encoding)               | [unstable-hex](https://jsr.io/@std/encoding/doc/unstable-hex)                                               | Fork | 2025-03-18 | 10 months             |
| 85 | [@std/text](https://jsr.io/@std/text)                       | [unstable-dedent](https://jsr.io/@std/text/doc/unstable-dedent)                                             | New  | 2025-03-24 | 9 months              |
| 86 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-chown](https://jsr.io/@std/fs/doc/unstable-chown)                                                 | New  | 2025-04-06 | 9 months              |
| 87 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-open](https://jsr.io/@std/fs/doc/unstable-open)                                                   | New  | 2025-04-14 | 9 months              |
| 88 | [@std/fs](https://jsr.io/@std/fs)                           | [unstable-create](https://jsr.io/@std/fs/doc/unstable-create)                                               | New  | 2025-04-17 | 9 months              |

<!-- Tables End -->

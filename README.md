# Pastely
> A straight forward self-hosted pasting platform.

[![Build Status](https://travis-ci.org/kyler-swanson/pastely.svg?branch=master)](https://travis-ci.org/kyler-swanson/pastely)

Do you ever wonder how your data is treated when using services such as PasteBin or HasteBin? Scared about a potential data breach? Look no further. Pastely is a self-hosted pasting platform which allows peace of mind when sharing code snippets, logs, or BTC private keys (eh, still don't do this).

## Requirements

1. Docker
2. Some sort of reverse proxy like Nginx or Traefik

## Installation

Linux:

```sh
cd pastely-master
cp example.env .env
./scripts/run.sh
```

Make sure your docker.service is enabled so it launches on every system boot:

```sh
sudo systemctl enable docker
```

## Config

All configuration values are saved in the .env file at the root

## Usage example

todo :)

_For more examples and usage, please refer to the [Wiki][wiki]._

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

## Release History

* 0.0.1
    * Work in progress

## Meta

Kyler Swanson – [GitHub](https://github.com/kyler-swanson)

Distributed under the XYZ license. See ``LICENSE`` for more information.

## Contributing

todo :)

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

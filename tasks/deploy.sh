#!/usr/bin/env bash

hugo
aws --profile me s3 sync public/ s3://mattsurabian.com --include '*' --acl 'public-read'

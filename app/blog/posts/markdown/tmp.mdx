### Overview

#### Usage

Request urls, params and responses are described below.  
  
For the API to function properly, all GET parameters of the request url should be **url encoded**. For example the space character " " should be replaced with "%20". You can use [this](https://www.urlencoder.org/) tool to url encode your parameters.

#### Authentication

When making an API request you will need to provide your API access token. You can do so in either of the following ways:

- As a header on the request: `Authorization: Bearer {apiKey}`
- As a query parameter on the request: `...&access_token={apiKey}...`

#### Limits

**Premium users**

- For premium users there are no limits on the results someone can go through or the search filters/sorting they can use.
- There is however a limit on how many files you can get on each page. This limit is 1000. You can however read all the results page by page, by adjusting the start/limit params.
- Scrolling through an unlimited number of results on the result-set by specifying a scrolling mode other than `offset` is restricted to enterprise users.

**Registered users**

- For free registered users, the same limits on the results/filters/sorting as the search apply, explained here: [Packages](https://grayhatwarfare.com/packages).

### Search bucket files

**GET**https://buckets.grayhatwarfare.com**/api/v2/files**

Allows searching and fetching the bucket files allowing filtering and sorting.

#### Request

##### Query parameters

**keywords** string optional

Your query.

Examples: `savarakatranemia` `.*document.*` `2011+doc` `-stopword`

---

**bucket** string optional

The bucket id or url of the bucket the files must belong to. (Note: bucket ids might change when we update our index).

Examples: `govermentsecrets.s3.amazonaws.com` `coolstuff.blob.core.windows.net/coupons` `1021` `141`

---

**order** enum optional

Sort the queried files by a property on them.

Valid values: `size` `last_modified`

---

**direction** enum optional

Whether the sorting done on the property defined by the order parmeter is ascending or descending.

Valid values: `asc` `desc`

---

**full-path** boolean optional

Specifies that the keywords query the entire path of the file instead of just the filename.

Examples: `1` `true`

---

**extensions** string (comma-seperated) optional

A comma-seperated list of file extensions the files must match.

Examples: `docx,pdf` `mp4,mp3,avi,mov`

---

**stopextensions** string (comma-seperated) optional

A comma-seperated list of file extensions to exclude.

Examples: `pdf` `doc,docx,odt` `mp4,mp3,avi,mov`

---

**excluded-buckets** string optional

A comma-seperated list of buckets (urls or ids) to exclude.

Examples: `519` `govermentsecrets.s3.amazonaws.com,522` `39,coolstuff.blob.core.windows.net/coupons` `5432,91234` `1,543,6543`

---

**regexp** boolean optional

Marks the query provided in the keywords as a regular expression search. In v2 this is parameter provided as a plain text, but depending on how you craft the query, you might need to urlencode the parameter. You can take a look at our basic overview of regex usage or view the [regex documentation](https://buckets.grayhatwarfare.com/docs/regex).

Examples: `1` `true`

---

**noautocorrect** boolean optional

Do not attempt to autocorrect the query when parsing it as regexp  .

Examples: `1` `true`

---

**last-modified-from** integer optional

A unix timestamp to filter files that were last modified after a specific timeframe.

Examples: `1645809127` `1656166174`

---

**last-modified-to** integer optional

A unix timestamp to filter files that were last modified before a specific timeframe.

Examples: `1645809127` `1656166174`

---

**size-from** integer optional

A size in bytes to filter files that must have a size more than the value specified.

Examples: `1048576` `1024`

---

**size-to** integer optional

A size in bytes to filter files that must have a size less than the value specified.

Examples: `2048` `1073741824`

---

**limit** integer optional

How many files to include on the response.

Valid values: `1-1000`

Default: `100`

---

**paging-mode** enum optional

Specify how to page the results of the result-set. One can use either of the following modes:

- **offset**: Fetch results deeper in the results set by specifying an offset to fetch after with the `start` parameter. This paging mode has a limitation of paging up to 1.000.000 results.
- **scrolling**: Fetch results deeper in the results set by specifying the `scrollId` parameter as returned on the `meta.nextScrollId` of the response. Refer to our [scrolling documentation](https://buckets.grayhatwarfare.com/docs/api/v2/scrolling-api) for more information.

Only available for enterprise users. For a full list of features see [available packages](https://grayhatwarfare.com/packages).

Valid values: `offset` `scrolling`

Default: `offset`

---

**start** integer optional

Where the files included on the response should start from, i.e. the offset of the result set.  
Only applicable when using the `offset` paging mode.

Default: `0`

---

**scroll-id** string optional

A value that on each subsequent request, should be updated with the `meta.nextScrollId` of the latest response in order to fetch the next batch of results of the result-set.  
Only applicable when using the `scrolling` paging mode. Refer to our [scrolling documentation](https://buckets.grayhatwarfare.com/docs/api/v2/scrolling-api) for more information.

  
  

#### Response

**200 OK**

application/json

A successful request returns the HTTP 200 OK status code and a JSON response body that contains the bucket files matching the request parameters along with meta-data about the request and result-set.

##### Body

**query** object

The parsed query specified in the request. See the request section for the properties inside the object.

---

**meta** object

An object containing meta-information about the queried files. Such as the total number of files in the result-set, how many are inlcuded in this response, etc.

**results** integer

The total amount of files that matched the query.

---

**notice** string optional

A potential notice about the subset of the responded files. Usually informing about the limits depending on the current package.

---

**regexNotice** string optional

A notice about the potential mutations done to the provided regexp (only applicable when using regexp search).

---

**nextScrollId** string optional

The value that one should update the `scroll-id` param with on the subsequent request, in order to fetch the next batch of results on the result-set.  
Only applicable when using the `scrolling` paging mode. Refer to our [scrolling documentation](https://buckets.grayhatwarfare.com/docs/api/v2/scrolling-api) for more information.

---

**files** array

An array containing the files requested. The number of files may be a subset of the total ones matched, depending on the start and limit parameters of the request.

**id** integer

The id of this file in our database. (Note: The id doesn't remain the same and might change when the indexes get updated)

Examples: `432` `65434`

---

**bucket** string

The url of the bucket this file belongs to.

Example: `oH7eGKZxxI.s3-eu-west-1.amazonaws.com`

---

**bucketId** string

The id of the bucket this file belong to in our databases. (Note: The id doesn't remain the same and might change when the indexes get updated)

Examples: `432` `65434`

---

**filename** string

The name of the file.

Example: `2011-08-12-09-16-30-E0A968699AC5F5B4.pdf`

---

**fullPath** string

The full path of the file inside the bucket.

Example: `savarakatranemia/2011-08-12-09-16-30-E0A968699AC5F5B4.pdf`

---

**url** string

The url of the file.

Example: `http://1000bebes.s3.amazonaws.com/savarakatranemia/2011-08-12-09-16-30-E0A968699AC5F5B4`

---

**size** integer

The size of the file in bytes.

Example: `1024`

---

**type** enum

The type of the bucket this file belongs to.

Values: `aws` `azure` `dos` `gcp`

---

**lastModified** integer

Unix timestamp symbolizing when the file was last modified.

Examples: `1677358292` `1561471774`

```shell
curl --request GET \
  --url 'https://buckets.grayhatwarfare.com/api/v2/files?keywords=2011%20-07&full-path=1&excluded-buckets=4%2C5&limit=2' \
  --header 'Authorization: Bearer 3813fb487f89e504555cf7f8165792f1'
```

```json
{
    "query": {
        "keywords": "2011 -07",
        "regexp": false,
        "noautocorrect": false,
        "buckets": [],
        "excludedBuckets": [
            "4",
            "5"
        ],
        "extensions": [],
        "stopExtensions": [],
        "fullPath": true,
        "lastModifiedFrom": null,
        "lastModifiedTo": null,
        "sizeFrom": null,
        "sizeTo": null,
        "order": "",
        "direction": "",
        "start": 0,
        "limit": 2
    },
    "meta": {
        "results": 905
    },
    "files": [
        {
            "id": "2101",
            "bucket": "G1gSjJJqWS.s3-eu-west-1.amazonaws.com",
            "bucketId": 6,
            "filename": "y5ENbP8QbN",
            "fullPath": "A1zq0vHLEN 2011 15/y5ENbP8QbN",
            "url": "http://G1gSjJJqWS.s3-eu-west-1.amazonaws.com/A1zq0vHLEN 2011 15/y5ENbP8QbN",
            "size": 2549108,
            "type": "aws",
            "lastModified": 1666666666
        },
        {
            "id": "2102",
            "bucket": "G1gSjJJqWS.s3-eu-west-1.amazonaws.com",
            "bucketId": 6,
            "filename": "uF7MqAOErU 2011 15",
            "fullPath": "uF7MqAOErU 2011 15",
            "url": "http://G1gSjJJqWS.s3-eu-west-1.amazonaws.com/uF7MqAOErU 2011 15",
            "size": 6156618,
            "type": "aws",
            "lastModified": 1666666666
        }
    ]
}
```

### List/Filter buckets

**GET**https://buckets.grayhatwarfare.com**/api/v2/buckets**

Allows listing all the buckets in the index, with tools for filtering and sorting.

#### Request

##### Query parameters

**keywords** string optional

Search a bucket by name.

Examples: `10000.pizza.s3-ap-southeast-1` `photos` `-stopword`

---

**type** enum optional

Filter buckets returned by type.

Valid values: `aws` `azure` `dos` `gcp`

---

**start** integer optional

Where the buckets included on the response should start from, i.e. the offset of the result set.

Default: `0`

---

**limit** integer optional

How many buckets to include on the response.

Valid values: `1-1000`

Default: `100`

---

**order** enum optional

Sort the queried buckets by a property on them.

Valid values: `fileCount` `bucketName`

---

**direction** enum optional

Whether the sorting done on the property defined by the order parmeter is ascending or descending.

Valid values: `asc` `desc`

  
  

#### Response

**200 OK**

application/json

A successful request returns the HTTP 200 OK status code and a JSON response body that contains the buckets matching the request parameters along with meta-data about the request and result-set.

##### Body

**query** object

The parsed query specified in the request. See the request section for the properties inside the object.

---

**meta** object

An object containing meta-information about the queried buckets. Such as the total number of buckets in the result-set, how many are inlcuded in this response, etc.

**results** integer

The total amount of buckets that matched the query.

---

**notice** string optional

A potential notice about the subset of the responded buckets. Usually informing about the limits depending on the current package.

---

**buckets** array

An array containing the buckets requested. The number of buckets may be a subset of the total ones matched, depending on the start and limit parameters of the request.

**id** integer

The id of this bucket in our database. (Note: The id doesn't remain the same and might change when the indexes get updated)

Examples: `432` `65434`

---

**bucket** string

The url of the bucket.

Example: `oH7eGKZxxI.s3-eu-west-1.amazonaws.com`

---

**fileCount** integer

The total number of files discovered for this bucket.

Example: `2944` `3007`

---

**type** enum

The type of the bucket.

Values: `aws` `azure` `dos` `gcp`

Example request

Language  Shell (curl)  Shell (HTTPie)  Go (native)  JavaScript  JavaScript (axios)  Node.js  Node.js (fetch)  Node.js (request)  PHP (curl)  PHP (http2)  Python  Python (requests)  Ruby 

```bash
curl --request GET \
  --url 'https://buckets.grayhatwarfare.com/api/v2/buckets?keywords=photos&type=aws&order=fileCount&direction=asc' \
  --header 'Authorization: Bearer 3813fb487f89e504555cf7f8165792f1'
```

Example response

```json
{
  "query": {
    "keywords": "photos",
    "exact": false,
    "start": 0,
    "limit": 1000,
    "type": "aws",
    "order": "fileCount",
    "direction": "asc"
  },
  "meta": {
    "results": 1
  },
  "buckets": [
    {
      "id": 1,
      "bucket": "1.photos.s3-us-west-1.amazonaws.com",
      "fileCount": 0,
      "type": "aws"
    }
  ]
}
```

### View stats

**GET**https://buckets.grayhatwarfare.com**/api/v2/stats**

View some stats for our buckets index.

#### Request

##### Query parameters

None

  

#### Response

**200 OK**

application/json

A successful request returns the HTTP 200 OK status code and a JSON response body that contains the stats along with some meta-data.

##### Body

**meta** object

An object containing meta-information such as restrictions applied to the user's account.

**notice** string optional

A potential notice about user stats.

**restrictedStats** object optional

The stats for the given user when restrictions apply. For the schema see stats object below.

---

**stats** object

An object containing the stats for our buckets index.

**filesCount** integer

The total number of files in the index.

Examples: `12475502817`

---

**awsCount** integer

The total number of amazon buckets in the index.

Examples: `325260`

---

**azureCount** integer

The total number of azure buckets in the index.

Examples: `56326`

---

**dosCount** integer

The total number of digital ocean buckets in the index.

Examples: `8625`

---

**gcpCount** integer

The total number of google cloud buckets in the index.

Examples: `75239`

---

**aliCount** integer

The total number of alibaba cloud buckets in the index.

Examples: `25341`

**lastUpdated** integer

Unix timestamp of the last update.

Examples: `1724584168` `1561471774`

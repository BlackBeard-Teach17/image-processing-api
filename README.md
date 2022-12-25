# image-processing-api
Image processing api is a NodeJS powered image resizer.

## Features

- Resize an image in the public folder by dimensions that the user enters and saves it in the thubnails directory (If it does not exist).
- Entering different dimensions will result in the image being resized.

## Usage

To resize image

```sh

 GET /api?filename={filename}&width={width}&height={height}

 ```

| Parameters | Type    | Description |
| ---------- | ------- | ----------- |
| filename   | string  | filename of the image to be resized. Required |
| width      | number  | The desired width of image |
| height     | number  | The disired height of image |

## Scripts

Run prettier:

```sh
npm run prettier
```

Run eslint:

```sh
npm run lint
```

Run unit tests:

```sh
npm run test
```

Build project:

```sh
npm run build
```

Start App:

```sh
npm run start
```

## Run locally

Clone project repo:

```sh

git clone https://github.com/BlackBeard-Teach17/image-processing-api.git

```

Install Dependencies:

```sh

cd image-processing-api

npm install

```



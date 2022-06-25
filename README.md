# Convertigo - Watermark Library

A library for [Convertigo](https://convertigo.com/) that adds a watermark for the following file formats,
* Image
* PDF
* Word Document (e.g. docx)


## Code Mirrors

* GitHub: [github.com/k3karthic/convertigo-lib-watermark](https://github.com/k3karthic/convertigo-lib-watermark/)
* Codeberg: [codeberg.org/k3karthic/convertigo-lib-watermark](https://codeberg.org/k3karthic/convertigo-lib-watermark)

## Installation

`Step 1:` In your Convertigo Studio use `File->Import->Convertigo->Convertigo Project` and hit the `Next` button.

`Step 2:` In the Dialog `Project remote URL` field, use either of the following URLs,
* lib_Watermark=https://github.com/k3karthic/convertigo-lib-watermark 
* lib_Watermark=https://codeberg.org/k3karthic/convertigo-lib-watermark

`Step 3:` Click the `Finish` button.

## Licensing

Watermarking for word documents is done using the [Spire.Doc for Java](https://www.e-iceblue.com/Introduce/doc-for-java.html) library 
by E-ICEBLUE.

This repository uses the `Free Edition` which is limited to 500 paragraphs and 25 tables. In addition, generated documents will contain a "Evaluation Warning" message. 

Purchase the [Commercial Edition](https://www.e-iceblue.com/Buy/Spire.Doc-java.html) and replace the jar in the `libs` folder.

## Sequences

This library provides the following sequences,

### watermarkImage
* `Description:` Add a watermark to an image
* `Variables`
  * `image:` base64 encoded image
  * `watermarkImage:` base64 encoded image to be used as the watermark
  * `position:` position of the watermark. Valid values are `bottom_center`, `bottom_left`, `bottom_right`, `center`, `center_left`, `center_right`, `top_center`, `top_left` and `top_right`.
  * `opacity`: opacity of the watermark as a floating point number between 0 (fully transparent) and 1 (fully opaque).
* `Output`
  * `resultBase64`: base64 encoded image with watermark

### watermarkPDF
* `Description:` Add a watermark to a PDF document. Each page of the PDF will be rendered as an image with the watermark superimposed.
* `Variables`
  * `pdf:` base64 encoded PDF document
  * `watermarkImage:` base64 encoded image to be used as the watermark
  * `position:` position of the watermark. Valid values are `bottom_center`, `bottom_left`, `bottom_right`, `center`, `center_left`, `center_right`, `top_center`, `top_left` and `top_right`.
  * `opacity`: opacity of the watermark as a floating point number between 0 (fully transparent) and 1 (fully opaque).
* `Output`
  * `resultBase64`: base64 encoded PDF with watermark

### watermarkDocument
* `Description:` Add a watermark to a word document
* `Variables`
  * `document:` base64 encoded word document
  * `watermarkImage:` base64 encoded image to be used as the watermark
  * `scaling`: scale of the image as a floating point number (e.g. 100)
  * `washout`: apply a washout effect to the watermark
* `Output`
  * `resultBase64`: base64 encoded PDF with watermark

## Dependencies

Run the following command to download the dependencies into the `libs` folder,

```
$ mvn dependency:copy-dependencies -DoutputDirectory=libs
```
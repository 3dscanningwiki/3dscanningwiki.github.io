---
title: Coded Marker
description:
tags: [concept]
wip: true
---

# Coded Marker

Coded markers are a usually unique black and white marker which get picked up by software. They are placed in the scene before scanning an object, and are automatically detected when processing the images. Due to the uniqueness of each marker, the software can distinguish them. They can act as a scale reference when the distance between at least 2 markers is known, or just help with aligning the pictures due to their high contrast.
Multiple types of coded markers exist, and many software packages have support for multiple.

![Types of markers: a) Circular, b) April Tags, c) non-coded markers](https://i.imgur.com/DPsH7wH.png)

- a) Circular Markers
- b) April Tags
- c) Non coded markers

## Circular Markers

Circular markers usually consist of an inner circle with a small white dot, and of the coded outer circle. The center white dot has the advantage that in case the software does not pick the marker up automatically, a human can easily mark the center of the tag manually.

| Software             | Compatible                                                                                                |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| 3DF Zephyr           | No ^[https://www.3dflow.net/zephyr-doc/en/PrintMarkersandmarkersuse.html]                                 |
| Agisoft Metashape    | Yes (pro only) [^agisoft-doc]                                    |
| Apple Object Capture | No [?]                                                                                                   |
| Reality Capture      | Yes [^rc-doc-markers] |




## April Tags

April tags were first introduced by Edwin Olson in 2011 as a robust and flexible fiducial system for usage in autonomous robots [^olson2011tags]. They are designed similar to [QR-codes](https://de.wikipedia.org/wiki/QR-Code) to be recognized by software, which makes them optimal for use in photogrammetry as well. Most photogrammetry software that supports coded markers supports some of the versions of april tags as well.

Like QR-codes, april tags consist of a grid of black and white cells, composing a tow-dimensional bar code. However, they are designed for a much smaller data size between 4 to 12 bits. This allows them to be detectable and decodable under much worse circumstances.

| Software             | Compatible                                                                                                |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| 3DF Zephyr           | Yes ^[https://www.3dflow.net/technology/documents/3df-zephyr-tutorials/coded-targets-automatic-detection/]                                 |
| Agisoft Metashape    | Yes (pro only) [^agisoft-doc]                                    |
| Apple Object Capture | No [?]                                                                                                   |
| Reality Capture      | Yes [^rc-doc-markers] |

### April Tag Variants

There are multiple generations of april tags, with the newest being AprilTag 3 (in review) and the most used being AprilTag 2[^wang2016iros]. AprilTags come in multiple payload capacity and error correction versions. They are usually denoted with a name in the following format: `36h11`, where 36 refers to a 36 bit encoding, and the 11 refers to a minimum Hamming distance ^[https://en.wikipedia.org/wiki/Hamming_distance] of 11 bits between any valid tags. In short, increasing the first number leads to bigger tags and more possible unique tags. Increasing the second number decreases the number of false positives that are picked up by the software, but also reduces the amount of possible unique tags. AprilTags are designed to work with low resolution images, where the likelihood of noise resembling a valid tag is extremely small. For high resolution images as is commonly used in photogrammetry, it is recommended to use a tag with a high Hamming distance, such as the previously named `36h11`.


[^agisoft-doc]: https://www.agisoft.com/pdf/metashape-pro_1_8_en.pdf

[^rc-doc-markers]: https://support.capturingreality.com/hc/en-us/articles/360003869672-How-to-use-Detect-Markers-Tool

[^olson2011tags]: Olson, E. (2011). *AprilTag: A robust and flexible visual fiducial system*. Proceedings of the IEEE International Conference on Robotics and Automation (ICRA), 3400–3407. 
[^wang2016iros]: Wang, J., & Olson, E. (2016, October). *AprilTag 2: Efficient and robust fiducial detection*. Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS).

## Non-coded markers

Markers that do not include any kind of code usually provide a hight contrast features for photogrammetry software to recognize. In addition they make it easier for humans to manually find the same points in multiple pictures for manual control points.
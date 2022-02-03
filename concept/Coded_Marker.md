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

April tags were first introduced by Edwin Olson in 2011 as a robust and flexible fiducial system for usage in autonomous robots [^olson2011tags]. They are designed to be recognized by software with a high precision, which makes them optimal for use in photogrammetry as well. Most photogrammetry software that supports coded markers supports one of the versions of april tags as well.

| Software             | Compatible                                                                                                |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| 3DF Zephyr           | Yes ^[https://www.3dflow.net/technology/documents/3df-zephyr-tutorials/coded-targets-automatic-detection/]                                 |
| Agisoft Metashape    | Yes (pro only) [^agisoft-doc]                                    |
| Apple Object Capture | No [?]                                                                                                   |
| Reality Capture      | Yes [^rc-doc-markers] |


[^agisoft-doc]: https://www.agisoft.com/pdf/metashape-pro_1_8_en.pdf

[^rc-doc-markers]: https://support.capturingreality.com/hc/en-us/articles/360003869672-How-to-use-Detect-Markers-Tool

[^olson2011tags]: Edwin Olson "*AprilTag: A robust and flexible visual fiducial system*" 2011 in *Proceedings of the IEEE International Conference on Robotics and Automation (ICRA)* p.3400 - 3407

## Non-coded markers

Markers that do not include any kind of code usually provide a hight contrast features for photogrammetry software to recognize. In addition they make it easier for humans to manually find the same points in multiple pictures for manual control points.
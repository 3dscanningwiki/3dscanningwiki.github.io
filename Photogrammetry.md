---
title: Photogrammetry
description: Using Photographs to measure and extract information about a subject
tags: [overview, photogrammetry]
wip: true
---
# Photogrammetry

**Photogrammetry** is the science and technology of obtaining reliable information about physical objects and the environment through the process of recording, measuring and interpreting photographic images and patterns.

Understanding how and why Photogrammetry is used, and where to use it is critical within the industry of digital acquisition.

There are many variants of Photogrammetry, however this topic will limited to the the process of extracting useful data from images, with the end goal of producing 3 Dimensional measurements either for the further use in real time rendering, manufacturing, inspection and survey.

## Methods

Typical photogrammetry is seen as the process of taking many images of a surface or object. These images are fed into a photogrammetry software which processes them to extract info about the photographed objects. 

<!-- ### Child Information -->

<!-- For topics which need to break down even further, IE specific details about feature detection. If this information block gets too busy its best split into its own page. -->

## Applications

## Software

See the Photogrammetry section on the [Software](Software.md) page.

## Hardware

Photogrammetry hardware is a broad topic, however here it is broken down into two sub-categories, Acquisition and Processing

### Data Acquisition

As a rule of thumb, best tool for capturing images is the camera you have on you at the time, however when it comes to acquiring the best data there are several key factors to consider:

* Lighting
* Depth of field
* Shutter speed
* ISO
* Sharpness

#### Lighting

In general it is preferred to have even diffuse lighting from all sides, and no visible shadows or highlights on the object itself. Moving shadows can be interpreted by the photogrammetry software as a feature point, which can negatively impact the resulting geometry. Fixed shadows will most likely not impact geometry too much, but it will be visible in the texture as baked in lighting, which will look bad if the object is rendered in a scene where the lighting does not match the condition where the object was scanned.

The easiest way to achieve a very diffuse light is to wait for a overcast day and scan the object outdoors.

Other options include big soft-boxes and photography tents.

Most professional 3d scanners use a ring flash light around the camera lense. This way the visible part of the object is fully illuminated, and no shadows are ever visible to the camera.

#### Depth of field

Photogrammetry software searches for feature points in the images, which it can match with the same point in as many images as possible. These feature points need to have a high contrast and be as sharp as possible. Therefore the images need to have as much in focus as possible. It is generally recommended to use an aperture with f8 to f11 ^[https://scholarslab.lib.virginia.edu/blog/documentation-photogrammetry/].

#### Shutter speed

When scanning an object handheld, it is important to use a fast shutter speed, as motion blur will make finding the feature points more difficult or even impossible. In general it is recommended to keep the shutter speed as high as possible, although when using a tripod with an external shutter release the shutter speed can be decreased to allow for a lower ISO or smaller aperture.


#### ISO

The ISO setting of a digital camera determines how sensitive the camera sensor is to light. A higher ISO setting results in a brighter image. As a side effect, a high sensitivity also means the sensor will pick up more noise. To get the best results, it is preferable to keep the ISO as low (close to ISO 100) as possible. Depending on the sensor higher values are tolerable. 


#### Sharpness

For the same reasons as mentioned in the depth of field section, it is preferable to capture as sharp images as possible. Generally the sharpness depends on the camera lense. For most lenses there exists some documentation on their sharpness and what lense settings (zoom, aperture) result in the sharpest image. 

### Processing

## Resources

Please link to any strong (generally unbiased) videos on the topic, if this gets too broad then please link to a sub page, ie "Photogrammetry_Resources"

* Julia Haines. “Photogrammetry Workflow using a DSLR Camera”. Published September 24, 2019.
  Full photogrammetry workflow using [Agisoft Metashape](software/Agisoft_Metashape.md) ^[https://scholarslab.lib.virginia.edu/blog/documentation-photogrammetry/]



## See Also

Is the subject similar to another, but not linked directly in this page? 
Please link to any other topics that may be similar that people would want to read more on

## References

Any references made in this can be cited here and linked. 
We do not mind links to blogs or youtube videos, as a lot of topics in this field are uncovered by trial and error, so we can expect a lot of community sourced information to come in this form.
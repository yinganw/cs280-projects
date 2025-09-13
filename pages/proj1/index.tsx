"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "katex/dist/katex.min.css";

export default function Proj1() {
  const laplacianEquation = `
$$
L_i = G_i - \\operatorname{expand}(G_{i + 1})
$$
`;
  const linearContrast = `
$$
x’ = \\frac{x - a}{b - a}
$$
`;
  const singleScaleImages = [
    {
      name: "cathedral",
      path: "/media/proj1/output_single_scale/output_single_cathedral.jpg",
      bestShiftG: "(-7, -1)",
      bestShiftB: "(-12, -3)",
      l2Runtime: "0.5654s",
      nccRuntime: "2.2401s",
    },
    {
      name: "monastery",
      path: "/media/proj1/output_single_scale/output_single_monastery.jpg",
      bestShiftG: "(-6, -1)",
      bestShiftB: "(-3, -2)",
      l2Runtime: "0.5802s",
      nccRuntime: "2.0185s",
    },
    {
      name: "tobolsk",
      path: "/media/proj1/output_single_scale/output_single_tobolsk.jpg",
      bestShiftG: "(-4, -1)",
      bestShiftB: "(-6, -3)",
      l2Runtime: "0.5654s",
      nccRuntime: "2.3110s",
    },
  ];
  const multiScaleImages = [
    {
      name: "emir",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_emir.jpg",
      bestShiftG: "(-57, -17)",
      bestShiftB: "(-74, -44)",
      runtime: "10.1009s",
    },
    {
      name: "italil",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_italil.jpg",
      bestShiftG: "(-38, -15)",
      bestShiftB: "(-76, -35)",
      runtime: "9.7821s",
    },
    {
      name: "church",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_church.jpg",
      bestShiftG: "(-33, 8)",
      bestShiftB: "(-58, 5)",
      runtime: "9.3598s",
    },
    {
      name: "three_generations",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_three_generations.jpg",
      bestShiftG: "(-58, 2)",
      bestShiftB: "(-111, -10)",
      runtime: "9.6963s",
    },
    {
      name: "lugano",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_lugano.jpg",
      bestShiftG: "(-52, 12)",
      bestShiftB: "(-92, 28)",
      runtime: "9.9049s",
    },
    {
      name: "melons",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_melons.jpg",
      bestShiftG: "(-96, -3)",
      bestShiftB: "(-178, -12)",
      runtime: "9.6809s",
    },
    {
      name: "lastochikino",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_lastochikino.jpg",
      bestShiftG: "(-78, 7)",
      bestShiftB: "(-75, 9)",
      runtime: "10.0418s",
    },
    {
      name: "icon",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_icon.jpg",
      bestShiftG: "(-48, -5)",
      bestShiftB: "(-89, -23)",
      runtime: "10.4537s",
    },
    {
      name: "siren",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_siren.jpg",
      bestShiftG: "(-47, 18)",
      bestShiftB: "(-95, 25)",
      runtime: "10.5801s",
    },
    {
      name: "self_portrait",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_self_portrait.jpg",
      bestShiftG: "(-98, -8)",
      bestShiftB: "(-176, -36)",
      runtime: "10.0840s",
    },
    {
      name: "harvesters",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_harvesters.jpg",
      bestShiftG: "(-65, 3)",
      bestShiftB: "(-124, -13)",
      runtime: "9.6655s",
    },
  ];

  const multiScaleImagesMore = [
    {
      name: "castle",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_castle.jpg",
      bestShiftG: "(-46, 9)",
      bestShiftB: "(-79, 25)",
      runtime: "10.6426s",
    },
    {
      name: "dome",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_dome.jpg",
      bestShiftG: "(-54, 2)",
      bestShiftB: "(-96, -5)",
      runtime: "9.5361s",
    },
    {
      name: "mosque",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_mosque.jpg",
      bestShiftG: "(-44, -1)",
      bestShiftB: "(-70, -11)",
      runtime: "9.5197s",
    },
    {
      name: "khiva",
      path: "/media/proj1/output_ncc_pyramid/output_ncc_pyramid_khiva.jpg",
      bestShiftG: "(-53, 17)",
      bestShiftB: "(-94, 7)",
      runtime: "10.1706s",
    },
  ];

  const laplacianPyramid = [
    {
      name: "level 0",
      path: "/media/proj1/laplacian/out_emir_laplacian_pyramid_level_1_r.jpg",
      size: "(3208, 3702)",
    },
    {
      name: "level 1",
      path: "/media/proj1/laplacian/out_emir_laplacian_pyramid_level_2_r.jpg",
      size: "(1604, 1851)",
    },
    {
      name: "level 2",
      path: "/media/proj1/laplacian/out_emir_laplacian_pyramid_level_3_r.jpg",
      size: "(802, 926)",
    },
    {
      name: "level 3",
      path: "/media/proj1/laplacian/out_emir_laplacian_pyramid_level_4_r.jpg",
      size: "(400, 463)",
    },
  ];

  const laplacianImages = [
    {
      name: "emir",
      path: "/media/proj1/output_ncc_laplacian/output_ncc_laplacian_emir.jpg",
      bestShiftG: "(-57, -17)",
      bestShiftB: "(-105, -41)",
      runtime: "9.8079s",
    },
    {
      name: "italil",
      path: "/media/proj1/output_ncc_laplacian/output_ncc_laplacian_italil.jpg",
      bestShiftG: "(-38, -14)",
      bestShiftB: "(-77, -36)",
      runtime: "10.7475s",
    },
    {
      name: "church",
      path: "/media/proj1/output_ncc_laplacian/output_ncc_laplacian_church.jpg",
      bestShiftG: "(-33, 8)",
      bestShiftB: "(-58, 4)",
      runtime: "10.1170s",
    },
    {
      name: "three_generations",
      path: "/media/proj1/output_ncc_laplacian/output_ncc_laplacian_three_generations.jpg",
      bestShiftG: "(-57, 5)",
      bestShiftB: "(-114, -11)",
      runtime: "10.0456s",
    },
    {
      name: "lugano",
      path: "/media/proj1/output_ncc_laplacian/output_ncc_laplacian_lugano.jpg",
      bestShiftG: "(-54, 14)",
      bestShiftB: "(-92, 29)",
      runtime: "10.9043s",
    },
    {
      name: "melons",
      path: "/media/proj1/output_ncc_laplacian/output_ncc_laplacian_melons.jpg",
      bestShiftG: "(-96, -4)",
      bestShiftB: "(-178, -14)",
      runtime: "10.9904s",
    },
    {
      name: "lastochikino",
      path: "/media/proj1/output_ncc_laplacian/output_ncc_laplacian_lastochikino.jpg",
      bestShiftG: "(-77, 7)",
      bestShiftB: "(-75, 8)",
      runtime: "10.9783s",
    },
    {
      name: "icon",
      path: "/media/proj1/output_ncc_laplacian/output_ncc_laplacian_icon.jpg",
      bestShiftG: "(-48, -5)",
      bestShiftB: "(-89, -23)",
      runtime: "11.2596s",
    },
    {
      name: "siren",
      path: "/media/proj1/output_ncc_laplacian/output_ncc_laplacian_siren.jpg",
      bestShiftG: "(-47, 19)",
      bestShiftB: "(-97, 24)",
      runtime: "11.6070s",
    },
    {
      name: "self_portrait",
      path: "/media/proj1/output_ncc_laplacian/output_ncc_laplacian_self_portrait.jpg",
      bestShiftG: "(-98, -8)",
      bestShiftB: "(-181, -37)",
      runtime: "11.5348s",
    },
    {
      name: "harvesters",
      path: "/media/proj1/output_ncc_laplacian/output_ncc_laplacian_harvesters.jpg",
      bestShiftG: "(-65, 3)",
      bestShiftB: "(-124, -12)",
      runtime: "10.8357s",
    },
  ];

  const autoCroppedImages = [
    {
      name: "emir",
      path: "/media/proj1/auto_cropped/cropped_emir.jpg",
    },
    {
      name: "italil",
      path: "/media/proj1/auto_cropped/cropped_italil.jpg",
    },
    {
      name: "church",
      path: "/media/proj1/auto_cropped/cropped_church.jpg",
    },
    {
      name: "three_generations",
      path: "/media/proj1/auto_cropped/cropped_generations.jpg",
    },
    {
      name: "lugano",
      path: "/media/proj1/auto_cropped/cropped_lugano.jpg",
    },
    {
      name: "melons",
      path: "/media/proj1/auto_cropped/cropped_melons.jpg",
    },
    {
      name: "lastochikino",
      path: "/media/proj1/auto_cropped/cropped_lastochikino.jpg",
    },
    {
      name: "icon",
      path: "/media/proj1/auto_cropped/cropped_icon.jpg",
    },
    {
      name: "siren",
      path: "/media/proj1/auto_cropped/cropped_siren.jpg",
    },
    {
      name: "self_portrait",
      path: "/media/proj1/auto_cropped/cropped_portrait.jpg",
    },
    {
      name: "harvesters",
      path: "/media/proj1/auto_cropped/cropped_harvesters.jpg",
    },
  ];

  const autoContrastImages = [
    {
      name: "emir",
      path: "/media/proj1/auto_contrast_output/emir.jpg",
    },
    {
      name: "italil",
      path: "/media/proj1/auto_contrast_output/italil.jpg",
    },
    {
      name: "church",
      path: "/media/proj1/auto_contrast_output/church.jpg",
    },
    {
      name: "three_generations",
      path: "/media/proj1/auto_contrast_output/generations.jpg",
    },
    {
      name: "lugano",
      path: "/media/proj1/auto_contrast_output/lugano.jpg",
    },
    {
      name: "melons",
      path: "/media/proj1/auto_contrast_output/melons.jpg",
    },
    {
      name: "lastochikino",
      path: "/media/proj1/auto_contrast_output/lastochikino.jpg",
    },
    {
      name: "icon",
      path: "/media/proj1/auto_contrast_output/icon.jpg",
    },
    {
      name: "siren",
      path: "/media/proj1/auto_contrast_output/siren.jpg",
    },
    {
      name: "self_portrait",
      path: "/media/proj1/auto_contrast_output/portrait.jpg",
    },
    {
      name: "harvesters",
      path: "/media/proj1/auto_contrast_output/harvesters.jpg",
    },
  ];

  const bukhara = [
    {
      name: "kalan",
      path: "/media/proj1/bukhara/kalan.jpeg",
    },
    {
      name: "fortress",
      path: "/media/proj1/bukhara/fortress.jpeg",
    },
    {
      name: "palace",
      path: "/media/proj1/bukhara/palace.jpeg",
    },
    {
      name: "mosque",
      path: "/media/proj1/bukhara/mosque.jpeg",
    },
    {
      name: "fortress_side",
      path: "/media/proj1/bukhara/fortress_side.jpeg",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-10">
      {/* Back Button */}
      <Link
        href="/"
        className="flex items-center text-gray-600 hover:text-black transition"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        <span>Back to Home</span>
      </Link>

      <div>
        <h1 className="text-3xl font-bold text-center">
          Project 1: Images of the Russian Empire
        </h1>
        <h3 className="text-xl font-bold text-center text-gray-400">
          Colorizing the Prokudin-Gorskii photo collection
        </h3>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Background</h2>
        <p>
          Sergei Mikhailovich Prokudin-Gorskii was a pioneering photographer
          who, in the early 20th century, undertook an ambitious project to
          document the Russian Empire in color. He captured thousands of scenes
          on glass plates using a unique technique: three separate exposures of
          the same subject, each filtered with red, green, and blue light. His
          vision was to use these images for educational purposes, but his plans
          were cut short by the Russian Revolution. Fortunately, his glass plate
          negatives survived and are now preserved by the Library of Congress,
          offering a vivid glimpse into a bygone era.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Project goals</h2>
        <p>
          The objective of this project is to take Prokudin-Gorskii's digitized
          glass plate negatives and digitally reconstruct the original color
          photographs. The core challenge involves image alignment. Each glass
          plate contains three distinct monochromatic images (red, green, and
          blue channels) that are slightly misaligned. The task is to use image
          processing techniques to automatically align these three channels,
          stacking them to form a single, correctly colored RGB image with
          minimal visual artifacts. This requires a robust and efficient
          alignment algorithm that can handle large, full-size images and
          produce a high-quality final result.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 1.1: Single-scale implementation for aligning small images
        </h2>
        <h4 className="text-lg font-semibold">Process</h4>
        <div className="float-right ml-4 mb-2">
          <Image
            id="naive"
            alt="naive stack"
            src="/media/proj1/output_single_scale/cathedral_naive.jpg"
            width={300}
            height={300}
          />
          <div className="pt-2 text-center text-gray-500">
            A naive stack of BGR channels with no alignment
          </div>
        </div>
        <p>
          We start with a roll of film scan, with blue, green, and red channels
          list in order in the image. First, slice the image to get individual
          channels, each channel sharing the same width and height with the
          others.
        </p>
        <p>
          A naive way to align them is to just stack all three channels
          together, with no alignment algorithm. This is not ideal, as we could
          see the edges of the object are not aligned.
        </p>
        <p>
          To improve from the naive method, We could try "shifting" the images
          around and see how the result looks when we stack the channels onto
          each other. We could have a shift range of (-30, 30), and stack the
          BGR channels together two by two, then align both stacked images using
          the common image as a reference. To measure how good the alignment is,
          we could use some metrics here.
        </p>
        <p>
          <span className="font-semibold">Metrics: </span>
          The simplest metric we could use is just the L2 norm of the two
          images, also known as the{" "}
          <span className="font-semibold">Euclidean Distance</span> which is
          simply
          <div className="flex justify-center items-center w-full">
            <ReactMarkdown
              children={`$$\\sqrt{\\sum{\\sum(image1(x,y)-image2(x,y))^2}}$$`}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            />
          </div>
          where the sum is taken over the pixel values.
        </p>
        <p>
          Another metric we could use is{" "}
          <span className="font-semibold">
            Normalized Cross-Correlation (NCC)
          </span>
          ,
          <span className="flex justify-center items-center w-full">
            <ReactMarkdown
              children={`$$NCC(A, B) = \\frac{\\sum_i(A_i - \\overline{A})(B_i - \\overline{B})}{\\sqrt{\\sum_i{(A_i - \\overline{A})}^2{(B_i - \\overline{B})}^2}}$$`}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            />
          </span>
          which is simply a dot product between two normalized vectors.
        </p>

        <p>
          I used search range (-30, 30) with both the L2 and NCC metric, and
          both metrics yielded the same shift positions for all three
          small-scaled images, though L2 norm runtime is a lot faster than NCC
          due to runtime complexity.
        </p>
        <p>
          <span className="font-semibold">Crop out borders: </span>A trick I
          used is to get better alignment is to crop out the borders of the BGR
          channel images before alignment. This ensures that the alignment is
          less affected by lens imperfections and photo plat degredations. In
          this section, I cropped out a fixed value of 50 pixels each on the
          left, right, top, and bottom side of the BGR images before aligning
          them.
        </p>
        <Swiper
          pagination={{ type: "progressbar" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-full w-full"
        >
          {singleScaleImages.map((m) => (
            <SwiperSlide key={m.name}>
              <div className="flex flex-col items-center justify-center h-full px-4">
                <div className="overflow-hidden">
                  <Image
                    id={m.name}
                    src={m.path}
                    alt={m.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="font-semibold">
                    {m.name.toLocaleUpperCase()}.jpg
                  </p>
                  <p>Best shift for G: {m.bestShiftG}</p>
                  <p>Best shift for B: {m.bestShiftB}</p>
                  <p>Runtime using L2: {m.l2Runtime}</p>
                  <p>Runtime using NCC: {m.nccRuntime}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 1.2: Multi-scale alignment of large images
        </h2>
        <h4 className="font-semibold text-lg">Metric selection</h4>
        <p>
          The images to be matched do not necessarily have the same brightness
          values (they are different color channels).
        </p>
        <p>
          <span className="font-semibold">Problem with L2 norm: </span>Because
          the L2 norm involves squaring pixel values, very bright pixels of high
          intensity would contribute significantly more to the total sum than do
          dark pixels of low intensity. This causes the overall metric to be
          heavily influenced by bright areas, making it "sensitive" to
          highlights and bright spots. Because the images to be matched do not
          actually have the same brightness values (they are different color
          channels), we would need a better metric for alignment.
        </p>
        <p>
          <span className="font-semibold">
            NCC is robust to linear changes in brightness
          </span>
          , because when we subtract the mean intensity from each pixel, we are
          eliminating the effect of any constant brightness offset. We get the
          normalized cross-correlation by dividing by the standard deviation.
          This normalization scales each pixel to have "unit variance,"
          canceling out any constant multiplicative contrast changes. 
        </p>
        <h4 className="font-semibold text-lg">
          Dealing with larger images: Image Pyramids
        </h4>
        <p>
          Surely we could increase the search range from Part 1.1 as the image
          size increases, but this would become prohibitively expensive when the
          image becomes too large. In this case, we would need a faster search
          procedure to help us summarize and abstract information from the
          large-scale image.
        </p>
        <p>
          An image pyramid could be very helpful in this case. An image pyramid
          represents the image at multiple scales (usually scaled by a factor of
          2) and the processing is done sequentially starting from the coarsest
          scale (smallest image) and going down the pyramid, updating your
          estimate as you go. In this section, I created an image pyramid with 4
          levels, image at each level being half the width and height of its
          previous level.
        </p>
        <p>
          Given the initial position (a, b), and a shift position (x, y) for the
          coarsest image, we can then search in the next level of the image
          pyramid at position (2x + a, 2y + b), with search range = (-1, 1) to
          compensate for any rounding lost in the rescale (division) of 2. Using
          this, we can keep updating our NCC score and go all the way up to the
          largest-scaled image in the pyramid, to get the best shift with the
          highest NCC score possible.
        </p>
        <p>
          <span className="font-semibold">Crop out borders aggressively: </span>
          I cropped out a fixed value of 200 pixels each on the left, right,
          top, and bottom side of the BGR images before aligning them. Since
          lens imperfections and photo plat degredations get worse as pixels are
          far from the center, cropping pixels out and leaving important details
          in the center for alignment ensure that the alignment is more accurate
          and less affected by the quality of the film scan.
        </p>
        <h4 className="font-semibold text-lg">
          Compute NCC score using overlapping pixels only
        </h4>
        <p>
          One trick I used to improve accuracy in alignment was to ensure that
          I'm only computing the NCC score in the strictly overlapping window of
          the two images. For example, given two images A and B of size (w, h),
          if the alignment requires shifting image B to the right with value x
          (x &gt; 0) and to the bottom with value y (y &gt; 0), then I only
          compute NCC score using{" "}
          <span className="flex justify-center items-center w-full">
            <ReactMarkdown
              children={`$$B[x:, y:]$$`}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            />
          </span>
          This is because if image B is shifting right and down, the first few
          columns on the left and upper side of the shifted image B would highly
          likely be "garbage pixels" that wouldn't match to image A. We are not
          expecting them to match to A either way. Removing these meaningless
          pixels in the NCC calculation ensures that the score is not affected
          by these garbage values from the shifts (e.g. np.roll()), and
          therefore improves accuracy.
        </p>
        <Image
          id="emirOverlapComparison"
          alt="Emir alignment using all and overlapping pixels"
          src="/media/proj1/output_ncc_pyramid/cropping_emir_comparison.png"
          width={800}
          height={800}
          className="mx-auto "
        />
        <p>
          This is a side-by-side comparison of the Image Pyramid + NCC score
          method, computed with all pixels in images vs. only using overlapping
          pixels. We could see that the naive computation has the blue channel
          misaligned quite far to the right side, while the NCC score using
          overlapping pixels gives us higher NCC score (an dhigher correlation),
          and better alignment result.
        </p>
        <h4 className="text-lg font-bold">Alignment results:</h4>
        <p>
          Here are the fixed parameters I used for the alignment alogrithm:{" "}
        </p>
        <div className="flex flex-row justify-center items-center gap-4 text-center">
          <p>cropped margin before alignment= 200</p>
          <p>image pyramid level = 4</p>
          <p>search range = (-30, 30)</p>
        </div>
        <Swiper
          pagination={{ type: "progressbar" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-full w-full"
        >
          {multiScaleImages.map((m) => (
            <SwiperSlide key={m.name}>
              <div className="flex flex-col items-center justify-center h-full px-4">
                <div className="overflow-hidden">
                  <Image
                    id={m.name}
                    src={m.path}
                    alt={m.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="font-semibold">
                    {m.name.toLocaleUpperCase()}.jpg
                  </p>
                  <p>Best shift for G: {m.bestShiftG}</p>
                  <p>Best shift for B: {m.bestShiftB}</p>
                  <p>Runtime: {m.runtime}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <h4 className="text-lg font-semibold mb-2">
          More examples from
          <a
            href="https://www.loc.gov/collections/prokudin-gorskii/?st=grid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            &nbsp;the Prokudin‑Gorskii collection
          </a>
        </h4>
        <Swiper
          pagination={{ type: "progressbar" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-full w-full"
        >
          {multiScaleImagesMore.map((m) => (
            <SwiperSlide key={m.name}>
              <div className="flex flex-col items-center justify-center h-full px-4">
                <div className="overflow-hidden">
                  <Image
                    id={m.name}
                    src={m.path}
                    alt={m.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="font-semibold">
                    {m.name.toLocaleUpperCase()}.jpg
                  </p>
                  <p>Best shift for G: {m.bestShiftG}</p>
                  <p>Best shift for B: {m.bestShiftB}</p>
                  <p>Runtime: {m.runtime}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="float-right ml-4 mb-2 flex flex-col items-center">
          <Image
            id="explanation"
            alt="Laplacian explanation"
            src="/media/proj1/output_ncc_pyramid/emir_glitch.jpg"
            width={200}
            height={200}
          />
          <div className="pt-2 text-center text-gray-500">
            Zoomed-in view of the minor misalignment
          </div>
        </div>
        <p>
          <span className="font-semibold">
            Issue with the NCC + Image Pyramid method:{" "}
          </span>
          NCC + Image Pyramid method overall yields accurate result for all
          images, with an exception of a minor glitch in the EMIR.tif image
          alignment. If we zoom into the EMIR.tif alignment result, we could see
          a yellow cast on Emir's head, possibly due to misalignment of the blue
          channel.
        </p>

        {/* emir_glitch */}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 2.1: Better alignment: Multi-scale alignment using NCC and
          Laplacian Pyramids
        </h2>
        <p>
          The NCC + Gaussian image pyramids method in Part 1.2 wasn't ideal.
          Despite 13 out of 14 images in the data file aligned pretty
          accurately, the EMIR.tif failed to be algined perfectly. The red and
          green channels were aligned perfectly, but the blue channel of
          EMIR.tif was slightly below the two, creating a yellow cast that's
          quite obvious on Emir's head and facial features.
        </p>
        <div className="float-right ml-4 mb-2">
          <Image
            id="explanation"
            alt="Laplacian explanation"
            src="/media/proj1/laplacian/laplacian_explanation.jpg"
            width={300}
            height={300}
          />
          <div className="pt-2 text-center text-gray-500">
            Illustration of Laplacian Pyramid
          </div>
        </div>
        <p>
          To fix this, I wondered if better features could be used for the
          alignment, instead of simply the raw RGB pixels. One intuitive
          enhancement from the current approach is to use Laplacian Pyramids,
          instead of the current Gaussian Pyramids in Part 1.2.
        </p>
        <p>
          Laplacian pyramids are constructed from Gaussian pyramids by
          subtracting the next level’s upsampled Gaussian image from the current
          level’s Gaussian image.
          <ReactMarkdown
            children={laplacianEquation}
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          />
          This subtraction removes low-frequency content (i.e., smooth/blurred
          areas), and preserves the high-frequency details that are lost in the
          Gaussian blur, such as edges and fine textures. As a result, Laplacian
          pyramid levels contain mostly zero or near-zero values in flat
          regions, and non-zero edge-like traces where there are intensity
          transitions. This makes the Laplacian pyramid ideal for tasks that
          benefit from highlighting structural information, such as image
          alignment, blending, and compression.
        </p>

        <h4 className="text-lg font-semibold pt-2">
          Constructing the Laplacian Pyramid
        </h4>
        <p>
          Below is the Laplacian Pyramid of 4 levels created for EMIR.tif . Each
          level is 1/4 of the previous level's size, and the edges are more and
          more obvious as we go up in the pyramid. The level 4 image has thicker
          "strokes," which summarized key edges in EMIR.tif after several layers
          of gaussian blurring.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {laplacianPyramid.map((l) => (
            <div
              className="flex flex-col items-center justify-center w-full px-4"
              key={l.name}
            >
              <Image
                id={l.name}
                src={l.path}
                alt={l.name}
                width={300}
                height={300}
                className="object-cover w-full"
              />
              <div className="mt-2 text-center">
                <p className="font-semibold">{l.name.toUpperCase()}</p>
                <p>Image size: {l.size}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          Using the Laplacian Pyramid generated above, and the NCC metric from
          Part 1.2, the alignment is a lot more accurate now.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 px-4">
          {/* Left: Laplacian Pyramids */}
          <div className="w-full">
            <Image
              id="emirLaplacian"
              alt="Emir aligned with Laplacian"
              src="/media/proj1/laplacian/output_ncc_laplacian_emir.jpg"
              width={600}
              height={600}
              className="mx-auto  "
            />
            <div className="mt-4 text-center">
              <p className="font-semibold text-lg">EMIR_LAPLACIAN.jpg</p>
              <p>Method: NCC + Laplacian Pyramids</p>
              <p>Best shift for G: (-57, -17)</p>
              <p>Best shift for B: (-105, -41)</p>
              <p>Runtime: 9.8312s</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-semibold text-lg">
            Comparing Gaussian and Laplacian Pyramids on Emir's alignment
          </p>
        </div>
        <p>
          Here is a zoomed-in comparison of the two methods. Just looking at
          Emir's head, the yellow cast due to blue channel's misalignment
          disappeared after aligning the source image with the Laplacian Pyramid
          above. All other images were aligned accurately with this method as
          well.
        </p>
        <Image
          id="emirGaussian"
          alt="Emir aligned with Gaussian"
          src="/media/proj1/laplacian/emir_comparison.png"
          width={800}
          height={800}
          className="mx-auto  "
        />

        <div className="font-bold text-lg">
          NCC + Laplacian Pyramid alignment results
        </div>
        <Swiper
          pagination={{ type: "progressbar" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-full w-full"
        >
          {laplacianImages.map((m) => (
            <SwiperSlide key={m.name}>
              <div className="flex flex-col items-center justify-center h-full px-4">
                <div className="overflow-hidden">
                  <Image
                    id={m.name}
                    src={m.path}
                    alt={m.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="font-semibold">
                    {m.name.toLocaleUpperCase()}.jpg
                  </p>
                  <p>Best shift for G: {m.bestShiftG}</p>
                  <p>Best shift for B: {m.bestShiftB}</p>
                  <p>Runtime: {m.runtime}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Part 2.2: Automatic cropping</h2>
        <div className="text-lg font-bold">Steps</div>
        <p>
          1. Preprocess with cropping: I first crops the central 60% of the
          image. This eliminates irrelevant outer edges, ensuring the algorithm
          focuses only on the primary content.
        </p>
        <p>
          2. Detect edges: Then we use the Canny edge detection algorithm on
          each color channel (red, green, blue) of the central crop, to find
          sharp changes in pixel intensity. These changes represent the image's
          boundaries.
        </p>
        <p>
          3. Identify lines: In order to find the straight lines (film scan
          borders to remove), I use the Hough Transform. It efficiently
          identifies the lines that form the border of the photograph or subject
          matter.
        </p>
        <p>
          4. Then I define the bounding region of the image and find the minimum
          and maximum x and y coordinates.
        </p>
        <p>
          5. Final crop: The coordinates are then scaled back to the original
          image's dimensions. I added a 1% buffer margin is added to prevent
          cutting into the main subject. The image is then cropped to this
          final, refined bounding box, and the result is saved.
        </p>

        <div className="font-bold text-lg">Automatic cropping result</div>
        <Swiper
          pagination={{ type: "progressbar" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-full w-full"
        >
          {autoCroppedImages.map((m) => (
            <SwiperSlide key={m.name}>
              <div className="flex flex-col items-center justify-center h-full px-4">
                <div className="overflow-hidden">
                  <Image
                    id={m.name}
                    src={m.path}
                    alt={m.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="font-semibold">
                    {m.name.toLocaleUpperCase()}.jpg
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Part 2.3: Automatic contrast</h2>
        <h4 className="font-semibold text-lg">Linear contrast stretching</h4>
        <p>
          One intuitive way to adjust contrast is just to stretch the pixel
          intensity range of an image so that the minimum pixel value becomes 0
          and the maximum becomes 1. This allows to effectively maximize the
          image’s contrast in a linear way. This is called linear contrast
          stretching.
        </p>
        <p>
          Let the minimum pixel intensity across the entire image be a, and the
          maximum pixel intensity across the entire image be b. In order to
          perform linear transformation, each pixel value x is transformed using
          the formula:
          <ReactMarkdown
            children={linearContrast}
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          />
        </p>
        <p>
          This transformation ensures: when x = a, then x’ = 0; when x = b, then
          x’ = 1; all other values x are linearly mapped into the interval [0,
          1].
        </p>
        <p>
          Below is the before and after of the linear stretch, and visually the
          two images look identical.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="text-center">
            <Image
              id="emirGaussian"
              alt="Emir original"
              src="/media/proj1/auto_contrast/output_ncc_laplacian_emir.jpg"
              width={800}
              height={800}
              className="mx-auto"
            />
            <p>Original contrast</p>
          </div>
          <div className="text-center">
            <Image
              id="emirGaussian"
              alt="Emir linear contrast"
              src="/media/proj1/auto_contrast/out_emir_linear_contrasted.jpg"
              width={800}
              height={800}
              className="mx-auto"
            />
            <p>Linear contrast</p>
          </div>
        </div>

        <h4 className="font-semibold text-lg">
          The two images above look identical. Why is that?{" "}
        </h4>
        <p>
          The problem with linear contrast stretching is that for an float32
          image that has pixel min value = 0 and max value = 1, the pixel
          intensity band would not be stretched at all, as the range before and
          after the stretch would be the same. This would result in the
          post-processed image looking exactly the same as the image without
          adjusting contrast.
        </p>

        <h4 className="font-semibold text-lg">Histogram Equilization</h4>
        <p>
          To address this issue, we could use histogram equilization to
          redistribute the pixel intensity. Histogram equilization transforms
          the original pixel intensity histogram into a new histogram that is
          more uniform and covers a wider intensity range. I used the histogram
          equilization function from skimage.exposure package.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="text-center">
            <Image
              id="emirGaussian"
              alt="Emir original"
              src="/media/proj1/auto_contrast/output_ncc_laplacian_emir.jpg"
              width={800}
              height={800}
              className="mx-auto"
            />
            <p>Original contrast</p>
          </div>
          <div className="text-center">
            <Image
              id="emirGaussian"
              alt="Emir histogram equilized"
              src="/media/proj1/auto_contrast/out_emir_hist_contrasted.jpg"
              width={800}
              height={800}
              className="mx-auto"
            />
            <p>Histogram Equilization</p>
          </div>
        </div>

        <p>
          To verify that automatic contrast works, below is a comparison of the
          two contrast adjusting methods, with respect to the original image
          aligned with NCC + Laplacian pyramid. As one can tell, the contrast in
          the histogram-equilized image is very sharp.
        </p>
        <Image
          id="emirGaussian"
          alt="Emir aligned with Gaussian"
          src="/media/proj1/auto_contrast/contrast_comparison.png"
          width={800}
          height={800}
          className="mx-auto  "
        />
        <div className="font-bold text-lg">
          Automatic contrast result (after auto cropping)
        </div>
        <Swiper
          pagination={{ type: "progressbar" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-full w-full"
        >
          {autoContrastImages.map((m) => (
            <SwiperSlide key={m.name}>
              <div className="flex flex-col items-center justify-center h-full px-4">
                <div className="overflow-hidden">
                  <Image
                    id={m.name}
                    src={m.path}
                    alt={m.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="font-semibold">
                    {m.name.toLocaleUpperCase()}.jpg
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 2.4: Automatic white balance
        </h2>
        <p>
          Automatic white balance involves two problems: estimating the
          illuminant, and manipulating the colors to counteract the illuminant
          and simulate a neutral illuminant. For estimating the illuminat, some
          simple methods including assuming the brightest color is the
          illuminant and shift those to value = 255 (white), or assuming the
          average color in the image is achromatic(gray) and adjust the average
          values of each channel to be equal. The former one is the White Patch
          algorithm, and the latter is called the Gray World algorithm.
        </p>
        <p>
          I tried implementing both algorithms, but shifting the brighest pixel
          value to be 255 didn't yield any meaningful effect on EMIR.tif,
          because the brightest values of all three channels in EMIR.tif is
          (255, 251, 254). With the highest intensity value being so close to
          white, the white patch algorithm wouldn't be helpful in this case.
        </p>
        <p>
          Therefore, I used the Gray World algorithm. I first get the mean of
          each BGR channels, then get the average mean of all channels M as the
          gray value of the image. Then I scaled the BGR channels linearly so
          that the average of each channel would be M. I also made sure to clip
          each channel's range at [0, 255] to avoid overflowing. Then, we have
          our white-balanced image using the Gray World algorithm. See below for
          the side-by-side before and after comparison.
        </p>
        <div className="text-center text-gray-500">
          <Image
            id="emirWhiteBalance"
            alt="Emir white balanced comparison"
            src="/media/proj1/auto_white_balance/out_emir_balanced_comparison.png"
            width={800}
            height={800}
            className="mx-auto"
          />
          <p>
            Before and after of automatic white balance using the Gray World
            algorithm
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 2.5: Better color mapping
        </h2>
        <p>
          When we have raw images from separate channels (like photographic
          plates with red, green, blue filters in this case), the channel
          responses do not necessarily match standard RGB. For example, the
          “red” channel might capture some green/blue light. Directly assigning
          these channels to RGB usually produces unrealistic colors. So, we need
          a mapping from raw channels to true RGB.
        </p>
        <p>
          In order to make the photo more realistic, I wondered if we could
          customize a palette and adjust the pixels in the original image to be
          as close to the customered RGB palette as possible. I was inspired by
          the technique of using Van Gogh painting to adjust image colors.
        </p>

        <div className="float-right ml-4 mb-2">
          <Image
            id="palette"
            alt="palette"
            src="/media/proj1/better_color/van_gogh.jpeg"
            width={200}
            height={200}
            className="mx-auto"
          />
          <div className="pt-2 text-center text-gray-500">
            IMG 2.5.1: Van Gogh sunflowers painting
          </div>
        </div>
        <p>
          Here, I used a VanGogh painting to create a cusotmized color palette,
          and mapped it to the Emir image using two different methods.
        </p>
        <p>
          <span className="font-semibold">Method 1: k-means clustering </span>
          From Van Gogh's paiting, I used k-means clustering to extract 8
          dominant colors to compose the customized color palette.
        </p>
        <p>
          Then, to apply the colors from the palette to the target image, I
          mapped image colors to the cloest colors in the palette, using k-d
          trees for efficient nearest-neighbor searches.
        </p>
        <p>
          The mapped image 2.5.3 seems to have very "flat" colors(kind of
          posterized). This is due to the way we mapped the pixels. By using
          nearest neighbor mapping, every pixel in your photo is replaced by the
          single closest palette color from the cutomized palette. This means
          that the entire image is restricted to only N colors (e.g. I set N=8)
          with no gradients. This gives the “flat” look we're seeing.
        </p>
        <p>
          <span className="font-semibold">
            Method 2: Floyd-Steinberg dithering{" "}
          </span>
          To fix this and improve the visual asesthetic of the color mapped
          image, we could use Floyd–Steinberg dithering technique so that pixels
          “mix” palette colors instead of being flat. Floyd–Steinberg dithering
          reduces the number of colors in an image by distributing the
          quantization error of each pixel to its neighboring pixels, and
          convert images with high color depth to lower color palettes. Now we
          have a Van Gogh-style photo of Emir using color mapping.
        </p>
        <div className="flex flex-row gap-2">
          <div className="text-center">
            <Image
              id="emirGaussian"
              alt="Emir original"
              src="/media/proj1/auto_contrast/output_ncc_laplacian_emir.jpg"
              width={400}
              height={400}
              className="mx-auto"
            />
            <p>IMG 2.5.2: Emir (original)</p>
          </div>
          <div className="text-center">
            <Image
              id="emirKMeans"
              alt="Emir k means"
              src="/media/proj1/better_color/image_van_gogh_palette.jpg"
              width={400}
              height={400}
              className="mx-auto"
            />
            <p>IMG 2.5.3: Emir (k-menas clustering)</p>
          </div>
          <div className="text-center">
            <Image
              id="emirDithering"
              alt="Emir dithering"
              src="/media/proj1/better_color/image_van_gogh_dithered.jpg"
              width={400}
              height={400}
              className="mx-auto"
            />
            <p>IMG 2.5.4: Emir (Floyd-Steinberg dithering)</p>
          </div>
        </div>
        <p>
          <span className="font-semibold">
            Making the photo more realistic:{" "}
          </span>{" "}
          Similarly, we can create a customized RGB palette and apply
          Floyd-Steinberg dithering to make the photo look more realistic. Image
          2.5.6 is the result, using a reference palette of only R, G, and B
          colors.
        </p>
        <div className="flex flex-row gap-2 items-center">
          <div className="text-center">
            <Image
              id="rgb-palette"
              alt="rgb-palette"
              src="/media/proj1/better_color/rgb.png"
              width={200}
              height={200}
              className="mx-auto"
            />
            <div className="pt-2 text-center text-gray-500">
              IMG 2.5.5: RGB reference image for palette
            </div>
          </div>
          <div className="flex flex-row align-center">
            <div className="text-center">
              <Image
                id="emirGaussian"
                alt="Emir original"
                src="/media/proj1/auto_contrast/output_ncc_laplacian_emir.jpg"
                width={400}
                height={400}
                className="mx-auto"
              />
              <p>IMG 2.5.2: Emir (original)</p>
            </div>
            <div className="text-center">
              <Image
                id="emirDithering"
                alt="Emir dithering"
                src="/media/proj1/better_color/image_rgb_dithered.jpg"
                width={400}
                height={400}
                className="mx-auto"
              />
              <p>IMG 2.5.6: Emir (RGB palette, Floyd-Steinberg dithering)</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="space-y-4">
        <h2 className="text-xl font-semibold">A fun coincidence</h2>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Sayyid_Mir_Muhammad_Alim_Khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Emir Sayyid Mir Muhammad Alim Khan&nbsp;
          </a>
          was the last emir of the Uzbek Manghit dynasty, rulers of the Emirate
          of Bukhara in Central Asia. I was just traveling in Central Asia in
          Aug 2025, and I spent a few days in Bukhara, a hot, desert, and
          hospitable city on the south central part of Uzbekistan. I visted the
          Ark Fortress of Bukhara, and learned about the history of the Bukhara
          Empire. It was such a coincidence that I am now seeing Emir in my
          Computer Vision project. Here are some images of the monuments in the
          city I captured with my lens.
        </p>
        <Swiper
          pagination={{ type: "progressbar" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-full w-full"
        >
          {bukhara.map((m) => (
            <SwiperSlide key={m.name}>
              <div className="flex flex-col items-center justify-center h-full px-4">
                <div className="overflow-hidden">
                  <Image
                    id={m.name}
                    src={m.path}
                    alt={m.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="font-semibold">{m.name.toLocaleUpperCase()}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}
    </main>
  );
}

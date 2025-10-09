import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SyntaxHighlighter from "react-syntax-highlighter";

function MathBlock({ formula }: { formula: string }) {
  return (
    <div className="flex justify-center overflow-x-auto">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          p: ({ children }) => <>{children}</>,
        }}
      >
        {formula}
      </ReactMarkdown>
    </div>
  );
}

export default function Proj3() {
  const street = [
    {
      name: "Street (left)",
      path: "/media/proj3/street_left.jpeg",
    },
    {
      name: "Street (left)",
      path: "/media/proj3/street_right.jpeg",
    },
    {
      name: "Street (mosaic)",
      path: "/media/proj3/street_weighted_distance.jpg",
    },
  ];
  const campus = [
    {
      name: "Campus (left)",
      path: "/media/proj3/campus_left.jpeg",
    },
    {
      name: "Campus (right)",
      path: "/media/proj3/campus_right.jpeg",
    },
    {
      name: "Campus (mosaic)",
      path: "/media/proj3/campus_weighted_distance.jpg",
    },
  ];

  const door = [
    {
      name: "Door (left)",
      path: "/media/proj3/door_left.jpeg",
    },
    {
      name: "Door (left)",
      path: "/media/proj3/door_right.jpeg",
    },
    {
      name: "Door (mosaic)",
      path: "/media/proj3/door_weighted_distance.jpg",
    },
  ];

  const points = [
    {
      name: "Street",
      path: "/media/proj3/street_points.jpeg",
    },
    {
      name: "Campus",
      path: "/media/proj3/campus_points.jpeg",
    },
    {
      name: "Door",
      path: "/media/proj3/door_points.jpeg",
    },
  ];

  const bart = [
    {
      name: "Bart",
      path: "/media/proj3/bart_rec.jpeg",
    },
    {
      name: "Bart rectified (nn)",
      path: "/media/proj3/bart_rectified_nn.jpg",
      runtime: "1.8761 seconds",
    },
    {
      name: "Bart rectified (bilinear)",
      path: "/media/proj3/bart_rectified_bl.jpg",
      runtime: "3.9961 seconds",
    },
    {
      name: "Bart rectified detail (nn)",
      path: "/media/proj3/bart_nn_rectified_detail.jpg",
    },
    {
      name: "Bart rectified detail (bilinear)",
      path: "/media/proj3/bart_bl_rectified_detail.jpg",
    },
  ];

  const cafe = [
    {
      name: "Cafe",
      path: "/media/proj3/coffee_rec.jpeg",
    },
    {
      name: "Cafe rectified (nn)",
      path: "/media/proj3/coffee_rectified_nn.jpg",
      runtime: "0.2243 seconds",
    },
    {
      name: "Cafe rectified (bilinear)",
      path: "/media/proj3/coffee_rectified_bl.jpg",
      runtime: "0.3706 seconds",
    },
    {
      name: "Cafe rectified detail (nn)",
      path: "/media/proj3/coffee_nn_rectified_detail.jpg",
    },
    {
      name: "Cafe rectified detail (bilinear)",
      path: "/media/proj3/coffee_bl_rectified_detail.jpg",
    },
  ];

  const street_methods = [
    {
      name: "Street mosaic, overwrite",
      path: "/media/proj3/street_hard_rewrite.jpg",
    },
    {
      name: "Street mosaic, overlap mask",
      path: "/media/proj3/overlap_mask.jpg",
    },
    {
      name: "Street mosaic, naive weighted",
      path: "/media/proj3/street_weighted_naive.jpg",
    },
    {
      name: "Warped left image on canvas, distance transform mask",
      path: "/media/proj3/alpha1_mask.jpeg",
    },
    {
      name: "right image on canvas, distance transform mask",
      path: "/media/proj3/alpha2_mask.jpeg",
    },
    {
      name: "Street mosaic, weighted distance",
      path: "/media/proj3/street_weighted_distance.jpg",
    },
  ];

  const spheres = [
    {
      name: "Street mosaic, sphere mosaic",
      path: "/media/proj3/street_sphere.jpeg",
    },
    {
      name: "Campus mosaic, sphere mosaic",
      path: "/media/proj3/campus_sphere.jpg",
    },
    {
      name: "Door mosaic, sphere mosaic",
      path: "/media/proj3/door_sphere.jpg",
    },
  ];

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10">
      {/* Back Button */}
      <Link
        href="/"
        className="flex items-center text-gray-600 hover:text-black transition"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        <span>Back to Home</span>
      </Link>

      <h1 className="text-3xl font-bold text-center">
        Project 3: (Auto)stitching and Photo Mosaics
      </h1>
      <h2 className="text-xl font-semibold">
        [due 10/8/2025] Part A: IMAGE WARPING and MOSAICING
      </h2>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Part A.1: Shoot the Pictures</h2>
        <p>
          Below are three sets of images with projective transformations between
          them, with fixed center of projection. Part A of this project will use
          the three sets of images below to compose image mosaics using image
          warping and auto-stitching.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {street.slice(0, 2).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={300} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {campus.slice(0, 2).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={300} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {door.slice(0, 2).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={300} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part A.2: Recover Homographies
        </h2>
        <p>
          We know that for a pair of corresponding points{" "}
          <InlineMath math={"p = (x, y)^T"} /> and{" "}
          <InlineMath math={"p = (x^{\\prime}, y^{\\prime})^T"} />,
          <BlockMath
            math={String.raw`
    H = \begin{bmatrix}
      h_{11} & h_{12} & h_{13} \\
      h_{21} & h_{22} & h_{23} \\
      h_{31} & h_{32} & h_{33} \\
    \end{bmatrix}
  `}
          />
          Since the homography is up to scale, we can set the 9th entry{" "}
          <InlineMath math="h_{33} = 1" />. And therefore, we have eight
          unknowns
          <BlockMath
            math={String.raw`
    h = [h_{11}, h_{12}, h_{13}, h_{21}, h_{22}, h_{23}, h_{31}, h_{32}]^T
  `}
          />
        </p>
        <p>
          Given <InlineMath math={`p^{\\prime} = Hp`} />, we have
        </p>
        <MathBlock
          formula={`$$
  \\begin{aligned}
x^{\\prime} &= \\frac{h_{11}x + h_{12}y + h_{13}}{h_{31}x + h_{32}y + 1} \\\\
y^{\\prime} &= \\frac{h_{21}x + h_{22}y + h_{23}}{h_{31}x + h_{32}y + 1}
\\end{aligned}
$$`}
        />
        <p>
          Multiply both sides by the denominator, and rearrange both equations,
          we get the linear equations:
        </p>
        <MathBlock
          formula={`$$
  \\begin{aligned}
x h_{11} + y h_{12} + 1 h_{13} - x^{\\prime} x h_{31} - x^{\\prime} y h_{32} &= x^{\\prime} \\\\
x h_{21} + y h_{22} + 1 h_{23} - y^{\\prime} x h_{31} - y^{\\prime} y h_{32} &= y^{\\prime}
\\end{aligned}
$$`}
        />
        <p>
          In matrix form, we have{" "}
          <InlineMath
            math={`
  Ah = b
  `}
          />
          , where
        </p>

        <MathBlock
          formula={`$$
  A =
\\begin{bmatrix}
x & y & 1 & 0 & 0 & 0 & -x^{\\prime}x & -x^{\\prime}y \\\\
0 & 0 & 0 & x & y & 1 & -y^{\\prime}x & -y^{\\prime}y \\\\

\\end{bmatrix}
,\\quad
b =
\\begin{bmatrix}
x^{\\prime} \\\\ y^{\\prime} \\\\ 

\\end{bmatrix}
  $$`}
        />
        <p>
          So for n pairs of corresponding points, A will be 2n x 8, and b will
          be 2n x 1.
        </p>
        <MathBlock
          formula={`$$
  A =
\\begin{bmatrix}
x_{1} & y_{1} & 1 & 0 & 0 & 0 & -x_{1}^{\\prime}x_{1} & -x_{1}^{\\prime}y_{1} \\\\
0 & 0 & 0 & x_{1} & y_{1} & 1 & -y_{1}^{\\prime}x_{1} & -y_{1}^{\\prime}y_{1} \\\\
x_{2} & y_{2} & 1 & 0 & 0 & 0 & -x_{2}^{\\prime}x_{2} & -x_{2}^{\\prime}y_{2} \\\\
0 & 0 & 0 & x_{2} & y_{2} & 1 & -y_{2}^{\\prime}x_{2} & -y_{2}^{\\prime}y_{2} \\\\
\\vdots & & & & & & & \\vdots \\\\
x_{n} & y_{n} & 1 & 0 & 0 & 0 & -x_{n}^{\\prime}x_{n} & -x_{n}^{\\prime}y_{n} \\\\
0 & 0 & 0 & x_{n} & y_{n} & 1 & -y_{n}^{\\prime}x_{n} & -y_{n}^{\\prime}y_{n}
\\end{bmatrix}
,\\quad
b =
\\begin{bmatrix}
x_{1}^{\\prime} \\\\ y_{1}^{\\prime} \\\\ 
x_{2}^{\\prime} \\\\ y_{2}^{\\prime} \\\\
\\vdots \\\\
x_{n}^{\\prime} \\\\ y_{n}^{\\prime}
\\end{bmatrix}
  $$`}
        />
        <p>
          <span className="font-semibold">Identify correspondences: </span>I
          picked roughly 20 points for each image set, for the best alignment
          effect. Below are the images set with corresponding points visualized.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          {points.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={800} height={400} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          Using the correspondences in street image set as an example, we have:
        </p>
        <SyntaxHighlighter language="python">
          {`A = [[    852     343       1       0       0       0 -435372 -175273]
 [      0       0       0     852     343       1 -255600 -102900]
       ...     ...       ...   ...     ...   ...   ...   ...  
                      # omit equations for length
 [   1186     605       1       0       0       0 -914406 -466455]
 [      0       0       0    1186     605       1 -662974 -338195]]

 b = [511 300 469 291 429 298 194 194 112 393 227 273 215 265 226 301 212 295
 287 481 249 472 287 523 246 518 255 623 644 617 698 592 469 670 707 557
  76 221 765 695 771 559]
`}{" "}
        </SyntaxHighlighter>

        <p>
          <span className="font-semibold">Compute H: </span>
          To solve for h, we can use the least-squres where{" "}
          <MathBlock
            formula={`$$
h = (A^T A)^{-1} A^T b
  $$`}
          />
          In code, I used{" "}
          <SyntaxHighlighter language="python">
            {"h, _, _, _ = np.linalg.lstsq(A, b, rcond=None) "}
          </SyntaxHighlighter>{" "}
          to solve for the 8 unknowns, and append h_33 = 1 to the bottom right
          corner of the 3x3 matrix to get H. Below are the H matrices for each
          of the image sets above, using H = computeH(im1_pts,im2_pts):
        </p>
        <SyntaxHighlighter language="python">
          {`street_H = [[ 2.06547633e+00 -7.53752292e-02 -8.61105758e+02]
 [ 4.64225435e-01  1.72607077e+00 -4.74795776e+02]
 [ 8.07725442e-04  7.38934331e-05  1.00000000e+00]]
`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="python">
          {`campus_H = [[ 1.30642452e+00 -3.90497699e-02 -4.92878241e+02]
 [ 1.47561264e-01  1.19275602e+00 -1.45325762e+02]
 [ 2.38517397e-04 -6.17060967e-06  1.00000000e+00]]
`}
        </SyntaxHighlighter>

        <SyntaxHighlighter language="python">
          {`door_H = [[ 1.89016788e+00  1.00929387e-01 -7.74849407e+02]
 [ 2.39590678e-01  1.61325228e+00 -2.08538936e+02]
 [ 6.62580476e-04  8.98712430e-05  1.00000000e+00]]
`}
        </SyntaxHighlighter>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Part A.3: Warp the Images</h2>
        <p>
          To ensure that all of the my code is correctly warping the images, I
          used two images with rectangular objects to test the warping
          algorithms. Below are two images, one taken in the 19th & Oakland Bart
          station, another taken in a coffee shop, and I used the Bart station
          sign and the coffee shop poster to retify the iamges. After setting
          the correspondences at each corner of the rectangular objects (Bart
          sign and coffee poster, respectively), I obtain the H value for each
          image. This H value would warp the input objects that are skewed in
          the input image back to rectangular shapes via projective
          transformation.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {bart.slice(0, 1).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={300} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
          {cafe.slice(0, 1).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={300} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          <span className="font-semibold">Compare interpolation methods: </span>
          I applied inverse warping to avoid holes in the output image, and used
          two methods for the warping algorithms. Here is a comparison between
          neartest-neighbor and bilinear warping using the Bart image. We can
          see that nearest neighbor is the faster, since it just finds the
          nearest pixel in the source image and use its intensity. Bilinear is
          slower, as it requires computing the new pixel intensity using
          weighted average of the four nearest pixels around it.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {bart.slice(1, 5).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={300} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
              {img.runtime && (
                <p className="mt-2 text-sm font-medium text-center text-gray-500">
                  {img.runtime}
                </p>
              )}
            </div>
          ))}
        </div>
        <p>
          I also notice that the image warped with bilinear interpolation has
          finer details. This is especially obvious in the cafe detail
          comparison below. This is because nearest neighbor only copies the
          pixel value from the source image in the warped image; with inverse
          warping, some areas would have the same pixel value, producing a
          lower-resolution visual effect. But with bilinear interpolation, the
          warped image would have a smoother transition from areas corresponding
          to one source pixel to another.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {cafe.slice(1, 5).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={300} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
              {img.runtime && (
                <p className="mt-2 text-sm font-medium text-center text-gray-500">
                  {img.runtime}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part A.4: Blend the Images into a Mosaic
        </h2>
        <h3 className="font-semibold">1. Building a new canvas</h3>
        <p>
          <span className="font-semibold">
            Warp image to find new corners:{" "}
          </span>
          First, I transform the source image using the H matrix we have
          computed from Part A.2. It is worth noticing that Ah = b warps source
          image 1 to be in the frame of source image 2, so the first step here
          is to warp all four corners of the image 1 (aka the left images in all
          image sets) to the frame of image 2 (the right images).
        </p>
        <p>
          <span className="font-semibold">Compute new image frame: </span>
          Now the two images are both in the right image&apos;s frame, we can
          compute the corners of the combined image. I get the min and max
          values of (x, y) by looking at four corners of the warped left image
          and the 4 corners of the right image. Since we cannot guarantee the
          warped image would be right at the top left corner of the mosaic
          image, I apply a translation matrix to shift the combined image to
          remove paddings and ensure all parts of the new image is in frame.
        </p>

        <p>
          <span className="font-semibold">
            Warp left image and apply to canvas:
          </span>
          Now that we have computed the size of the combined image, what we have
          essentially is an empty canvas for us to apply the source images onto.
          To start, I warp the left image using bilinear interpolation and add
          any paddings on the horizontal or vertical edges if needed, to ensure
          that the warped left image is the same size as the canvas. This
          ensures that all pixels in the warped left image directly corresponds
          to the pixels on canvas. Then I write the warped image to the canvas.
        </p>
        <h3 className="font-semibold">2. Blending two images together</h3>
        <p>
          <span className="font-semibold">
            Naive approach: directly overwrite the canvas with the second image
          </span>
          A naive approach here is to apply the right image to the canvas, and
          overwrite the overlapping area. See below for the effect. We can see
          that this method is not ideal, as the edges of the left image is very
          obvious. To remove this edge effect, could we use some average of the
          two images to better blend them together?
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          {street_methods.slice(0, 1).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={600} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          <span className="font-semibold">
            Second approach: taking the average of the two images in the
            overlapping area
          </span>
          I then built a mask for the overlapping area of the two images, and
          took half of the pixel intensity in the left image and half of the
          pixel intensity in the right image within the overlapping area. The
          equation to compute the canvas image is as follows:
        </p>
        <MathBlock formula={`$$I = 0.5 I_1 + 0.5 I_2$$`} />
        <p>
          This was an attempt to blend the two images together, but the visual
          seams are still very obvious. Using this method, we still have full
          weight for one image on one side, and full weight for the other on the
          other side. Only the inner part of the overlap are averaged, leaving
          the sharp boundaries visible.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {street_methods.slice(1, 3).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={600} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>

        <p>
          <span className="font-semibold">
            Best approach: create alphas masks with respect to the distance to
            the edge
          </span>
          We do need to use average, but how can we smoothly blend the edges of
          the two images? I decided to use distance transform in scipy.ndimage.
          This function computes the Euclidean distance transform of a binary
          input array, and would help create alpha masks that indicates distance
          from each pixel to the edges of the images.
        </p>
        <MathBlock
          formula={`$$
    \\alpha = \\frac{\\text{distance\\_transform}}{\\max(\\text{distance\\_transform})}
  $$`}
        />
        <p>
          Pixels near the edges have smaller alpha values, while central pixels
          have alpha closer to 1. After warping to the spherical canvas, the
          alpha masks are multiplied by a validity mask that zeros out
          out-of-bounds pixels. Below are the masks I created with distance
          transform for the warped left image and the right image on canvas.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {street_methods.slice(3, 5).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={600} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>Now we have the blending function:</p>
        <MathBlock
          formula={`$$
    I = \\frac{\\alpha_1 \\cdot I_1 + \\alpha_2 \\cdot I_2}{\\alpha_1 + \\alpha_2}
  $$`}
        />

        <p>
          Using the approach above, we get the seamless blending of the two
          images below. I clipped the new image to be [0, 1] to avoid any
          overflows.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          {street_methods.slice(5, 6).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={600} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>

        <p>
          Using the same approach, we can obtain the mosaic of the other two
          image sets.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          {campus.slice(2, 3).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={600} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          {door.slice(2, 3).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={600} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Part A.5: Bells & Whistles</h2>
        <p>
          <span className="font-semibold">Generate a spherical mosaic: </span>
          To stitch two images into a spherical panorama, we first need to warp
          both images onto a common spherical coordinate system. The mapping is
          done via the following steps:
        </p>
        <p>
          <span className="font-semibold">
            1. Convert plane coordinates to spherical coordinates:
          </span>{" "}
          For each image, we map the pixel coordinates{" "}
          <InlineMath math={`(x, y)`} /> to spherical angles{" "}
          <InlineMath math={`(\\theta, \\phi)`} /> using a focal length{" "}
          <InlineMath math={`f`} />:
          <MathBlock
            formula={`$$
    \\theta = \\arctan\\frac{x - c_x}{f}, \\quad
    \\phi = \\arctan\\frac{y - c_y}{f}
  $$`}
          />
          where <InlineMath math={`(c_x, c_y)`} /> is the image center. This
          creates a curved projection that simulates a fisheye effect.
        </p>
        <p>
          <span className="font-semibold">
            2. Compute inverse mapping back to each image:
          </span>{" "}
          For each pixel on the spherical canvas, we compute the corresponding
          coordinates in the original images. For the first image:
          <MathBlock
            formula={`$$
    x_1 = f \\cdot \\tan(\\theta) + c_{x1}, \\quad
    y_1 = \\frac{f \\cdot \\tan(\\phi)}{\\cos(\\theta)} + c_{y1}
  $$`}
          />
          and for the second image, we apply the homography{" "}
          <InlineMath math={`H`} /> that maps im1 → im2:
          <MathBlock
            formula={`$$
    \\begin{bmatrix} x_2 \\\\ y_2 \\\\ 1 \\end{bmatrix} = H \\begin{bmatrix} x_1 \\\\ y_1 \\\\ 1 \\end{bmatrix}
  $$`}
          />
          This ensures that features align correctly across the two images.
        </p>
        <p>
          <span className="font-semibold">
            3. Sample image colors using bilinear interpolation:
          </span>{" "}
          Using the computed coordinates <InlineMath math={`(x_1, y_1)`} /> and{" "}
          <InlineMath math={`(x_2, y_2)`} />, we sample each image using
          bilinear interpolation.
        </p>
        <p>
          <span className="font-semibold">
            4. Same approach as flat mosaic:
          </span>{" "}
          Similar to the flat mosaic, we use distance trasnfrom to smoothly
          blend two images together, and then combine the warped images using
          their alpha masks.
        </p>

        <p>
          The resulting canvas preserves the geometry of each image while
          applying a spherical effect, and the distance-transform-based alpha
          masks create smooth blending at the edges.
        </p>
        {spheres.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={600} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

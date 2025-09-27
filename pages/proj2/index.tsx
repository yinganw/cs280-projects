import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import SyntaxHighlighter from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

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

export default function Proj2() {
  const four_loop_cnn = `
    def convolution_four_loops(img, kernel):
        output_img = np.zeros(img.shape)
        h, w = img.shape
        m, n = kernel.shape
        center_m = m // 2
        center_n = n // 2
        
        for i in range(h):
            for j in range(w):
                for a in range(m):
                    for b in range(n):
                        x = i - (center_m - a)
                        y = j - (center_n - b)
                        if 0 <= x < h and 0 <= y < w:
                            output_img[i, j] += kernel[m - 1 - a, n - 1 - b] * img[x, y]

        # Apply min-max normalization so convolution doesn't get blow up
        norm_img = (output_img - output_img.min()) / (output_img.max() - output_img.min())
        return norm_img
    `;
  const two_loop_cnn = `
  def convolution_two_loops(img, kernel):
    output_img = np.zeros(img.shape)
    h, w = img.shape
    m, n = kernel.shape
    center_m = m // 2
    center_n = n // 2

    kernel_flipped = np.flipud(np.fliplr(kernel))
    
    for i in range(h):
        for j in range(w):
            x_start, x_end = i - center_m, i + m - center_m
            y_start, y_end = j - center_n, j + n - center_n

            patch = img[max(0, x_start) : min(x_end, h), max(0, y_start) : min(y_end, w)]
            kernel_patch = kernel_flipped[max(0, -x_start) : m - max(0, x_end - h),
                                      max(0, -y_start) : n - max(0, y_end - w)]
            output_img[i, j] = np.sum(patch * kernel_patch)

     # Apply min-max normalization so convolution doesn't get blow up
    norm_img = (output_img - output_img.min()) / (output_img.max() - output_img.min())
    return norm_img
    `;

  const part1_1 = [
    {
      name: "Original image of me, RGB",
      path: "/media/proj2/1.1/me.jpeg",
    },
    {
      name: "Four-loop convolution, grayscale",
      path: "/media/proj2/1.1/me_conv_four_loops.jpeg",
      runtime: "30.5518s",
    },
    {
      name: "Two-loop convolution, grayscale",
      path: "/media/proj2/1.1/me_conv_two_loops.jpeg",
      runtime: "2.8947s",
    },
    {
      name: "scipy.signal.convolve2d(), grayscale",
      path: "/media/proj2/1.1/me_conv_scipy.jpeg",
      runtime: "0.1709s",
    },
  ];

  const part1_1_derivatives = [
    {
      name: "Dx with four-loop convolution, grayscale",
      path: "/media/proj2/1.1/me_dx_conv_four_loops.jpeg",
    },
    {
      name: "Dx with two-loop convolution, grayscale",
      path: "/media/proj2/1.1/me_dx_conv_two_loops.jpeg",
    },
    {
      name: "Dx with scipy.signal.convolve2d(), grayscale",
      path: "/media/proj2/1.1/me_dx_conv_scipy.jpeg",
    },
    {
      name: "Dy with four-loop convolution, grayscale",
      path: "/media/proj2/1.1/me_dy_conv_four_loops.jpeg",
    },
    {
      name: "Dy with two-loop convolution, grayscale",
      path: "/media/proj2/1.1/me_dy_conv_two_loops.jpeg",
    },
    {
      name: "Dy with scipy.signal.convolve2d(), grayscale",
      path: "/media/proj2/1.1/me_dy_conv_scipy.jpeg",
    },
  ];

  const part1_2_derivatives = [
    {
      name: "Convolved with Dx",
      path: "/media/proj2/1.2/cameraman_dy.png",
    },
    {
      name: "Convolved with Dy",
      path: "/media/proj2/1.2/cameraman_dy.png",
    },
  ];

  const part1_2_gradient = [
    {
      name: "Fig 1.2.1 Gradient magnitude",
      path: "/media/proj2/1.2/cameraman_gradient.png",
    },
    {
      name: "Fig 1.2.2 Binarized gradient magnitude",
      path: "/media/proj2/1.2/cameraman_binarized.png",
    },
  ];

  const part1_3_derivatives = [
    {
      name: "Fig 1.3.1 Gaussian blurred",
      path: "/media/proj2/1.3/cameraman_gaussian_smoothed.jpg",
    },
    {
      name: "Fig 1.3.2 Convolved with Dx",
      path: "/media/proj2/1.3/cameraman_dx.png",
    },
    {
      name: "Fig 1.3.3 Convolved with Dy",
      path: "/media/proj2/1.3/cameraman_dy.png",
    },
  ];

  const part1_3_gradient = [
    {
      name: "Fig 1.3.4 Gradient magnitude",
      path: "/media/proj2/1.3/cameraman_gradient.png",
    },
    {
      name: "Fig 1.3.5 Binarized gradient magnitude",
      path: "/media/proj2/1.3/cameraman_binarized.png",
    },
  ];

  const part1_3_2_derivatives = [
    {
      name: "Fig 1.3.6 G(D_x): Gaussian smoothed D_x",
      path: "/media/proj2/1.3/DoG_x.jpg",
    },
    {
      name: "Fig 1.3.7 G(D_y): Gaussian smoothed D_y",
      path: "/media/proj2/1.3/DoG_y.jpg",
    },
    {
      name: "Fig 1.3.8 Convolved with G(D_x)",
      path: "/media/proj2/1.3/cameraman_gaussian_dx.png",
    },
    {
      name: "Fig 1.3.9 Convolved with G(D_y)",
      path: "/media/proj2/1.3/cameraman_gaussian_dy.png",
    },
  ];

  const part1_3_2_gradient = [
    {
      name: "Fig 1.3.10 Gradient magnitude",
      path: "/media/proj2/1.3/cameraman_gaussian_gradient.png",
    },
    {
      name: "Fig 1.3.11 Binarized gradient magnitude",
      path: "/media/proj2/1.3/cameraman_gaussian_binarized.png",
    },
  ];

  const part2_1_taj = [
    {
      name: "Original image of Taj Mahal",
      path: "/media/proj2/2.1/taj.jpg",
    },
    {
      name: "Gaussian blurred, sigma = 2",
      path: "/media/proj2/2.1/taj_blurred.jpg",
    },
    {
      name: "Laplacian image",
      path: "/media/proj2/2.1/taj_laplacian.jpg",
    },
    {
      name: "Sharpened image, alpha = 1",
      path: "/media/proj2/2.1/taj_unsharp_mask_result.jpg",
    },
  ];

  const part2_1_taj_comparison = [
    {
      name: "Sharpened image, alpha = 1",
      path: "/media/proj2/2.1/taj_unsharp_mask_result.jpg",
    },
    {
      name: "Sharpened image, alpha = 3",
      path: "/media/proj2/2.1/taj_unsharp_mask_result_alpha_3.jpg",
    },
    {
      name: "Sharpened image, alpha = 5",
      path: "/media/proj2/2.1/taj_unsharp_mask_result_alpha_5.jpg",
    },
    {
      name: "Sharpened image, alpha = 10",
      path: "/media/proj2/2.1/taj_unsharp_mask_result_alpha_10.jpg",
    },
  ];
  const part2_1_taj_resharpened = [
    {
      name: "Sharpened image, alpha = 5",
      path: "/media/proj2/2.1/taj_unsharp_mask_result_alpha_5.jpg",
    },
    {
      name: "Sharpened image, alpha = 10",
      path: "/media/proj2/2.1/taj_unsharp_mask_result_alpha_10.jpg",
    },
    {
      name: "Resharpened image, applied alpha = 5 twice",
      path: "/media/proj2/2.1/taj_unsharp_mask_result_alpha_5_resharpen_alpha_5.jpg",
    },
  ];

  //

  const part2_1_presidio = [
    {
      name: "Original image of the Presidio, SF",
      path: "/media/proj2/2.1/presidio.jpeg",
    },
    {
      name: "Gaussian blurred, sigma = 2",
      path: "/media/proj2/2.1/presidio_blurred.jpg",
    },
    {
      name: "Laplacian image",
      path: "/media/proj2/2.1/presidio_laplacian.jpg",
    },
    {
      name: "Sharpened image, alpha = 1",
      path: "/media/proj2/2.1/presidio_unsharp_mask_result.jpg",
    },
  ];

  const part2_1_presidio_comparison = [
    {
      name: "Sharpened image, alpha = 1",
      path: "/media/proj2/2.1/presidio_unsharp_mask_result.jpg",
    },
    {
      name: "Sharpened image, alpha = 3",
      path: "/media/proj2/2.1/presidio_unsharp_mask_result_alpha_3.jpg",
    },
    {
      name: "Sharpened image, alpha = 5",
      path: "/media/proj2/2.1/presidio_unsharp_mask_result_alpha_5.jpg",
    },
    {
      name: "Sharpened image, alpha = 10",
      path: "/media/proj2/2.1/presidio_unsharp_mask_result_alpha_10.jpg",
    },
  ];

  const part2_2_cat = [
    {
      path: "/media/proj2/2.2/DerekPicture.jpg",
      name: "Derek",
    },
    {
      path: "/media/proj2/2.2/nutmeg.jpg",
      name: "Nutmeg",
    },
    {
      path: "/media/proj2/2.2/hybrid_cat_prof.jpeg",
      name: "Hybrid image of Derek (low freq) and Nutmeg (high freq)",
    },
  ];

  const part2_2_tennis = [
    {
      path: "/media/proj2/2.2/federer.jpeg",
      name: "Federer",
    },
    {
      path: "/media/proj2/2.2/djokovic.jpeg",
      name: "Djokovic",
    },
    {
      path: "/media/proj2/2.2/hybrid_tennis.jpeg",
      name: "Hybrid image of Federer (low freq) and Djokovic (high freq)",
    },
  ];

  const part2_2_aunt = [
    {
      path: "/media/proj2/2.2/aunt.jpeg",
      name: "Headshot of my aunt",
    },
    {
      path: "/media/proj2/2.2/me.jpeg",
      name: "Headshot of myself",
    },
    {
      path: "/media/proj2/2.2/aunt_aligned.jpeg",
      name: "Aunt, aligned",
    },
    {
      path: "/media/proj2/2.2/me_aligned.jpeg",
      name: "Me, aligned",
    },

    {
      path: "/media/proj2/2.2/aunt_high.jpeg",
      name: "Aunt (high frequency), laplacian filter",
    },
    {
      path: "/media/proj2/2.2/me_low.jpeg",
      name: "Me (low frequency), guassian blurred",
    },
    {
      path: "/media/proj2/2.2/ft_aunt.jpeg",
      name: "Aunt, log Fourier transform",
    },
    {
      path: "/media/proj2/2.2/ft_me.jpeg",
      name: "Me, log Fourier transform",
    },
    {
      path: "/media/proj2/2.2/ft_low.jpeg",
      name: "Me low frequency, log Fourier transform",
    },
    {
      path: "/media/proj2/2.2/ft_high.jpeg",
      name: "Aunt high frequency, log Fourier transform",
    },
    {
      path: "/media/proj2/2.2/ft_hybrid.jpeg",
      name: "Hyrbid image, log Fourier transform",
    },
    {
      path: "/media/proj2/2.2/hybrid_aunt_me.jpeg",
      name: "Hybrid image of myself (low freq) and my aunt (high freq)",
    },
  ];

  const part2_2_bw = [
    {
      path: "/media/proj2/2.2/hybrid_aunt_comparison.png",
      name: "Color analysis of set(aunt, me)",
    },
    {
      path: "/media/proj2/2.2/hybrid_comparison_tennis.png",
      name: "Color anlaysis of set(Djokovic, Federer)",
    },
  ];

  const part2_3_lap = [
    {
      path: "/media/proj2/2.3/mask.jpeg",
      name: "Smoothed binary mask for spline",
    },
    {
      path: "/media/proj2/2.3/spline_lap_stack.png",
      name: "Apple and Organge view",
    },
  ];

  const part2_4_orple = [
    {
      path: "/media/proj2/2.4/apple.jpeg",
      name: "Apple",
    },
    {
      path: "/media/proj2/2.4/orange.jpeg",
      name: "Orange",
    },
    {
      path: "/media/proj2/2.4/orple_recreated.jpeg",
      name: "Orple recreated",
    },
  ];

  const part2_4_sophia = [
    {
      path: "/media/proj2/2.4/sophia_now_resized.jpeg",
      name: "View of the Hagia Sophia (2024)",
    },
    {
      path: "/media/proj2/2.4/sophia_painting_resized.jpg",
      name: "View of the Hagia Sophia in Constantinople by Eduard Hildebrandt (1852)",
    },
  ];

  const part2_4_sophia_blend = [
    {
      path: "/media/proj2/2.4/sophia_raw_blend.jpg",
      name: "Hagia Sophia, raw spline",
    },
    {
      path: "/media/proj2/2.4/sophia_blended.jpeg",
      name: "Hagia Sophia, gaussian spline",
    },
  ];

  const part2_4_sophia_blend_color = [
    {
      path: "/media/proj2/2.4/sophia_blended.jpeg",
      name: "Hagia Sophia, gaussian spline, no color adjustment",
    },
    {
      path: "/media/proj2/2.4/sophia_blended_color.jpeg",
      name: "Hagia Sophia, gaussian spline with color adjustment",
    },
  ];

  const part2_4_pizza = [
    {
      path: "/media/proj2/2.4/pizza.jpeg",
      name: "Pizza",
    },
    {
      path: "/media/proj2/2.4/nan.jpg",
      name: "Nan stand in an Uzbek Bazaar",
    },
    {
      path: "/media/proj2/2.4/pizza_processed.jpg",
      name: "Preprocessed pizza, after roation, recenter, and rescale",
    },
    {
      path: "/media/proj2/2.4/pizza_mask.jpg",
      name: "Binary mask",
    },
  ];

  const part2_4_waves = [
    {
      path: "/media/proj2/2.4/waves.jpg",
      name: "The Great Waves off Kanagawa (1831)",
    },
    {
      path: "/media/proj2/2.4/lightning.jpeg",
      name: "Lightning",
    },
    {
      path: "/media/proj2/2.4/binary_mask.jpeg",
      name: "Nonlinear binary mask generated with KMeans",
    },
    {
      path: "/media/proj2/2.4/smoothed_mask.jpeg",
      name: "Binary mask smoothed with sigma = 10",
    },
    {
      path: "/media/proj2/2.4/waves_blend_reverse.jpeg",
      name: "Blended result: a stormy night at Kanagawa",
    },
    {
      path: "/media/proj2/2.4/waves_blend.jpeg",
      name: "Blended result reserved: lightning waves at Kanagawa",
    },
  ];

  const part2_4_waves_color = [
    {
      path: "/media/proj2/2.4/waves_blend_reverse.jpeg",
      name: "A stormy night at Kanagawa, gaussian spline",
    },
    {
      path: "/media/proj2/2.4/waves_blend_reverse_color_2.jpeg",
      name: "A stormy night at Kanagawa, LAB color transfer",
    },
    {
      path: "/media/proj2/2.4/waves_color_balanced.jpg",
      name: "A stormy night at Kanagawa, with reduced saturation",
    },
  ];

  const gradient_formula = `$$
\\nabla f = \\left[ \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\right]
$$`;

  const gradient_mag_formula = `$$
||\\nabla f|| = \\sqrt{ \\left( \\frac{\\partial f}{\\partial x} \\right)^2 + \\left( \\frac{\\partial f}{\\partial y} \\right)^2 }
$$`;

  const gradient_orientation_formula = `$$
  \\theta(x, y) = \\arctan2\\\left(\\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial x}\\right)
  $$`;

  const linearityFormula = `$$\\mathcal{F}(I_{low} + I_{high}) = \\mathcal{F}(I_{low}) + \\mathcal{F}(I_{high})$$`;
  const logApproxFormula = `$$\\log(|\\mathcal{F}(I_{low} + I_{high})|) \\approx \\log(|\\mathcal{F}(I_{low})| + |\\mathcal{F}(I_{high})|)$$`;
  const hybridImageFormula = `$$I_{hybrid} = I_{low} + I_{high}$$`;

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
        Project 2: Fun with Filters and Frequencies!
      </h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Part 1: Fun with Filters</h2>
        <h3 className="text-lg font-semibold">
          1.1 Convolutions from Scratch!
        </h3>
        <SyntaxHighlighter language="python">{four_loop_cnn}</SyntaxHighlighter>
        <SyntaxHighlighter language="python">{two_loop_cnn}</SyntaxHighlighter>
        <p className="font-semibold">Convolving with a 9 x 9 box filter:</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {part1_1.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={300} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
              {img.runtime && (
                <p className="text-xs text-gray-500">Runtime: {img.runtime}</p>
              )}
            </div>
          ))}
        </div>
        <p>
          The four-loop convolution implementation is incredibly slow, because
          we are looping through each pixle in the numpy array, instead of using
          matrix operations. By using matrix operations with the two-loop
          method, the runtime of the convolution is significantly faster. The
          scipy method is the fastest, since scipy leverages efficient Fourier
          Transfrom algorithms for larger arrays (complexity O(NlogN) instead of
          O(n^2) for direct convolution), and relies on highly optimized
          low-level code for all operations.
        </p>
        <p>
          <strong>Handling boundaries: </strong>When convolving with the 9 x 9
          box filter, I applied zero-padding to all the functions
          above(four-loop, two-loop, and scipy.signal.convolve2d()). This means
          that the function assumes values outside the image are a constant
          value of 0. For example, if we were convolving using the box filter
          with the left most pixel, this function would assume that for the 9 x
          9 kernel, all pixels to the left and top of the leftmost pixel (out of
          the input image boundaries) would have value 0 when convoling. When
          calling scipy.signal.convolve2d(), I used mode = &apos;same&apos;,
          with the default (boundary=&apos;fill&apos;, fillvalue=0). This means
          that the output is cropped/padded so it matches the size of input
          image. Four-loop and two-loop are both implemented with mode =
          &apos;same&apos; as well.
        </p>
        <div className="font-semibold">
          Convolving with derivative filters{" "}
          <Image
            src="/media/proj2/1.1/dxdy.png"
            alt="derivative filters"
            width={300}
            height={200}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {part1_1_derivatives.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          I ran the derivative filters with the four-loop, two-loop, and the
          scipy convolution functions. The results for D_x and D_y are the same
          visually for all the three functions.
        </p>
        <p>
          Notice that the images filtered with the D_x filter exhibit very
          pronounced vertical edges, while those filtered with D_y show clear
          horizontal edges. This is because the filters are essentially
          derivative filters, where D_x computes the difference along the
          horizontal direction (columns), highlighting vertical changes in
          intensity, whereas D_y computes differences along the vertical
          direction (rows), emphasizing horizontal changes.
        </p>
        <h3 className="text-lg font-semibold">
          1.2: Finite Difference Operator
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <Image
              src="/media/proj2/1.2/cameraman.png"
              alt="cameraman"
              width={300}
              height={200}
            />
            <p className="mt-2 text-sm font-medium text-center">
              {"Cameraman, original"}
            </p>
          </div>
          {part1_2_derivatives.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <p>
            The gradient points in the direction of most rapid increase in
            intensity:
          </p>
          <MathBlock formula={gradient_formula} />

          <p>And the edge strength is given by the gradient magnitude:</p>
          <MathBlock formula={gradient_mag_formula} />
        </div>
        <p>
          With this, we can easily derived the gradient magnitude image using
          the two partial derivative images. Below (Fig 1.2.1) is the normalized
          gradient magnitude image. But to turn this into an edge image,
          we&apos;d need to binarize the image. After some experiments and
          quanlitative evaluations on the visual effect, I chose
        </p>
        <MathBlock formula={`$$threshold = 0.65$$`} />
        <p>
          to remove all the noise. This means that I set any pixle value (in a
          [0, 1,0] scale) below 0.65 to 0, and any pixel brighter than the
          threshold to 1. See Fig 1.2.2 for the binarized edge image of the
          cameraman.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {part1_2_gradient.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          We could see from the above image that the resulting convolution with
          finite difference operators are still very noisy. I couldn&apos;t find
          a good threshold to exclude the grassland but included the edges from
          the back of the image.
        </p>
        <h3 className="text-lg font-semibold">
          1.3 Derivative of Gaussian (DoG) Filter
        </h3>
        <MathBlock
          formula={`$$
  \\begin{aligned}
  \\sigma &= 2 \\\\
  kernel\\_size &= 6 * \\sigma + 1 = 13
  \\end{aligned}
  $$`}
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <Image
              src="/media/proj2/1.2/cameraman.png"
              alt="cameraman"
              width={400}
              height={200}
            />
            <p className="mt-2 text-sm font-medium text-center">
              {"Cameraman, original"}
            </p>
          </div>
          {part1_3_derivatives.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>threshold = 0.080 in pixel intensity scale [0.0, 1.0]</p>
        <div className="grid grid-cols-2 gap-4">
          {part1_3_gradient.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          Next, I applied a single convolution, instead of two, by creating a
          derivative of gaussian filters. I first convolved the gaussian
          blurring effect G with D_x and D_y, and then applied G(D_x) and G(D_y)
          to the original image.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {part1_3_2_derivatives.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>

        <p>
          To generate the binarized edge image, I chose a threshold of 0.080 in
          pixel intensity range [0.0, 1.0].
        </p>
        <div className="grid grid-cols-2 gap-4">
          {part1_3_2_gradient.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          With a side-by-side comparison, we could see that the two procedures
          yield the same edge image.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[part1_3_gradient[1], part1_3_2_gradient[1]].map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>

        <p>
          Comparing with the finite differiate operators, the edges in the
          convolutions here are very clear with little noise. The gaussian
          smoothing helped us get rid of the noise, and also helped make the
          edges thicker than Part 1.2 with finite difference operators.
        </p>
        <h3 className="text-lg font-semibold">
          1.4: Bells & Whistles: Visualize image gradient orientations in HSV
        </h3>
        <p>
          To visualize gradient orientation, I first compute the gradient
          orientation using the two partial derivative images produced above,
          following the function:
        </p>
        <MathBlock formula={gradient_orientation_formula} />
        <p>
          This orientation is then mapped to the hue channel in HSV space,
          normalized to [0,1]. The saturation is fixed at 1, while the value
          channel encodes the gradient magnitude (after normalization). Finally,
          the HSV image is converted to RGB for display using
          matplotlib.colors.hsv_to_rgb(). The color means edge direction, and
          intensity represents edge magnitude in this visualization.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <Image
            src="/media/proj2/1.4/orientation_hsv.png"
            alt="gradient orientation in HSV"
            width={400}
            height={200}
          />
        </div>
        {/* <p className="mt-2 text-sm font-medium text-center">{img.name}</p> */}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Part 2: Fun with Frequencies!</h2>
        <h3 className="text-lg font-semibold">2.1 Image Sharpening</h3>
        <MathBlock
          formula={`$$
  \\begin{aligned}
  \\sigma &= 2 \\\\
  kernel\\_size &= 6 * \\sigma + 1 = 13
  \\end{aligned}
  $$`}
        />
        <p>
          To implement the unsharp filter, first I created a 2D gaussian-blurred
          image, with kernel sigma = 6 and ksize = 13. This would serve as the
          &quot;base&quot; image for the unsharpening process.
        </p>
        <p>
          To obtain the high frequency image of the original image, a laplacian
          image is generated, by substracting the gaussian-smoothed image from
          the original image.
        </p>
        <p>
          We stack the two images generated above on top of each other, with a
          sharpening factor alpha applied to the laplacian image, and clip out
          pixel values outside of the range [0.0, 1.0] to get the final
          sharpened image, using the unsharp mask filter.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {part2_1_taj.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          I also experimented with different alpha values, to see which one
          brings the best sharpening effect. Here&apos;s a comparison of alpha =
          1, 3, 5, 10, and we could observe that the edges of the building
          becomes increasingly sharpened as alpha increases. But also, the noise
          becomes more obvious too as alpha goes up, especially in the sky.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {part2_1_taj_comparison.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          I picked the alpha = 5 sharpened image, and re-sharpened it with alpha
          = 5 again. From the comparison below, we could see that the image with
          two round of sharpening has the most defined edges, comparing to alpha
          = 5 (original) or 10. The resharpened image also has a lot more noise
          than any of the other lower alpha levels. This occurs because
          re-sharpening amplifies the higher-frequency components that were
          already enhanced in the first pass.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {part2_1_taj_resharpened.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        {/* taj_unsharp_mask_result_alpha_5_resharpen_alpha_5.jpg */}
        <p>
          I also applied the unsharp mask filter process to sharpen a photo I
          took in the Presidio, San Francisco.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {part2_1_presidio.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          We could see that the above observation on how alpha value impacts the
          intensity of the object edges and the image noise hold true in the
          following comparison.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {part2_1_presidio_comparison.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={400} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <h3 className="text-lg font-semibold">2.2 Hybrid Images</h3>
        <p>
          <span className="font-semibold">
            Test run with Derek and Nutmeg.{" "}
          </span>
          To create visually appealing hybrid images, I started with tuning the
          provided starter code with the provided headshots of Derek and Nutmeg,
          to ensure the best visual effects. I set Derek as the low frequency
          image, and Nutmeg as the high frequency image here, and aligned them
          by their eyes. One would see Nutmeg if seeing the hybrid image up
          close, and Derek from further away.
        </p>
        <div className="grid grid-cols-3 gap-4 items-center">
          {part2_2_cat.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          <span className="font-semibold">A detailed process. </span>
          Here is a detailed process to create a RBG-colored hybrid image, using
          a headshot of my aunt and I as an example.
        </p>
        <p>
          <span className="font-semibold">1. Align two images: </span>
          To start, we pick two points in each images to align the two, using
          rotate, recenter, rescale, and other helpfer functions. In this case,
          I chose to align the two images by our eyes. See below for the aligned
          images generated from the original ones.
        </p>
        <div className="grid grid-cols-2 gap-4 items-center relative">
          {/* Left column */}
          <div className="flex flex-col gap-4 items-center">
            {part2_2_aunt.slice(0, 2).map((img, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <Image src={img.path} alt={img.name} width={200} height={200} />
                <p className="mt-2 text-sm font-medium text-center">
                  {img.name}
                </p>
              </div>
            ))}
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-4 items-center">
            {part2_2_aunt.slice(2, 4).map((img, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <Image src={img.path} alt={img.name} width={170} height={200} />
                <p className="mt-2 text-sm font-medium text-center">
                  {img.name}
                </p>
              </div>
            ))}
          </div>
          {/* Arrow overlay */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="full"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              className="w-12 h-12 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.3153 16.6681C15.9247 17.0587 15.9247 17.6918 16.3153 18.0824C16.7058 18.4729 17.339 18.4729 17.7295 18.0824L22.3951 13.4168C23.1761 12.6357 23.1761 11.3694 22.3951 10.5883L17.7266 5.9199C17.3361 5.52938 16.703 5.52938 16.3124 5.91991C15.9219 6.31043 15.9219 6.9436 16.3124 7.33412L19.9785 11.0002L2 11.0002C1.44772 11.0002 1 11.4479 1 12.0002C1 12.5524 1.44772 13.0002 2 13.0002L19.9832 13.0002L16.3153 16.6681Z"
              />
            </svg>
          </div>
        </div>

        <p>
          <span className="font-semibold">
            2. Create high and low frequncy images:{" "}
          </span>
          After the two images are aligned and rescaled, I start the hybrid
          process. We would need to generate a low and high frequency image for
          the hybrid result. I chose to use my aunt&apos;s headshot as the high
          frequency image, and my own headshot as the lower frequency one. I
          played around with the gaussian blur sigma value and kernal sizes, to
          ensure the best visual effect. For this process, I found that the
          following parameters work the best:
        </p>
        <MathBlock
          formula={`$$
  \\begin{aligned}
  \\sigma_{low} &= 7 \\\\
  kernel\\_size_{low} &= 6 * \\sigma + 1 = 43
  \\end{aligned}
  $$`}
        />
        <MathBlock
          formula={`$$
  \\begin{aligned}
  \\sigma_{high} &= 2 \\\\
  kernel\\_size_{high} &= 6 * \\sigma + 1 = 13
  \\end{aligned}
  $$`}
        />
        <p>
          I notice that as sigma increases, the kernel size also increases, more
          pixels getting averaged in the process, leading to a wider range of
          higher frequencies being captured in the laplacian image. Therefore, I
          deliberately chose a relatively small sigma for the high frequency
          image, to make the high frequency image at just the right cutoff range
          so that visually it is not overshadowing the lower frequency image.
        </p>
        <p>
          Using this, we can then generate the gaussian-smoothed low frequency
          image of myself, and the laplacian image (high frequency) of my aunt.
        </p>
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          {part2_2_aunt.slice(4, 6).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          <span className="font-semibold">3. Stack &apos;em together: </span>
          We could either get the average of the two images, or just simply add
          them. I chose to stack the low and high frequency images by adding.
          Since we are using floats here, I clipped the pixel intensity to [0,
          1] to avoid overflows. Apply some cropping, and there we have it – an
          RGB-colored hybrid image of my aunt and I:
        </p>

        <div className="grid grid-cols-1 justify-items-center gap-4">
          {part2_2_aunt.slice(11, 12).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          <span className="font-semibold">
            Log Fourier Transform analysis:{" "}
          </span>
          Here are the log Fourier transform images of all the images above (in
          grayscale). We could see that the log Fourier transformed for the high
          frequency image has a lot more edges, and the log Fourier transform of
          the hybrid image seems to be the same pattern as the high and low
          frequency&apos;s log Fourier transform added combined. Why is this the
          case?
        </p>
        <p>
          A hybrid image is composed of a low-frequency component
          (Gaussian-blurred) and a high-frequency component (Laplacian),
          combined as:
        </p>
        <MathBlock formula={hybridImageFormula} />

        <p>The Fourier transform is linear, which means:</p>
        <MathBlock formula={linearityFormula} />

        <p>
          When we take the <strong>log-magnitude</strong> of the Fourier
          transform, it often visually looks like the sum of the log spectra of
          the two images:
        </p>
        <MathBlock formula={logApproxFormula} />

        <p>
          This happens because the low-frequency and high-frequency components
          occupy mostly separate regions of the frequency domain:
        </p>
        <ul className="text-center">
          <li>Low-frequency component → center of the frequency plot</li>
          <li>High-frequency component → edges of the frequency plot</li>
        </ul>

        <p>
          Because they rarely interfere, the log-magnitude spectrum
          &quot;stacks&quot; them visually, showing the visual effect below.
        </p>
        <div className="grid grid-cols-2 justify-items-center gap-4">
          {part2_2_aunt.slice(6, 8).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 justify-items-center gap-4">
          {part2_2_aunt.slice(8, 11).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          <strong>More examples: </strong>
          Using the same sigma and ksize parameters, here is another example,
          where I aligned two of the greatest tennis players in history. I set
          Federer to be the low frequency image where one would see more clearly
          afar, and Djokovic as the high frequency image for close inspection.
        </p>
        <div className="grid grid-cols-3 gap-4 items-top">
          {part2_2_tennis.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <h3 className="text-lg font-semibold">2.2: Bells & Whistles</h3>
        <p>
          I only generated the hybrid images with RGB-colors above, and I was
          curious how grayscale hybrid images would look like. Below are two
          comparisons of how color channels affect the hybrid effect, using the
          two sets of images above.
        </p>
        <div className="grid grid-cols-1 gap-4 items-top">
          {part2_2_bw.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.path} width={600} height={500} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          I experimented with different combinations of grayscale and RGB images
          for the low- and high-frequency components. Based on the results,
          using an RGB high-frequency image with a grayscale low-frequency image
          is the least effective hybrid combination. The RGB details in the
          high-frequency component are usually too subtle for the human eye,
          making the hybrid appear almost identical to a fully grayscale
          version. In contrast, using a grayscale high-frequency image with an
          RGB low-frequency image clearly separates the two frequency
          components, producing a more distinct and visually appealing effect
          (in a very subtle way). When the two images have similar color
          palette, it is really hard to differentiate from both images being
          RGB-colored, or high frequency image being grayscale, and low
          frequency image being RGB-colored. So I would say as long as the low
          frequency image is RGB-colored, the hybrid image would usually yield
          good visual result.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Multi-resolution Blending and the Oraple journey
        </h2>
        <p>
          In this section, I would blend two images seamlessly following a multi
          resolution blending as described in the 1983{" "}
          <a
            href="https://persci.mit.edu/pub_pdfs/spline83.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            paper
          </a>{" "}
          by Burt and Adelson. An image spline is a smooth seam joining two
          image together by gently distorting them. Multiresolution blending
          computes a gentle seam between the two images seperately at each band
          of image frequencies, resulting in a much smoother seam.
        </p>
        <h3 className="text-lg font-semibold">
          2.3: Gaussian and Laplacian Stacks
        </h3>
        <p>
          I created a binary mask right at the middle of the image, and then
          smoothed the mask with a gaussian filter sigma = 20.
        </p>
        {part2_3_lap.slice(0, 1).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.path} width={200} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
        <p>
          Using the gaussian and laplacian stack functions I implemented, here
          is a stack of gaussian and laplacian images of the source images, with
          max level = 6. For better output image, I omitted the Gaussian stack
          at level 0 for both images, since they are just the original images.
        </p>
        <div className="flex flex-col items-center">
          <Image
            src="/media/proj2/2.3/stack.png"
            alt="stack"
            width={800}
            height={500}
          />
          <p className="mt-2 text-sm font-medium text-center">
            Gaussian and Laplacian stack of Apple and Orange (max_level = 6)
          </p>
        </div>
        <p>
          Using the smoothed mask and the stacks above, we can recreate the same
          figure as{" "}
          <a
            href="https://www.dropbox.com/s/bzt69u4azxyfpjo/SzeliskiBookDraft_20210828.pdf?dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Figure 3.42 in Szelski (Ed 2) page 167.
          </a>
        </p>
        <div className="grid grid-cols-1 gap-4 items-top">
          {part2_3_lap.slice(1, 2).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.path} width={600} height={500} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold">
          2.4: Multiresolution Blending (a.k.a. the oraple!)
        </h3>
        <p>
          After reviewing the blending mothod described the 1983{" "}
          <a
            href="https://persci.mit.edu/pub_pdfs/spline83.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            paper
          </a>{" "}
          by Burt and Adelson, below are some examples of
          multiresolution-blended images I have created.
        </p>
        <div className="grid grid-cols-3 gap-4 items-top">
          {part2_4_orple.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.path} width={600} height={500} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          <strong>Hagia Sophia </strong>
          Can we use the multiresolution blending method above to blend the
          artistic world with the reality? Below is my attempt to blend the
          Hagia Sophia, the epitome of Byzantine architecture, with a painting
          of it from 1852. A vertical binary gaussian mask is used, smoothed
          with sigma = 20.
        </p>
        <div className="grid grid-cols-2 gap-4 items-top">
          {part2_4_sophia.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.path} width={600} height={500} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 items-top">
          {part2_4_sophia_blend.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.path} width={600} height={500} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>

        <p>
          <strong>Blending pizza with nan </strong>
          Here is another example of the multiresolution blending, with a
          nonlinear binary mask, smoothed with sigma = 20. To achive the best
          effect, I preprocessed the pizza image by aligning it with one of the
          nan bread in the picutre.
        </p>
        <div className="grid grid-cols-2 gap-4 items-center">
          {part2_4_pizza.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.path} width={600} height={500} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/media/proj2/2.4/nan_blend.jpeg"
            alt="Nan pizza blended"
            width={600}
            height={500}
          />
          <p className="mt-2 text-sm font-medium text-center">
            Pizza in a nan stand
          </p>
        </div>

        <p>
          The multirevolution blending works here, but this image is not the
          best example, since the nan bread and the pizza have very similar
          colors on their blending edges. To challenge myself, I found something
          more exciting to blend with a nonlinear binary mask.
        </p>
        <p>
          <strong>A stormy night at Kanagawa</strong>I wondered if I could add
          some weather effect to the Great Waves off Kanagawa (神奈川沖浪裏),
          one of the most famous Japnaese painting to the western world.
        </p>
        <div className="grid grid-cols-2 gap-4 items-center">
          {part2_4_waves.slice(0, 2).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.path} width={600} height={500} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          I used <strong>K-means clustering with 2 clusters</strong> to binarize
          the painting and generate the mask. This mask essentially separates
          the darker colors in the painting from the brighter ones, and I
          assigned the sky to be 1 in the binary mask, so that we could apply
          the lightning effect onto. I used sigma = 10 to smooth the mask.
        </p>
        <div className="grid grid-cols-2 gap-4 items-center">
          {part2_4_waves.slice(2, 4).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.path} width={600} height={500} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          And now we have the blending result, a stormy night on the shores of
          Kanagawa, with high waves and flashes of lightning illuminating the
          sky. To make things more interesting, I have also genreated a reverse
          blending of the lightning waves and clear sky image, using the
          reversed binary mask in the process.
        </p>
        <div className="grid grid-cols-2 gap-4 items-center">
          {part2_4_waves.slice(4, 6).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.path} width={600} height={500} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold">Bells & Whistle</h3>
        <p>
          Thought the blend above looks smooth, the colors of the two source
          images are vastly different that the blending is still very much
          noticable. Can we make the blend more natural?{" "}
        </p>
        <p>
          <strong>Lab color transfer: </strong>To make the two visually
          different images blend more naturally, I applied color transfer from
          the source to the target image. I first converted the two images from
          RGB to the{" "}
          <a
            href="https://en.wikipedia.org/wiki/CIELAB_color_space"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LAB space.
          </a>{" "}
          LAB is a color space defined to express color as three values: L for
          perceptual lightness and a and b for the four unique colors of human
          vision: red, green, blue and yellow. Lab is perceptually uniform,
          meaning changes in its channels correspond more closely to human
          perception of color than RGB.
        </p>
        <p>
          <strong>Adjust color distribution: </strong>I then adjusted the
          target’s colors to match the overall LAB color distribution (mean and
          standard deviation) of the source. By matching the Lab statistics, the
          target image adopts the source’s color palette while preserving its
          original structures, making the blended result visually more coherent.
          See below for the blended result:
        </p>
        <div className="grid grid-cols-2 gap-4 items-top">
          {part2_4_sophia_blend_color.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.path} width={600} height={500} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        <p>
          <strong>Adjusting for over-saturation </strong>For the lightning
          image, the LAB color transfer method is not ideal. We would see the
          lightning past being overly exposed, after the color transfer, runing
          the visual effect of the image. To enhance the visual effect of this
          image, I decided to de-emphasize blue hues by specifically reduce
          their saturations, moving the colors closer to gray and away from the
          dark blue dominated by the lightning image. I converted the blended
          image to HSV color space, scaled down the Saturation (S) channel for
          only blue hues (~200–250 degrees in HSV, i.e., 0.55–0.7 in [0,1]
          normalized hue), and scaled up overall saturation to make the image
          more colorful. See below for the improved effect:
        </p>
        <div className="grid grid-cols-2 gap-4 items-top">
          {part2_4_waves_color.slice(0, 2).map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.path} width={600} height={500} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
        {part2_4_waves_color.slice(2, 3).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.path} width={600} height={500} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

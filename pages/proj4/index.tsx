import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function Proj4() {
  const image_sets = [
    {
      name: "Calibration image set",
      path: "/media/proj4/0.1/calibration_set.png",
    },
    {
      name: "Object scan image set",
      path: "/media/proj4/0.2/object_scan_set.png",
    },
  ];

  const davis_frustums = [
    {
      path: "/media/proj4/0.3/davis_render_1.png",
    },
    {
      path: "/media/proj4/0.3/davis_render_2.png",
    },
    {
      path: "/media/proj4/0.3/davis_render_3.png",
    },
  ];

  const davis_undistorted = [
    {
      name: "Undistorted images, calibrated camera matrix",
      path: "/media/proj4/0.4/undistorted_examples.png",
    },
    {
      name: "Undistorted images, optimal camera matrix",
      path: "/media/proj4/0.4/undistorted_examples_new_K.png",
    },
    {
      name: "Undistorted comparison",
      path: "/media/proj4/0.4/undistorted_comparison.png",
    },
  ];

  const part1_fox = [
    {
      name: "Fox",
      path: "/media/proj4/part1/fox.jpg",
    },
    {
      name: "Training progress, fox",
      path: "/media/proj4/part1/fox_l_10_iter_2k.png",
    },
    {
      name: "Training PSRN curve, fox",
      path: "/media/proj4/part1/fox_psrn_l_10.png",
    },
    {
      name: "Hyperparameter tuning, fox",
      path: "/media/proj4/part1/hyperparameter_tuning.png",
    },
    {
      name: "Hyperparameter tuning PSRN, fox",
      path: "/media/proj4/part1/psrn_hyperparameter_tuning.png",
    },
  ];
  const part1_lake = [
    {
      name: "Lake",
      path: "/media/proj4/part1/lake.jpeg",
    },
    {
      name: "Training progress, lake",
      path: "/media/proj4/part1/lake_l_10_iter_2k.png",
    },
    {
      name: "Training PSRN curve, lake",
      path: "/media/proj4/part1/psrn_lake_l_10.png",
    },
  ];
  const lego_rendering = [
    {
      name: "Lego full render",
      path: "/media/proj4/part2/2.3/lego_full_render.png",
    },
    {
      name: "Single camera ray sampling",
      path: "/media/proj4/part2/2.3/lego_cam_render.png",
    },
    {
      name: "Single camera ray sampling, different angle",
      path: "/media/proj4/part2/2.3/lego_cam_render_2.png",
    },
    {
      name: "Single camera ray sampling 3, different angle",
      path: "/media/proj4/part2/2.3/lego_cam_render_3.png",
    },
  ];

  const mlp_nerf = [
    {
      name: "3D NeRF, architecture",
      path: "/media/proj4/part2/2.5/mlp_nerf.png",
    },
  ];

  const lego_nerf = [
    {
      name: "NeRF, lego",
      path: "/media/proj4/part2/2.5/lego_spherical.gif",
    },
    {
      name: "NeRF Depth, lego",
      path: "/media/proj4/part2/2.5/lego_depth_video_resized.gif",
    },
    {
      name: "Training progress, lego",
      path: "/media/proj4/part2/2.5/training_progress.png",
    },
    {
      name: "Training and validation PSNR, lego",
      path: "/media/proj4/part2/2.5/psnr_lego_training_validation.png",
    },

    // TODO (yingan): add visualization of the rays and samples
  ];

  const lafufu_nerf = [
    {
      name: "NeRF, Lafufu Dataset",
      path: "/media/proj4/part2/2.6/lafufu_orbit_resized.gif",
    },

    // TODO (yingan): add visualization of the rays and samples
  ];

  const davis_nerf = [
    {
      name: "NeRF PSNR for training and validation, Davis Dataset",
      path: "/media/proj4/part2/2.6/training_val_psnr_5000.png",
    },
    {
      name: "NeRF training loss, Davis Dataset",
      path: "/media/proj4/part2/2.6/davis_training_loss_5000.png",
    },
    {
      name: "NeRF training progress visualized, Davis Dataset",
      path: "/media/proj4/part2/2.6/training_progress.png",
    },
  ];

  const davis_gif = [
    {
      name: "NeRF, Davis Dataset",
      path: "/media/proj4/part2/2.6/davis_orbit_resized.gif",
    },
    // TODO (yingan): add visualization of the rays and samples
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
        Project 4: Neural Radiance Field!
      </h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {lego_nerf.slice(0, 2).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={300} height={300} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
        {lafufu_nerf.slice(0, 1).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={300} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
        {davis_gif.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={170} height={200} />
            <p className="mt-2 text-sm font-medium text-center">
              NeRF, my own dataset
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold">
        Part 0: Calibrating Your Camera and Capturing a 3D Scan
      </h2>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 0.1: Calibrating Your Camera
        </h2>
        <p>
          Before building NeRF, we need to collect some image data. I printed
          out the calibration tags and captured 30 images of these tags using my
          phone camera, keeping the zoom the same. I made sure to vary the angle
          and distance of the camera for better results.
        </p>
        {image_sets.slice(0, 1).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={600} height={200} />
          </div>
        ))}
        <p>
          <span className="font-semibold">
            Resizing images from calibration set.{" "}
          </span>
          Due to the large size of rays and points we are sampling to generate
          NeRF, I downsampled all of my calibration and training data by 20
          times. The images for both the calibration and object sets were (5712,
          4284, 3) before resizing, and (285, 214, 3) afterwards. This ensures
          that the we can run above 5k iterations without worrying about waiting
          forever.
        </p>
        <p>
          <span className="font-semibold">Camera matrix. </span>To calibrate the
          camera, I looped through all the calibration images. For each image, I
          use the OpenCV ArUco detector to Extract the corner coordinates
          fromall visible tags. To get the 3D world coordinates of the detected
          corners, I measured the size of each tag and how far they are apart
          from each other, to compute their world coordinates, assuming the top
          left corner of the ID=0 tag is (0, 0, 0) in 3D world. I then pass all
          detected corners and their corresponding 3D world coordinates to
          cv2.calibrateCamera() to compute the camera intrinsics and distortion
          coefficients. Below are the values I got for calibrating my phone
          camera:
        </p>
        <BlockMath
          math={String.raw`
K = 
\begin{bmatrix}
200.49021055 & 0 & 113.70533064 \\
0 & 201.17496811 & 143.61803931 \\
0 & 0 & 1
\end{bmatrix}
`}
        />
        <p>Distortion coefficients:</p>
        <BlockMath
          math={String.raw`
dist = \begin{bmatrix}
3.16298217 \times 10^{-1} & -1.71652185 & 7.55779590 \times 10^{-5} & 9.81547188 \times 10^{-3} & 2.31517962
\end{bmatrix}
`}
        />
        <p>
          Using the calibration above, I got an{" "}
          <span className="font-semibold">RMS reprojection error of 0.25</span>,
          which is reasonable and within the range of errors for NeRF
          construciton. This ensures that we don&apos;t introduce calibration
          errors that may yield bad results in the following steps.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 0.2: Capturing a 3D Object Scan
        </h2>
        <p>
          Then, we need to generate an image set of a 3D object. I picked a
          stuffed animal toy from UC Davis, and placed it next to a single ArUco
          tag I printed out. Both the tag and the item were on a tabletop. I
          captured a total of 53 images from different angles, using the same
          camera and zoom from the previous step. I also made sure to capture
          images at different andles horizontally and vertically for better
          rendering, and capturing images at one uniform distance, to ensure
          better quality of NeRF. Below is the overview of the image dataset.
        </p>
        {image_sets.slice(1, 2).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={600} height={200} />
          </div>
        ))}
        <p>
          Note that though I captured 53 images, not all images were valid for
          NeRF, as the stuffed animal blocked the corner of the tag in some
          images. In such cases, corner detection would fail and my algorithm
          skips these failed images. In all the steps below, I only used images
          with valid corner detection for better quality.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 0.3: Estimating Camera Pose
        </h2>
        <p>
          For each image in my object scan, I detect the ArUco tag and use
          cv2.solvePnP() to estimate the camera pose. Similar to Part 0.1, I
          assume that the origin of the 3D world cooridnates is the top left
          corner of the tag.
        </p>
        <p>
          cv2.solvePnP was able to give us the rotation matrix R (from rvec) and
          translation vector tvec form the camera&apos;s extrinsic matrix, which
          describes where the camera is positioned and oriented relative to the
          ArUco tag&apos;s coordinate system. I then invert this matrix to get
          the camera-to-world (c2w) matrix for visualization and Part 0.4.
        </p>
        <p>
          Using Viser and the camera poses we estimated from above, we could see
          the camera frustums&apos; poses and images to validate the steps so
          far. Below are some screenshots of my image set visualized with Viser.
          They form a nice &quot;dome&quot; structure, as I was taking photos of
          the object from different angles but relatively similar distance.
        </p>
        {davis_frustums.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image
              src={img.path}
              alt="Customized dataset camera poses"
              width={600}
              height={200}
            />
          </div>
        ))}
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 0.4: Undistorting images and creating a dataset
        </h2>
        <p>
          Since NeRF assumes a perfect pinhole camera model without distortion,
          we need to undistort the images we took. I used cv2.undistort() to
          remove any lens distortion from my images, but then I would see black
          boundaries afterwards.{" "}
        </p>
        <p>
          To fix this, we can use cv2.getOptimalNewCameraMatrix() to compute a
          new camera matrix that crops out the invalid pixels. See below for the
          undistortion with and without the optimal new camera matrix, and a
          side-by-side comparison of the two undistorting approaches.
        </p>
        {davis_undistorted.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image
              src={img.path}
              alt="Customized dataset camera poses"
              width={600}
              height={200}
            />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
        <p>
          <span className="font-semibold">
            Optimal camera matrix after undistortion.{" "}
          </span>
          The optimal new camera matrix would be our new camera intrinsics
          matrix from now on. I stored this new K matrix in my dataset file,
          along with an 80-10-10 split of my training, validation, and testing
          data.
        </p>

        <BlockMath
          math={String.raw`
K = 
\begin{bmatrix}
262.761209 & 0 & 106.69744278 \\
0 & 278.85541763 & 140.50906599 \\
0 & 0 & 1
\end{bmatrix}
`}
        />
        <p>
          Though we could reconstruct the matrix K using focal length and image
          shape, the optimal camera matrix I obtained here is slightly different
          from the theoretical reconstructed matrix. For more precise
          construction of NeRF, I decided to store the optimal camera intrinsics
          matrix in the dataset file instead.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 1: Fit a Neural Field to a 2D Image
        </h2>
        <p>
          Before constructing NeRF, we start with NeRF in 2D. Below are the
          hyperparameters I used for my MLP, which takes in a 2D coordinate (x,
          y) and outputs pixel colors in (r, g, b). Before passing the 2D
          coordinates into the nueral network, I applied sinusoidal Positional
          Encoding (PE) to the coordinates to expand its dimensionality. PE can
          expand dimensionality of an 2D input to 2 * (2 * L + 1) dimensions, L
          being a constant value indicating max frequency. To start, I used the
          following hyperparameters to train for the 2D NeRF MLP.
        </p>
        <SyntaxHighlighter language="python">
          {`layer_width = 256 \nL = 10 # max_frequency \nlearning_rate = 1e-2`}{" "}
        </SyntaxHighlighter>

        <SyntaxHighlighter language="python">
          {`model = nn.Sequential(
    # Linear
    nn.Linear(2 * (2 * L + 1), layer_width),
    # ReLU
    nn.ReLU(),
    # Linear
    nn.Linear(layer_width, layer_width),
    # ReLU
    nn.ReLU(),
    # Linear
    nn.Linear(layer_width, layer_width),
    # ReLU
    nn.ReLU(),
    # Linear
    nn.Linear(layer_width, 3),
    # Sigmoid
    nn.Sigmoid()
)`}{" "}
        </SyntaxHighlighter>
        <p>
          The above is the architecutre of my MLP. Using the above parameters,
          with 2k iterations, I was able to get really good output images, with
          PSNR {">"} 26 during the training iterations.
        </p>

        {part1_fox.slice(0, 1).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={200} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}

        {part1_fox.slice(1, 3).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={600} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
        <p>
          To explore the effect of hyperparameters, I set the positional
          encoding (PE) maximum frequency and the MLP layer width to very low
          values. The 2x2 chart below shows their impact on training. With a low
          PE frequency, the model loses coordinate information, resulting in
          distorted output features. With a narrow MLP, fine details are lost,
          while overall structures are maintained, producing lower-resolution
          images with accurate features.
        </p>

        {part1_fox.slice(3, 4).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={600} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}

        <p>
          I have also tested this MLP with a random image of my choice. The
          above is the architecutre of my MLP. Using max frequency = 10, with 2k
          iterations, I was able to get really good traning PSRN value above 23
          here.
        </p>
        {part1_lake.slice(0, 1).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={200} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
        <p>
          NeRF quickly captures the overall structure: after just 100
          iterations, a rough sketch of the lake view is visible. The remaining
          ~1900 iterations are spent refining local details.
        </p>
        {part1_lake.slice(1, 3).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={600} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 2: Fit a Neural Radiance Field from Multi-view Images
        </h2>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 2.1: Create Rays from Cameras
        </h2>
        <p>
          To convert points from camera coordinates to world coordinates, I
          implemented <code>x_w = transform(c2w, x_c)</code>, which applies the
          camera-to-world matrix to homogeneous coordinates. For pixel-to-camera
          conversion, I inverted the standard projection by implementing{" "}
          <code>x_c = pixel_to_camera(K, uv, s)</code>, where{" "}
          <InlineMath math={`K`} /> is the intrinsic matrix and{" "}
          <InlineMath math={`uv`} /> are the pixel coordinates. Finally, for
          each pixel, I compute the ray origin{" "}
          <InlineMath math={`ray_o = c2w[:3,3]`} /> and the normalized direction{" "}
          <InlineMath
            math={`ray_d = \\frac{(x_w - ray_o)}{ ||x_w - ray_o||}`}
          />{" "}
          via <code>pixel_to_ray(K, c2w, uv)</code>.
        </p>
        <p>
          All functions above support batched points for efficiency, and I
          ensured all operations were on cuda for max efficiency.{" "}
        </p>
        <p>See detailed implementation of this section in code.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Part 2.2: Sampling</h2>
        <p>
          Given rays from Part 2.1, I uniformly sample points along each ray
          using <code>t = torch.linspace(near, far, N_samples)</code>. The
          actual 3D points are computed as{" "}
          <code>points = ray_o + t * ray_d`</code>. To avoid overfitting and
          introduce stochasticity during training, I added small perturbations:{" "}
          <code>t = t + (torch.rand_like(t)-0.5) * delta</code>. Rays themselves
          are sampled either globally across all images or from individual
          images, by flattening pixels and using random indices, returning ray
          origins, directions, and corresponding colors.
        </p>
        <p>See detailed implementation of this section in code.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 2.3: Putting the Dataloading All Together
        </h2>
        <p>
          I created a <code>RaysDataset</code> class that encapsulates multiview
          images. I have a <code>sample_rays(N)</code> method to randomly sample
          N rays and returns <code>(ray_o, ray_d, colors)</code>. It internally
          uses the camera-to-world transformation and pixel-to-ray functions to
          convert pixel coordinates to rays.{" "}
        </p>
        <p>
          I also implemented sampling functions to sample points from ray and
          from each camera, for debugging and visualization. i.e.{" "}
          <code>sample_rays_from_camera(cam_idx, N)</code>.
        </p>
        <p>
          I generate points along rays with{" "}
          <code>
            sample_points_along_rays(ray_o, ray_d, n_samples, near, far,
            perturb)
          </code>
          to feed into the NeRF model.
        </p>
        <p>
          Below are the visualization of camera poses and the rays we sample
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          {lego_rendering.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image src={img.path} alt={img.name} width={600} height={200} />
              <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 2.4: Neural Radiance Field + Part 2.5: Volume Rendering
        </h2>
        <p>
          To build NeRF in 3D, I followed the below approach to obtain the
          density value <InlineMath math={`\\sigma`} /> and the 3D RGB value of
          the point sampled on the ray.
        </p>
        <BlockMath
          math={String.raw`
\text{The rendered color along a ray } \mathbf{r}(t) \text{ can be approximated as:} \\
\hat{C}(\mathbf{r}) = \sum_{i=1}^{N} T_i \, \alpha_i \, \mathbf{c}_i
`}
        />
        <p>
          Where: <InlineMath math={`c_i`} /> is the RGB color predicted by the
          network at sample i along the ray, <InlineMath math={`\\alpha_i`} />{" "}
          is the probability of the ray terminating at sample i, and{" "}
          <InlineMath
            math={`T_i = \\prod_{j = 1}^{i - 1} (1 -
          \\alpha_j) `}
          />{" "}
          is the probability of the ray not terminating before sample i.
        </p>
        <p>
          The MLP now processes more information than in Part 1, as it handles
          multiple samples along many rays from multiple cameras. Its
          architecture takes the 3D world coordinates of a sampled point and the
          ray direction as input, and outputs the density sigma and RGB color of
          that point.
        </p>
        {mlp_nerf.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={600} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
        <p>
          With the hyperparameters below, I trained a 3D NeRF on a 200x200
          pixels lego image set, and constructed a novel view of the 3D object,
          with validation PSNR above 23.50.
        </p>

        <SyntaxHighlighter language="python">
          {`# training
num_iters = 1500
batch_size = 10000
N_samples = 64
near, far = 2.0, 6.0
lr=5e-4`}{" "}
        </SyntaxHighlighter>
        {lego_nerf.slice(0, 1).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={300} height={300} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
        {lego_nerf.slice(2, 4).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={600} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}

        <p>
          <span className="font-semibold">
            Bells & Whistles: Construct depth NeRF.{" "}
          </span>
          To get depth from a NeRF model instead of RGB colors, I still followed
          the same steps to sample 3D points along each ray between the near and
          far planes. Then I pass these points and ray directions through the
          trained NeRF to get densities <InlineMath math={`\\sigma`} /> and
          colors, and compute per-sample alpha{" "}
          <InlineMath math={`\\alpha = 1 - e^{-\\sigma \\Delta}`} /> and
          calculate weights along each ray using cumulative transmittance. All
          the steps till here are the same as constructing an RGB NeRF. But to
          compute the depth for each ray, I computed the expected depth for each
          ray as the weighted sum of the sample depths:{" "}
          <InlineMath math={`\\text{depth} = \\sum_i w_i z_i`} />, where{" "}
          <InlineMath math={`z_i`} /> are the distances of the sampled points
          along the ray. Reshape the resulting depth array to match the image
          dimensions for visualization.
        </p>
        {lego_nerf.slice(1, 2).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={300} height={300} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 2.6: Training with your own data
        </h2>
        <p>
          In this section, I first used the Lafufu Dataset to debug and validate
          that my camera poses and estimations from Part 0 is correct. Then, I
          used my own dataset, a stuffed animal toy from UC Davis, to render
          NeRF. I also built a function to construct 360-degree orbit animation
          to visualize NeRF results.
        </p>

        <p>
          <span className="font-semibold">
            Visualize 3D reconstruction: orbit animation.{" "}
          </span>
          To visualize the 3D reconstruction from the NeRF model, I generated
          360-degree orbit animations of the object. I first pick a few
          &quot;good&quot; images from the dataset, and use their
          camera-to-world matrices to construct the orbiting animation.
        </p>
        <p>
          {" "}
          For each selected base camera from the dataset, I computed the vector
          from the object center to the camera and rotated this vector around
          the world Z-axis to simulate a circular camera path around the object.
          At each rotated position, the camera was oriented to look directly at
          the object center, ensuring it remained in view. The network then
          rendered images from these virtual camera poses, which were combined
          into frames in GIFs to show the object from all angles.
        </p>
        <p>
          Out of all the &quot;good&quot; images I picked to generate the gifs,
          I go through the gifs and pick one that has the most coverage of the
          angles to display. The 360-degree orbit animation helps visualize the
          quality of the reconstruction and the geometric relationships from
          different viewpoints are preserved.
        </p>
        <h3 className="font-semibold">Lafufu Dataset</h3>
        <p>
          Below is a quick validation, using Lafufu training data for traning
          the NeRF network after 3000 iterations, and the validation data for
          geneating this video below.
        </p>
        <SyntaxHighlighter language="python">
          {`# Lafufu training
num_iters = 3000
batch_size = 10000
N_samples = 64
near, far = 0.02, 0.5
lr=5e-4`}{" "}
        </SyntaxHighlighter>
        <p>
          For 3k iterations, I was able to reach around 18-20 PSNR using the
          Lafufu dataset. This was a confirmation that my MLP was indeed
          learning and generting pixel values that are on the right track. I was
          then ready to generate my own NeRF.
        </p>
        {lafufu_nerf.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={600} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
        <h3 className="font-semibold">My own dataset</h3>
        <p>
          Below are the analysis for generating NeRF using my own Davis Dataset.
          I picked the same near and far values for my Davis dataset as the
          Lafufu one, because I took the photos for the Davis dataset pretty
          closely to the object, just as how the Lafufu dataset was constructed.
        </p>
        <SyntaxHighlighter language="python">
          {`# My own dataset training
num_iters = 5000
batch_size = 10000
N_samples = 64
near, far = 0.02, 0.5
lr=5e-4`}{" "}
        </SyntaxHighlighter>
        <p>
          For my custom dataset training, I consistently keep{" "}
          <code>N_samples = 64</code> for discretizing each ray. This ensures a
          sufficiently dense sampling along the ray for accurate volume
          rendering while keeping memory usage manageable. At each training
          iteration, I sample <code>batch_size = 10000</code> rays from the
          dataset, which allows the model to see a diverse set of points across
          multiple views and accelerates convergence. Based on my experiments,
          smaller samples of rays or batch size do not yield good result.
        </p>
        {davis_gif.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={400} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
        <p>
          <span className="font-semibold">
            Note for data quality improvement.
          </span>{" "}
          Looking at the GIF above, it&apos;s unfortunate that the object is
          partially outside the image in some frames. If I were to collect the
          data again, I would choose a smaller item and/or put my phone
          horizontally to capture the images. As the above GIF shows, during 3D
          reconstruction, the object sometimes moves out of frame during
          rotation. This shows a key limitation of NeRF reconstruction: the
          model relies heavily on consistent coverage of the object from all
          angles. If parts of the object are not captured in the dataset, the
          network cannot fully reconstruct them, leading to incomplete or
          unstable geometry in certain views. If I framed my camera more
          carefully, the data quality would have been better for reconstruction.
        </p>
        <p>
          Below is the visualization of the training progress, using an
          arbitrary image from the dataset. As mentioned above, the later
          iterations focus on refining local details, while the ealry iterations
          get the rough sketches of the image pretty quickly.
        </p>
        {davis_nerf.slice(2, 3).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={600} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}

        <p>
          I was able to achieve above 23.50 PSNR for the training dataset, and
          above 20 PSNR for the validation set.
        </p>
        {davis_nerf.slice(0, 1).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={400} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
        <p>
          The training loss steadily drops over time as the model learns to
          match the ground-truth pixel colors. Early in training, the loss
          decreases rapidly as NeRF captures the coarse structure of the scene.
          As iterations continue, the curve flattens, reflecting slower but
          steady improvements as the network focuses on refining fine details
          and reducing small color discrepancies.
        </p>

        {davis_nerf.slice(1, 2).map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image src={img.path} alt={img.name} width={400} height={200} />
            <p className="mt-2 text-sm font-medium text-center">{img.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

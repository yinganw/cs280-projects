import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function Proj5() {
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
        Project 5: Fun With Diffusion Models!
      </h1>
      <h2 className="text-xl font-semibold">
        Part A: The Power of Diffusion Models!
      </h2>
      <h2 className="text-xl font-semibold">Part 0: Setup</h2>
      <h2 className="text-xl font-semibold">Part 1: Sampling Loops</h2>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1.1 Implementing the Forward Process
        </h2>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.2 Classical Denoising</h2>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.3 One-Step Denoising</h2>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.4 Iterative Denoising</h2>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.5 Diffusion Model Sampling</h2>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1.6 Classifier-Free Guidance (CFG)
        </h2>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1.7 Image-to-image Translation
        </h2>
        <h2 className="text-xl font-semibold">
          1.7.1 Editing Hand-Drawn and Web Images
        </h2>
        <h2 className="text-xl font-semibold">1.7.2 Inpainting</h2>
        <h2 className="text-xl font-semibold">
          1.7.3 Text-Conditional Image-to-image Translation{" "}
        </h2>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.8 Visual Anagrams</h2>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.9 Hybrid Images</h2>
      </section>
      <h2 className="text-xl font-semibold">Part 2: Bells & Whistles</h2>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">More visual anagrams!</h2>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Design a course logo!</h2>
      </section>

      <h2 className="text-xl font-semibold">
        Part B: Flow Matching from Scratch!
      </h2>
      <h2 className="text-xl font-semibold">
        Part 1: Training a Single-Step Denoising UNet
      </h2>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.1 Implementing the UNet</h2>
        <p>
          The first step in this project is to build a simple one-step denoiser.
          Given a noisy image <InlineMath math={`z`} />, we aim to train a
          denoiser <InlineMath math={`D_{\\theta}`} /> such that it maps{" "}
          <InlineMath math={`z`} /> to a clean image <InlineMath math={`x`} />.
          To do so, we can optimize over an L2 loss:
        </p>
        <BlockMath
          math={String.raw`
L = E_{z,x} || D_{\theta}(z) - x||^2
`}
        />
        <p>To build the denoiser, I followed the architecture below:</p>
        <Image
          src="/media/proj5/2.1/unconditional_arch.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <h2 className="text-xl font-semibold">
          1.2 Using the UNet to Train a Denoiser
        </h2>
        <p>
          To train our denoiser, we need to generate training data pairs of{" "}
          <InlineMath math={`(z, x)`} />, where each <InlineMath math={`x`} />{" "}
          is a clean MNIST digit. For each training batch, we can generate{" "}
          <InlineMath math={`z`} /> from
          <InlineMath math={`x`} /> using the the following noising process:
        </p>
        <BlockMath
          math={String.raw`
x = x + \sigma \epsilon, \text{where } \epsilon \sim N(0, I)
`}
        />
        <p>
          Below is a visualization of the noising process, using{" "}
          <InlineMath math={`\\sigma = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]`} />
        </p>
        <Image
          src="/media/proj5/2.1/noise_process.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <p>
          As we see above, the noisy image <InlineMath math={`z`} /> gets more
          noisy as we increase the sigma value. When{" "}
          <InlineMath math={`\\sigma = 1.0`} />, we get a completely blurry
          image with all pixels randomly generated from a normal distribution
          with mean 0 and variance 1.
        </p>
        <h2 className="text-xl font-semibold">1.2.1 Training</h2>
        <p>
          Now, we will train the model to perform denoising on noisy image{" "}
          <InlineMath math={`z`} /> with <InlineMath math={`\\sigma = 0.5`} />{" "}
          applied to a clean image <InlineMath math={`x`} />.{" "}
        </p>
        <p>
          In this section, I am using the UNet architecture defined in section
          1.1, with an Adam optimizer. Here are the hyperparameters I used for
          this training task:
        </p>
        <SyntaxHighlighter language="python">
          {`batch_size = 256
learning_rate = 1e-4
noise_level = 0.5
hidden_dim = 128
num_epochs = 5`}{" "}
        </SyntaxHighlighter>
        <p>
          To imporve generalization, I only noise the image batches when fetched
          from the dataloader so that in every epoch the network will see new
          noised images due to a random <InlineMath math={`\\epsilon`} />.
        </p>
        <p>
          Below are the results on the test set, with noise level 0.5, after the
          first and the 5-th epoch.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <Image
            src="/media/proj5/2.1/denoise_epoch_1.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
          <Image
            src="/media/proj5/2.1/denoise_epoch_5.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
        </div>
        <p>
          Here are the training loss curve plots for every iterations and epochs
          during the whole training process, with noise level = 0.5. Due to the
          scale, the training loss per iteration is not a smooth curve going
          down, but the training loss per epoch shows that the model indeed
          converges and loss reduces over eopchs.
        </p>
        <Image
          src="/media/proj5/2.1/denoise_train_loss_iter.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <Image
          src="/media/proj5/2.1/denoise_train_loss.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <h2 className="text-xl font-semibold">
          1.2.2 Out-of-Distribution Testing
        </h2>
        <p>
          The above denoiser is trained on <InlineMath math={`\\sigma = 0.5`} />
          . To see how the denoiser performs on different noise levels, we apply
          the denoiser on images with various noise levels,{" "}
          <InlineMath math={`\\sigma = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]`} />
        </p>
        <Image
          src="/media/proj5/2.1/out_of_dist_denoise.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <p>
          We see that the denoiser works generally pretty well for lower noise
          levels, <InlineMath math={`\\sigma = [0.0, 0.2, 0.4, 0.5, 0.6]`} />,
          while the denoised images for{" "}
          <InlineMath math={`\\sigma = [0.8, 1.0]`} /> get blurry with redundant
          white pixels outside of the digit figure. These additional noise were
          not removed during the denoising process, because the denoiser was
          only trained on noise level = 0.5.
        </p>
        <h2 className="text-xl font-semibold">1.2.3 Denoising Pure Noise</h2>
        <p>
          To make denoising a generative task, we would like to be able to
          denoise pure, random Gaussian noise. To get the noisy image, instead
          of starting with a clean image <InlineMath math={`x`} /> to get the
          noisy image <InlineMath math={`z`} />, we would need to start from a
          blank canvas and apply noise to it. So we have{" "}
          <InlineMath math={`z = \\epsilon`} /> where{" "}
          <InlineMath math={`\\epsilon \\sim N(0, I)`} />.
        </p>
        <p>
          Now, we repeat the training process in part 1.2.1 for 5 epochs. Below
          are the results on pure noise after the first and the 5-th epoch.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <Image
            src="/media/proj5/2.1/pure_denoise_epoch_1.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
          <Image
            src="/media/proj5/2.1/pure_denoise_epoch_5.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
        </div>
        <p>
          We see that the generated outputs above appear as blurry and ambiguous
          figures that resemble digits but are not clearly recognizable as any
          specific number. This is because, unlike the standard denoising
          setting where the noisy input{" "}
          <InlineMath math={`z = x + \\epsilon`} /> contains an underlying clean
          image <InlineMath math={`x`} />, pure noise{" "}
          <InlineMath math={`z = \\epsilon`} /> does not contain any recoverable
          signal. As a result, the denoising task becomes ill-posed: there is no
          unique clean image that the model should reconstruct from the input.
        </p>
        <p>
          Under an MSE-based objective, the denoiser learns to predict the
          conditional expectation of the clean image given the noisy input. When
          the input is pure noise, this conditional distribution is highly
          uncertain and spans many possible digits. Consequently, the model
          produces outputs that resemble an average over the training data
          distribution, leading to smooth, low-frequency, and blurry digit-like
          shapes rather than sharp, class-specific structures.
        </p>
        <Image
          src="/media/proj5/2.1/pure_denoise_train_loss_iter.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <p>
          We also observe that the training loss over iterations does not
          consistently decrease. This is because pure noise inputs do not
          correspond to a stable or well-defined target output, making it
          difficult for the model to learn a consistent input–output mapping.
          Without an underlying clean image to guide reconstruction, gradient
          updates become noisy and the optimization process lacks a clear
          direction for convergence.
        </p>

        <p>
          These results above highlight that denoising pure noise alone is
          insufficient to produce a meaningful generative model. We need a
          strong input signal on what the image represents, rather than just a
          normal distribution of noise, to yield convergence and results.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Part 2: Training a Flow Matching Model
        </h2>
        <p>
          We just saw that one-step denoising does not work well for generative
          tasks. Instead, we need to iteratively denoise the image, and we will
          do so with flow matching. Here, we will iteratively denoise an image
          by training a UNet model to predict the flow from our noisy data to
          clean data.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          2.1 Adding Time Conditioning to UNet
        </h2>
        <p>
          I followed the architecture below to enhance the above UNet model, by
          injecting scalar t into it to condition it.
        </p>

        <Image
          src="/media/proj5/2.2/conditional_arch_fm.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <h2 className="text-xl font-semibold">2.2 Training the UNet</h2>
        <p>
          Now, we will train this time-conditioned UNet model{" "}
          <InlineMath math={`u_{\\theta}(x_{t}, t)`} /> to predict the flow at{" "}
          <InlineMath math={`x_t`} /> given a noisy image{" "}
          <InlineMath math={`x_t`} />
          and a timestep <InlineMath math={`t`} />.
        </p>
        <p>
          In this section, I am using the time-conditioned UNet architecture
          defined in section 2.1, with an Adam optimizer and an exponential
          learning rate decay scheduler. Here are the hyperparameters I used for
          this training task:
        </p>
        <SyntaxHighlighter language="python">
          {`batch_size = 256
learning_rate = 1e-2
noise_level = 0.5
hidden_dim = 64
num_epochs = 10

gamma = 0.1 ** (1.0 / num_epochs)
scheduler = torch.optim.lr_scheduler.ExponentialLR(optimizer, gamma=gamma)`}{" "}
        </SyntaxHighlighter>

        <Image
          src="/media/proj5/2.2/algo1_t_only_fm.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <p>
          Following the algorithm above, we get a training loss curve plot for
          the time-conditioned UNet over the whole training process. The model
          quickly converges after a few iterations, as the loss value drops very
          fast.
        </p>
        <Image
          src="/media/proj5/2.2/time_fm_train_loss_iter.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <h2 className="text-xl font-semibold">2.3 Sampling from the UNet</h2>
        <Image
          src="/media/proj5/2.2/algo2_t_only_fm.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <p>
          Following the sampling algorithm described above, we generate samples
          from the time-conditioned UNet after 1, 5, and 10 epochs of training,
          with 40 images sampled at each epoch. As training progresses, the
          quality of the generated samples improves noticeably. In particular,
          samples from later epochs exhibit clearer digit-like structures
          compared to those from earlier epochs.
        </p>
        <Image
          src="/media/proj5/2.2/time_fm_epoch_1.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <Image
          src="/media/proj5/2.2/time_fm_epoch_5.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <Image
          src="/media/proj5/2.2/time_fm_epoch_10.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <p>
          However, even at epoch = 10, the generated digits remain imperfect.
          While some digits are partially recognizable, many samples appear
          blurry or resemble scribbles rather than well-defined numbers. This
          suggests that time-only conditioning provides the model with
          insufficient guidance to fully capture the underlying data
          distribution. Without additional conditioning signals such as class
          labels or a more expressive architecture, the model struggles to
          generate sharp, semantically consistent digit shapes.
        </p>
        <h2 className="text-xl font-semibold">
          2.4 Adding Class-Conditioning to UNet
        </h2>
        <p>
          To make the results better and give us more control for image
          generation, we can also optionally condition our UNet on the class of
          the digit 0-9. I added 2 more FCBlocks to the UNet, as well as a
          one-hot vector <InlineMath math={`c`} /> for class-conditioning.
          Because we still want our UNet to work without it being conditioned on
          the class, I implemented dropout where 10% of the time (
          <InlineMath math={`p_{\\text{uncond}} =0.1`} />) I drop the class
          conditioning vector by setting it to 0.
        </p>
        <h2 className="text-xl font-semibold">2.5 Training the UNet</h2>
        <p>
          Using the same hyperparameters as part 2.2, I trained the
          time-and-class-conditioning UNet with 5 epochs.
        </p>
        <Image
          src="/media/proj5/2.2/algo3_c_fm.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <p>
          Following the algorithm above, we get the training loss curve plot for
          the class-conditioned UNet over the whole training process. The model
          quickly converges after a few iterations, as the loss value drops
          quickly.
        </p>
        <Image
          src="/media/proj5/2.2/class_fm_train_loss_iter.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <h2 className="text-xl font-semibold">2.6 Sampling from the UNet</h2>
        <Image
          src="/media/proj5/2.2/algo4_c_fm.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <p>
          Following the sampling algorithm described above, we generate samples
          from the class-conditioned UNet after 1, 5, and 10 epochs of training,
          with 40 images sampled at each epoch. As training progresses, the
          quality of the generated samples improves noticeably. Even when epoch
          = 5, the quality of the sampling results is already really good, with
          clear, recognizable digits in display.
        </p>
        <Image
          src="/media/proj5/2.2/class_fm_epoch_1.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <Image
          src="/media/proj5/2.2/class_fm_epoch_5.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <Image
          src="/media/proj5/2.2/class_fm_epoch_10.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <h2 className="text-xl font-semibold">
          2.6.1 Getting rid of learning rate scheduler
        </h2>
        <p>
          The exponential learning rate scheduler was doing only one thing:
          gradually reduce the effective step size to stabilize late training.
          To remove it while achieving similar performance, If we remove it, we
          must replace that stabilizing effect in some other way.
        </p>
        <p>
          I decided to use gradient clipping here to replace the exponential
          learning rate scheduler. While exponential decay reduces the step size
          over time, gradient clipping reduces the magnitude of parameter
          updates per step. Both aim to keep the updates stable.
        </p>
        <p>
          With gradient clipping, I set the learning rate to be{" "}
          <code>1e-3</code>, slightly smaller than the original{" "}
          <code>1e-2</code> when using exponential learning rate scheduler.
          Below is the training loss curve plot for the class-conditioned UNet +
          gradient clipping, over the whole training process.
        </p>
        <SyntaxHighlighter language="python">
          {`batch_size = 256
learning_rate = 1e-3
noise_level = 0.5
hidden_dim = 64
num_epochs = 50
`}{" "}
        </SyntaxHighlighter>
        <Image
          src="/media/proj5/2.2/class_fm_train_loss_iter_gradient_clipping.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <p>
          Here are the results from the gradient clipping method, for 1, 5, and
          10 epochs. The quality of the results are pretty good and stable for
          epoch 5 and 10, similar to the above approach with exponential LR
          scheduler.
        </p>
        <Image
          src="/media/proj5/2.2/class_fm_grad_clip_epoch_1.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <Image
          src="/media/proj5/2.2/class_fm_grad_clip_epoch_5.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <Image
          src="/media/proj5/2.2/class_fm_grad_clip_epoch_10.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <p>
          To compare the exponential LR scheduler method with the gradient
          clipping approach in this section, I compared the iteration and epoch
          traning loss of both methods and plotted them in the charts below.
          With a static, slightly smaller learning rate and gradient clipping,
          we achive slightly better results over 10 epochs of training,
          comparing to the scheduler approach.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <Image
            src="/media/proj5/2.2/class_fm_train_loss_iter_compare.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
          <Image
            src="/media/proj5/2.2/class_fm_train_loss_epoch_compare.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
        </div>
      </section>
      <h2 className="text-xl font-semibold">Part 3: Bells & Whistles</h2>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          A better time-conditioned only UNet
        </h2>
        <p>
          The time-conditioning only UNet in part 2.3 is actually far from
          perfect. Its result is way worse than the UNet conditioned by both
          time and class. To make the time-conditioning only UNet better, an
          naive approach I took was to increase the training epochs from 10 to
          50.
        </p>

        <SyntaxHighlighter language="python">
          {`batch_size = 256
learning_rate = 1e-2
noise_level = 0.5
hidden_dim = 64
num_epochs = 50

gamma = 0.1 ** (1.0 / num_epochs)
scheduler = torch.optim.lr_scheduler.ExponentialLR(optimizer, gamma=gamma)
`}{" "}
        </SyntaxHighlighter>
        <p>Below are the sample results visualized from every 10 epochs:</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <Image
            src="/media/proj5/2b&w/time_fm_epoch_1.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
          <Image
            src="/media/proj5/2b&w/time_fm_epoch_10.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />

          <Image
            src="/media/proj5/2b&w/time_fm_epoch_20.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
          <Image
            src="/media/proj5/2b&w/time_fm_epoch_30.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
          <Image
            src="/media/proj5/2b&w/time_fm_epoch_40.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
          <Image
            src="/media/proj5/2b&w/time_fm_epoch_50.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
        </div>
        <p>
          As shown in the visualization, samples generated at the final epoch
          (epoch = 50) are noticeably clearer and of higher quality compared to
          those generated at epoch = 10. In particular, the number of
          scribble-like artifacts is reduced, and the digit structures become
          more distinct and recognizable. This indicates that extending the
          training schedule allows the time-conditioned UNet to better learn the
          denoising dynamics over time.
        </p>
        <Image
          src="/media/proj5/2.2/time_fm_epoch_10.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <Image
          src="/media/proj5/2b&w/time_fm_epoch_50.png"
          alt="unconditional arch"
          width={800}
          height={200}
        />
        <p>
          Here are the training loss curves for training epoch = 50. Comparing
          to the loss curves for training epoch = 10, we see that the
          time-conditioning UNet model yields to lower loss values with a larger
          training epoch.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
          <Image
            src="/media/proj5/2b&w/time_fm_train_loss_iter_epoch_50.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
          <Image
            src="/media/proj5/2b&w/time_fm_train_loss_epoch_50.png"
            alt="unconditional arch"
            width={400}
            height={200}
          />
        </div>
      </section>
    </main>
  );
}

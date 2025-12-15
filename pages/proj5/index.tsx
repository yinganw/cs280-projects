import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import React from "react";

export default function Proj5() {
  const setup_imgs = [
    {
      caption: "A 2D cartoon character.",
      stage_1_path: "/media/proj5/part0/stage1_image_0.png",
      stage_2_path: "/media/proj5/part0/stage2_image_0.png",
    },
    {
      caption:
        "2D animated, warm and inviting cartoon character in soft pastel colors, flat-vector style. Ethnically neutral, gender-neutral, wearing casual outdoorsy clothes with a backpack. One hand raised in a friendly wave, light gentle smile, relaxed and welcoming posture. Green hoodie, dark blue pants, brown boots, yellow backpack. Eyes looking forward naturally. clean smooth lines, minimal brush strokes, subtle shading, harmonious warm tones, cozy and playful feel, crisp edges, polished and simple, transparent background, full body, centered, game-ready style for animation sprites.",
      stage_1_path: "/media/proj5/part0/stage1_image_1.png",
      stage_2_path: "/media/proj5/part0/stage2_image_1.png",
    },
    {
      caption:
        "High-detail 3D sci-fi drone rendered in sleek hard-surface style. Metallic cool-tone palette (steel, gunmetal, silver) with subtle emissive blue accents. Compact spherical body with symmetrical quad rotors, glowing energy core at the center. Sharp, precise edges and reflective surfaces. Industrial-futuristic aesthetic inspired by AAA game concept art. Dynamic but stable hover pose. Soft studio lighting, crisp shadows, photorealistic reflections. No background (transparent), clean polished finish, centered, full object, production-ready for robotics concept visualization.",
      stage_1_path: "/media/proj5/part0/stage1_image_2.png",
      stage_2_path: "/media/proj5/part0/stage2_image_2.png",
    },
  ];
  const setup_imgs_step_5 = [
    {
      caption: "A 2D cartoon character.",
      stage_1_path: "/media/proj5/part0/stage1_image_0_step_5.png",
      stage_2_path: "/media/proj5/part0/stage2_image_0_step_5.png",
    },
    {
      caption:
        "2D animated, warm and inviting cartoon character in soft pastel colors, flat-vector style. Ethnically neutral, gender-neutral, wearing casual outdoorsy clothes with a backpack. One hand raised in a friendly wave, light gentle smile, relaxed and welcoming posture. Green hoodie, dark blue pants, brown boots, yellow backpack. Eyes looking forward naturally. clean smooth lines, minimal brush strokes, subtle shading, harmonious warm tones, cozy and playful feel, crisp edges, polished and simple, transparent background, full body, centered, game-ready style for animation sprites.",
      stage_1_path: "/media/proj5/part0/stage1_image_1_step_5.png",
      stage_2_path: "/media/proj5/part0/stage2_image_1_step_5.png",
    },
    {
      caption:
        "High-detail 3D sci-fi drone rendered in sleek hard-surface style. Metallic cool-tone palette (steel, gunmetal, silver) with subtle emissive blue accents. Compact spherical body with symmetrical quad rotors, glowing energy core at the center. Sharp, precise edges and reflective surfaces. Industrial-futuristic aesthetic inspired by AAA game concept art. Dynamic but stable hover pose. Soft studio lighting, crisp shadows, photorealistic reflections. No background (transparent), clean polished finish, centered, full object, production-ready for robotics concept visualization.",
      stage_1_path: "/media/proj5/part0/stage1_image_2_step_5.png",
      stage_2_path: "/media/proj5/part0/stage2_image_2_step_5.png",
    },
  ];

  const setup_imgs_step_100 = [
    {
      caption: "A 2D cartoon character.",
      stage_1_path: "/media/proj5/part0/stage1_image_0_step_100.png",
      stage_2_path: "/media/proj5/part0/stage2_image_0_step_100.png",
    },
    {
      caption:
        "2D animated, warm and inviting cartoon character in soft pastel colors, flat-vector style. Ethnically neutral, gender-neutral, wearing casual outdoorsy clothes with a backpack. One hand raised in a friendly wave, light gentle smile, relaxed and welcoming posture. Green hoodie, dark blue pants, brown boots, yellow backpack. Eyes looking forward naturally. clean smooth lines, minimal brush strokes, subtle shading, harmonious warm tones, cozy and playful feel, crisp edges, polished and simple, transparent background, full body, centered, game-ready style for animation sprites.",
      stage_1_path: "/media/proj5/part0/stage1_image_1_step_100.png",
      stage_2_path: "/media/proj5/part0/stage2_image_1_step_100.png",
    },
    {
      caption:
        "High-detail 3D sci-fi drone rendered in sleek hard-surface style. Metallic cool-tone palette (steel, gunmetal, silver) with subtle emissive blue accents. Compact spherical body with symmetrical quad rotors, glowing energy core at the center. Sharp, precise edges and reflective surfaces. Industrial-futuristic aesthetic inspired by AAA game concept art. Dynamic but stable hover pose. Soft studio lighting, crisp shadows, photorealistic reflections. No background (transparent), clean polished finish, centered, full object, production-ready for robotics concept visualization.",
      stage_1_path: "/media/proj5/part0/stage1_image_2_step_100.png",
      stage_2_path: "/media/proj5/part0/stage2_image_2_step_100.png",
    },
  ];

  const forward_imgs = [
    {
      name: "Berkeley Campanile",
      path: "/media/proj5/1.1-3/campanile_resized.png",
    },
    {
      name: "Noisy Campanile at t=250",
      path: "/media/proj5/1.1-3/campanile_noise_250.png",
    },
    {
      name: "Noisy Campanile at t=500",
      path: "/media/proj5/1.1-3/campanile_noise_500.png",
    },
    {
      name: "Noisy Campanile at t=750",
      path: "/media/proj5/1.1-3/campanile_noise_750.png",
    },
  ];

  const denoised_forward_imgs = [
    {
      name: "Gaussian Blur Denoising at t=250",
      path: "/media/proj5/1.1-3/campanile_denoise_250.png",
    },
    {
      name: "Gaussian Blur Denoising at t=500",
      path: "/media/proj5/1.1-3/campanile_denoise_500.png",
    },
    {
      name: "Gaussian Blur Denoising at t=750",
      path: "/media/proj5/1.1-3/campanile_denoise_750.png",
    },
  ];

  const one_step_denoised_forward_imgs = [
    {
      name: "One-Step Denoised Campanile at t=250",
      path: "/media/proj5/1.1-3/campanile_one_step_denoise_250.png",
    },
    {
      name: "One-Step Denoised Campanile at t=500",
      path: "/media/proj5/1.1-3/campanile_one_step_denoise_500.png",
    },
    {
      name: "One-Step Denoised Campanile at t=750",
      path: "/media/proj5/1.1-3/campanile_one_step_denoise_750.png",
    },
  ];

  const iterative_denoised_imgs = [
    {
      name: "Noisy Campanile at t=90",
      path: "/media/proj5/1.4/noisy_campanile_t_90.png",
    },
    {
      name: "Noisy Campanile at t=240",
      path: "/media/proj5/1.4/noisy_campanile_t_240.png",
    },
    {
      name: "Noisy Campanile at t=390",
      path: "/media/proj5/1.4/noisy_campanile_t_390.png",
    },
    {
      name: "Noisy Campanile at t=540",
      path: "/media/proj5/1.4/noisy_campanile_t_540.png",
    },
    {
      name: "Noisy Campanile at t=690",
      path: "/media/proj5/1.4/noisy_campanile_t_690.png",
    },
    {
      name: "Original",
      path: "/media/proj5/1.4/campanile_original.png",
    },
    {
      name: "Iteratively Denoised Campanile",
      path: "/media/proj5/1.4/campanile_clean.png",
    },
    {
      name: "One-Step Denoised Campanile",
      path: "/media/proj5/1.4/campanile_one_step_clean.png",
    },
    {
      name: "Gaussian Blurred Campanile",
      path: "/media/proj5/1.4/campanile_blurred_clean.png",
    },
  ];

  const diffusion_sampling_imgs = [
    {
      name: "Sample 1",
      path: "/media/proj5/1.5/random_im_1.png",
    },
    {
      name: "Sample 2",
      path: "/media/proj5/1.5/random_im_2.png",
    },
    {
      name: "Sample 3",
      path: "/media/proj5/1.5/random_im_3.png",
    },
    {
      name: "Sample 4",
      path: "/media/proj5/1.5/random_im_4.png",
    },
    {
      name: "Sample 5",
      path: "/media/proj5/1.5/random_im_5.png",
    },
  ];

  const cfg_sampling_imgs = [
    {
      name: "Sample 1 with CFG",
      path: "/media/proj5/1.6/cfg_random_im_1.png",
    },
    {
      name: "Sample 2 with CFG",
      path: "/media/proj5/1.6/cfg_random_im_2.png",
    },
    {
      name: "Sample 3 with CFG",
      path: "/media/proj5/1.6/cfg_random_im_3.png",
    },
    {
      name: "Sample 4 with CFG",
      path: "/media/proj5/1.6/cfg_random_im_4.png",
    },
    {
      name: "Sample 5 with CFG",
      path: "/media/proj5/1.6/cfg_random_im_5.png",
    },
  ];

  const sd_edit_campnile_imgs = [
    {
      name: "SDEdit with i_start=1",
      path: "/media/proj5/1.7/campanile_sdedit_1.png",
    },
    {
      name: "SDEdit with i_start=3",
      path: "/media/proj5/1.7/campanile_sdedit_3.png",
    },
    {
      name: "SDEdit with i_start=5",
      path: "/media/proj5/1.7/campanile_sdedit_5.png",
    },
    {
      name: "SDEdit with i_start=7",
      path: "/media/proj5/1.7/campanile_sdedit_7.png",
    },
    {
      name: "SDEdit with i_start=10",
      path: "/media/proj5/1.7/campanile_sdedit_10.png",
    },
    {
      name: "SDEdit with i_start=20",
      path: "/media/proj5/1.7/campanile_sdedit_20.png",
    },
  ];

  const sd_edit_cake_imgs = [
    {
      name: "Original",
      path: "/media/proj5/1.7/cake/cake.png",
    },
    {
      name: "SDEdit with i_start=1",
      path: "/media/proj5/1.7/cake/cake_sdedit_1.png",
    },
    {
      name: "SDEdit with i_start=3",
      path: "/media/proj5/1.7/cake/cake_sdedit_3.png",
    },
    {
      name: "SDEdit with i_start=5",
      path: "/media/proj5/1.7/cake/cake_sdedit_5.png",
    },
    {
      name: "SDEdit with i_start=7",
      path: "/media/proj5/1.7/cake/cake_sdedit_7.png",
    },
    {
      name: "SDEdit with i_start=10",
      path: "/media/proj5/1.7/cake/cake_sdedit_10.png",
    },
    {
      name: "SDEdit with i_start=20",
      path: "/media/proj5/1.7/cake/cake_sdedit_20.png",
    },
  ];

  const sd_edit_cocktail_imgs = [
    {
      name: "Original",
      path: "/media/proj5/1.7/cocktail/cocktail.png",
    },
    {
      name: "SDEdit with i_start=1",
      path: "/media/proj5/1.7/cocktail/cocktail_sdedit_1.png",
    },
    {
      name: "SDEdit with i_start=3",
      path: "/media/proj5/1.7/cocktail/cocktail_sdedit_3.png",
    },
    {
      name: "SDEdit with i_start=5",
      path: "/media/proj5/1.7/cocktail/cocktail_sdedit_5.png",
    },
    {
      name: "SDEdit with i_start=7",
      path: "/media/proj5/1.7/cocktail/cocktail_sdedit_7.png",
    },
    {
      name: "SDEdit with i_start=10",
      path: "/media/proj5/1.7/cocktail/cocktail_sdedit_10.png",
    },
    {
      name: "SDEdit with i_start=20",
      path: "/media/proj5/1.7/cocktail/cocktail_sdedit_20.png",
    },
  ];

  const sd_edit_leaf_imgs = [
    {
      name: "Hand drawn leaf",
      path: "/media/proj5/1.7/leaf_drawn/leaf_hand_drawn.png",
    },
    {
      name: "SDEdit with i_start=1",
      path: "/media/proj5/1.7/leaf_drawn/leaf_sdedit_1.png",
    },
    {
      name: "SDEdit with i_start=3",
      path: "/media/proj5/1.7/leaf_drawn/leaf_sdedit_3.png",
    },
    {
      name: "SDEdit with i_start=5",
      path: "/media/proj5/1.7/leaf_drawn/leaf_sdedit_5.png",
    },
    {
      name: "SDEdit with i_start=7",
      path: "/media/proj5/1.7/leaf_drawn/leaf_sdedit_7.png",
    },
    {
      name: "SDEdit with i_start=10",
      path: "/media/proj5/1.7/leaf_drawn/leaf_sdedit_10.png",
    },
    {
      name: "SDEdit with i_start=20",
      path: "/media/proj5/1.7/leaf_drawn/leaf_sdedit_20.png",
    },
  ];

  const sd_edit_santa_imgs = [
    {
      name: "Hand drawn santa",
      path: "/media/proj5/1.7/santa_drawn/santa_hand_drawn.png",
    },
    {
      name: "SDEdit with i_start=1",
      path: "/media/proj5/1.7/santa_drawn/santa_sdedit_1.png",
    },
    {
      name: "SDEdit with i_start=3",
      path: "/media/proj5/1.7/santa_drawn/santa_sdedit_3.png",
    },
    {
      name: "SDEdit with i_start=5",
      path: "/media/proj5/1.7/santa_drawn/santa_sdedit_5.png",
    },
    {
      name: "SDEdit with i_start=7",
      path: "/media/proj5/1.7/santa_drawn/santa_sdedit_7.png",
    },
    {
      name: "SDEdit with i_start=10",
      path: "/media/proj5/1.7/santa_drawn/santa_sdedit_10.png",
    },
    {
      name: "SDEdit with i_start=20",
      path: "/media/proj5/1.7/santa_drawn/santa_sdedit_20.png",
    },
  ];

  const sd_edit_tree_imgs = [
    {
      name: "Web image: tree house",
      path: "/media/proj5/1.7/treehouse/tree_house.jpeg",
    },
    {
      name: "SDEdit with i_start=1",
      path: "/media/proj5/1.7/treehouse/tree_house_sdedit_1.png",
    },
    {
      name: "SDEdit with i_start=3",
      path: "/media/proj5/1.7/treehouse/tree_house_sdedit_3.png",
    },
    {
      name: "SDEdit with i_start=5",
      path: "/media/proj5/1.7/treehouse/tree_house_sdedit_5.png",
    },
    {
      name: "SDEdit with i_start=7",
      path: "/media/proj5/1.7/treehouse/tree_house_sdedit_7.png",
    },
    {
      name: "SDEdit with i_start=10",
      path: "/media/proj5/1.7/treehouse/tree_house_sdedit_10.png",
    },
    {
      name: "SDEdit with i_start=20",
      path: "/media/proj5/1.7/treehouse/tree_house_sdedit_20.png",
    },
  ];

  const inpaint_campanile = [
    {
      name: "Original",
      path: "/media/proj5/1.4/campanile_original.png",
    },
    {
      name: "Mask",
      path: "/media/proj5/1.7.2/1.7.2_mask.png",
    },
    {
      name: "Hole to Fill",
      path: "/media/proj5/1.7.2/1.7.2_to_replace.png",
    },
    {
      name: "Campanile Inpainted",
      path: "/media/proj5/1.7.2/campanile_inpaint.png",
    },
  ];

  const inpaint_cake = [
    {
      name: "Original",
      path: "/media/proj5/1.7.2/resized_cake.png",
    },
    {
      name: "Mask",
      path: "/media/proj5/1.7.2/cake_mask.png",
    },
    {
      name: "Hole to Fill",
      path: "/media/proj5/1.7.2/cake_to_replace.png",
    },
    {
      name: "Campanile Inpainted",
      path: "/media/proj5/1.7.2/cake_inpaint.png",
    },
  ];

  const inpaint_cocktail = [
    {
      name: "Original",
      path: "/media/proj5/1.7.2/resized_cocktail.png",
    },
    {
      name: "Mask",
      path: "/media/proj5/1.7.2/cocktail_mask.png",
    },
    {
      name: "Hole to Fill",
      path: "/media/proj5/1.7.2/cocktail_to_replace.png",
    },
    {
      name: "Campanile Inpainted",
      path: "/media/proj5/1.7.2/cocktail_inpaint.png",
    },
  ];

  const campanile_characters = [
    {
      name: "2D character at noise level 1",
      path: "/media/proj5/1.7.3/campanile_character/character_sdedit_1.png",
    },
    {
      name: "2D character at noise level 3",
      path: "/media/proj5/1.7.3/campanile_character/character_sdedit_3.png",
    },
    {
      name: "2D character at noise level 5",
      path: "/media/proj5/1.7.3/campanile_character/character_sdedit_5.png",
    },
    {
      name: "2D character at noise level 7",
      path: "/media/proj5/1.7.3/campanile_character/character_sdedit_7.png",
    },
    {
      name: "2D character at noise level 10",
      path: "/media/proj5/1.7.3/campanile_character/character_sdedit_10.png",
    },
    {
      name: "2D character at noise level 20",
      path: "/media/proj5/1.7.3/campanile_character/character_sdedit_20.png",
    },
  ];

  const cake_characters = [
    {
      name: "2D character at noise level 1",
      path: "/media/proj5/1.7.3/cake_character/character_cocktail_sdedit_1.png",
    },
    {
      name: "2D character at noise level 3",
      path: "/media/proj5/1.7.3/cake_character/character_cocktail_sdedit_3.png",
    },
    {
      name: "2D character at noise level 5",
      path: "/media/proj5/1.7.3/cake_character/character_cocktail_sdedit_5.png",
    },
    {
      name: "2D character at noise level 7",
      path: "/media/proj5/1.7.3/cake_character/character_cocktail_sdedit_7.png",
    },
    {
      name: "2D character at noise level 10",
      path: "/media/proj5/1.7.3/cake_character/character_cocktail_sdedit_10.png",
    },
    {
      name: "2D character at noise level 20",
      path: "/media/proj5/1.7.3/cake_character/character_cocktail_sdedit_20.png",
    },
  ];
  const cocktail_drones = [
    {
      name: "Drone at noise level 1",
      path: "/media/proj5/1.7.3/cocktail_drone/drone_cake_sdedit_1.png",
    },
    {
      name: "Drone at noise level 3",
      path: "/media/proj5/1.7.3/cocktail_drone/drone_cake_sdedit_3.png",
    },
    {
      name: "Drone at noise level 5",
      path: "/media/proj5/1.7.3/cocktail_drone/drone_cake_sdedit_5.png",
    },
    {
      name: "Drone at noise level 7",
      path: "/media/proj5/1.7.3/cocktail_drone/drone_cake_sdedit_7.png",
    },
    {
      name: "Drone at noise level 10",
      path: "/media/proj5/1.7.3/cocktail_drone/drone_cake_sdedit_10.png",
    },
    {
      name: "Drone at noise level 20",
      path: "/media/proj5/1.7.3/cocktail_drone/drone_cake_sdedit_20.png",
    },
  ];

  const anagram_old_man = [
    {
      name: "An Oil Painting of an Old Man",
      path: "/media/proj5/1.8/old_man.png",
    },
    {
      name: "An Oil Painting of People around a Campfire",
      path: "/media/proj5/1.8/old_man_flipped.png",
    },
  ];

  const anagram_queen = [
    {
      name: "A portrait of a queen",
      path: "/media/proj5/1.8/queen.png",
    },
    {
      name: "A painting of a christmas tree",
      path: "/media/proj5/1.8/christmas_tree.png",
    },
  ];

  const hybrid_imgs = [
    {
      name: "Hybrid image of a house plant and the statue of liberty",
      path: "/media/proj5/1.9/plant_statue.png",
      prompt1: "a watercolor painting of the statue of liberty",
      prompt2: "a watercolor painting of a house plant",
    },
    {
      name: "Hybrid image of a polar bear and a dining table",
      path: "/media/proj5/1.9/bear_table.png",
      prompt1: "an oil painting of a polar bear",
      prompt2: "a oil painting of a dining table",
    },
  ];

  const negative_anagrams = [
    {
      name: "a lithograph of a teddy bear",
      path: "/media/proj5/1b&w/negative/bear.png",
    },
    {
      name: "a lithograph of a rabbit",
      path: "/media/proj5/1b&w/negative/rabbit.png",
    },
  ];

  const skewed_anagrams = [
    {
      name: "a watercolor painting of the statue of liberty",
      path: "/media/proj5/1b&w/skewed/statue.png",
    },
    {
      name: "a watercolor painting of a house plant",
      path: "/media/proj5/1b&w/skewed/plant.png",
    },
  ];

  const course_logo = [
    {
      name: "Oski",
      path: "/media/proj5/1b&w/logo/oski.png",
    },
    {
      name: "SDEdit with i_start=1",
      path: "/media/proj5/1b&w/logo/logo_1.png",
    },
    {
      name: "SDEdit with i_start=3",
      path: "/media/proj5/1b&w/logo/logo_3.png",
    },
    {
      name: "SDEdit with i_start=5",
      path: "/media/proj5/1b&w/logo/logo_5.png",
    },
    {
      name: "SDEdit with i_start=7",
      path: "/media/proj5/1b&w/logo/logo_7.png",
    },
    {
      name: "SDEdit with i_start=10",
      path: "/media/proj5/1b&w/logo/logo_10.png",
    },
    {
      name: "SDEdit with i_start=20",
      path: "/media/proj5/1b&w/logo/logo_20.png",
    },
    {
      name: "Best course logo (SDEdit = 10)",
      path: "/media/proj5/1b&w/logo/logo_10_256.png",
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
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Part 0: Setup</h2>
        <p>
          I decided to come up with three pairs (six in total) of prompts, each
          describing one object. Within each pair, I use one short prompt that
          is very concise, and one longer prompt that goes into details on the
          object. Below are the prompts I used:
        </p>
        <SyntaxHighlighter language="text">
          {`A cat riding a motorcycle.

Dreamlike surrealist painting style. A cat with translucent pastel tentacles and riding a motorcycle. Blended gradients, ethereal glow, painterly brush textures. Transparent background, centered.

A 2D cartoon character.

2D animated, warm and inviting cartoon character in soft pastel colors, flat-vector style. Ethnically neutral, gender-neutral, wearing casual outdoorsy clothes with a backpack. One hand raised in a friendly wave, light gentle smile, relaxed and welcoming posture. Green hoodie, dark blue pants, brown boots, yellow backpack. Eyes looking forward naturally. Clean smooth lines, minimal brush strokes, subtle shading, harmonious warm tones, cozy and playful feel, crisp edges, polished and simple, transparent background, full body, centered, game-ready style for animation sprites.

A sci-fi drone.

High-detail 3D sci-fi drone rendered in sleek hard-surface style. Metallic cool-tone palette (steel, gunmetal, silver) with subtle emissive blue accents. Compact spherical body with symmetrical quad rotors, glowing energy core at the center. Sharp, precise edges and reflective surfaces. Industrial-futuristic aesthetic inspired by AAA game concept art. Dynamic but stable hover pose. Soft studio lighting, crisp shadows, photorealistic reflections. No background (transparent), clean polished finish, centered, full object, production-ready for robotics concept visualization.
`}{" "}
        </SyntaxHighlighter>
        <p>
          With seed = 100 and num_inference_steps = 20, I picked three prompts
          and generated images using the DeepFloyd model.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {setup_imgs.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.stage_1_path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                stage 1: {img.caption}
              </p>
              <div
                className="absolute bottom-full mb-2 hidden group-hover:block
                     max-w-xs p-2 text-sm text-white bg-black/80
                     rounded-md shadow-lg"
              >
                {img.caption}
              </div>
            </div>
          ))}
          {setup_imgs.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.stage_2_path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                stage 2: {img.caption}
              </p>
              <div
                className="absolute bottom-full mb-2 hidden group-hover:block
                     max-w-xs p-2 text-sm text-white bg-black/80
                     rounded-md shadow-lg"
              >
                {img.caption}
              </div>
            </div>
          ))}
        </div>
        <p>
          The examples above were generated with{" "}
          <code>num_inference_steps = 20</code>. I also experimented with{" "}
          <code>num_inference_steps = 5</code> and <code>100</code>. Below are
          the results for <code>num_inference_steps = 5</code>. Compared to{" "}
          <code>num_inference_steps = 20</code>, the generated images appear
          rougher and less refined. While they still follow the prompts, the
          backgrounds exhibit more noise and artifacts, indicating that fewer
          inference steps reduce the quality of the final output.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {setup_imgs_step_5.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.stage_1_path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                stage 1: {img.caption}
              </p>
              <div
                className="absolute bottom-full mb-2 hidden group-hover:block
                     max-w-xs p-2 text-sm text-white bg-black/80
                     rounded-md shadow-lg"
              >
                {img.caption}
              </div>
            </div>
          ))}
          {setup_imgs_step_5.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.stage_2_path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                stage 2: {img.caption}
              </p>
              <div
                className="absolute bottom-full mb-2 hidden group-hover:block
                     max-w-xs p-2 text-sm text-white bg-black/80
                     rounded-md shadow-lg"
              >
                {img.caption}
              </div>
            </div>
          ))}
        </div>
        <p>
          For <code>num_inference_steps = 100</code>, the generation process
          took significantly longer than the previous examples. The images
          produced are noticeably more refined and highly detailed. In the drone
          image, for example, we can even observe the reflection of the drone on
          the table, demonstrating the improved realism and fidelity achieved
          with more inference steps.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {setup_imgs_step_100.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.stage_1_path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                stage 1: {img.caption}
              </p>
              <div
                className="absolute bottom-full mb-2 hidden group-hover:block
                     max-w-xs p-2 text-sm text-white bg-black/80
                     rounded-md shadow-lg"
              >
                {img.caption}
              </div>
            </div>
          ))}
          {setup_imgs_step_100.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.stage_2_path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                stage 2: {img.caption}
              </p>
              <div
                className="absolute bottom-full mb-2 hidden group-hover:block
                     max-w-xs p-2 text-sm text-white bg-black/80
                     rounded-md shadow-lg"
              >
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      <h2 className="text-xl font-semibold">Part 1: Sampling Loops</h2>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1.1 Implementing the Forward Process
        </h2>
        <p>
          A key part of diffusion is the forward process, which takes a clean
          image <InlineMath math={`x_0`} />
          and adds noise to it. The forward process is defined by:{" "}
        </p>

        <BlockMath
          math={String.raw`
q(x_t | x_0) = N(x_t ; \sqrt{\bar\alpha_t} x_0, (1 - \bar\alpha_t)\mathbf{I})\tag{1}`}
        />

        <p>which is equivalent to computing </p>
        <BlockMath
          math={String.raw`
x_t = \sqrt{\bar\alpha_t} x_0 + \sqrt{1 - \bar\alpha_t} \epsilon \quad \text{where}~ \epsilon \sim N(0, 1) \tag{2} 
`}
        />

        <p>
          That is, given a clean image <InlineMath math={`x_0`} />, we get a
          noisy image <InlineMath math={`x_t`} /> at timestep{" "}
          <InlineMath math={`t`} /> by sampling from a Gaussian with mean{" "}
          <InlineMath math={`\\sqrt{\\bar{\\alpha}_t}x_0`} /> and variance{" "}
          <InlineMath math={`1 - \\bar{\\alpha}_t`} />.
        </p>
        <p>
          Using the Berkeley Campanile image and the forward function, below are
          the Campanile at noise level [250, 500, 750]. We observe an increasing
          amount of noise pixels in the images as noise level goes up.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {forward_imgs.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.2 Classical Denoising</h2>
        <p>
          Here, we are using Gaussina blur filtering to try to remove the noise
          from the noisy images generated above. We observe that the noisy
          images are blurry, but the Guassian does not successfully remove the
          noise here.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {forward_imgs.slice(1, 4).map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {denoised_forward_imgs.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.3 One-Step Denoising</h2>
        <p>
          Now, we use a pretrained diffusion model <code>stage_1.unet</code> to
          denoise, by recovering Gaussian noise from the image and removing this
          noise to recover the original image.
        </p>
        <p>
          First, we use the <code>forward()</code> function to add noise to the
          original image. Then, we estimate the noise in the new noisy image by
          passing it through the diffusion model <code>stage_1.unet</code>. This
          noise is the <InlineMath math={`\\epsilon`} /> we have from formula 2.
        </p>
        <p>Given the forward formula: </p>
        <BlockMath
          math={String.raw`
x_t = \sqrt{\bar\alpha_t} x_0 + \sqrt{1 - \bar\alpha_t} \epsilon \quad \text{where}~ \epsilon \sim N(0, 1) 
`}
        />
        <p>
          we deduct the formula for <InlineMath math={`x_0`} />:
        </p>
        <BlockMath
          math={String.raw`
x_0 =
\frac{1}{\sqrt{\bar{\alpha}_t}}
\left(
x_t - \sqrt{1 - \bar{\alpha}_t}\, \epsilon
\right)
`}
        />
        <p>
          Using this equation above, we can now obtain an estimate of the
          original image, from noisy images at noise level t = [250, 500, 750].
        </p>
        <div className="grid grid-cols-3 gap-4">
          {denoised_forward_imgs.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {one_step_denoised_forward_imgs.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <p>
          From the visualizations above, we see that the one-step denoising
          using a pretrained UNet performs much better than a simple Gaussian
          blur. The one-step denoised image at t = 250 is approximately the same
          as the original image, while t = 500 and 750 have worse recovery
          results. This shows that as the noise increases, this approach becomes
          less effective.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.4 Iterative Denoising</h2>
        <p>
          We can denoise iteratively like diffusion models, to effectively
          project the image onto the natural image manifold. We follow the
          formula:
        </p>
        <BlockMath
          math={String.raw`
 x_{t'} = \frac{\sqrt{\bar\alpha_{t'}}\beta_t}{1 - \bar\alpha_t} x_0 + \frac{\sqrt{\alpha_t}(1 - \bar\alpha_{t'})}{1 - \bar\alpha_t} x_t + v_\sigma
`}
        />
        <p>
          Below are the noisy Campanile image every 5th loop of denoising. We
          observe that the images gradually become less noisy as the timestep
          goes down.
        </p>
        <div className="grid grid-cols-5 gap-4">
          {iterative_denoised_imgs.slice(0, 5).map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <p>
          Here are the visualizations of the iteratively denoised Campanile,
          comparing to the one-step denoising and Gaussian blurring methods from
          previous sections. We see that the iterative apporach produces an
          estimation of the original image with much more details than the
          one-step one.{" "}
        </p>
        <div className="grid grid-cols-4 gap-4">
          {iterative_denoised_imgs.slice(5).map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.5 Diffusion Model Sampling</h2>
        <p>
          Aside from denoising image, we can also use the iterative denoising
          approach to generate images from scratch. Using the prompt{" "}
          <code>&quot;a high quality photo&quot;</code>, I sampled 5 images from{" "}
          <code>i_start = 0</code>.
        </p>
        <div className="grid grid-cols-5 gap-4">
          {diffusion_sampling_imgs.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <p>
          Some of the generated images above have clear objects or figures,
          while sample 2 is non-sensical.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1.6 Classifier-Free Guidance (CFG)
        </h2>
        <p>
          To improve image quality, we can use Classifer-Free Guidance (CFG). In
          CFG, we compute both a noise estimate conditioned on a text prompt,
          and an unconditional noise estimate. We denote these{" "}
          <InlineMath math={`\\epsilon_c`} /> and
          <InlineMath math={`\\epsilon_u`} />. Then, we let our new noise
          estimate be:
        </p>
        <BlockMath
          math={String.raw`
\epsilon = \epsilon_u + \gamma (\epsilon_c - \epsilon_u) `}
        />
        <p>
          With a CFG scale of <InlineMath math={`\\gamma = 7`} />, I generated 5
          images below:{" "}
        </p>
        <div className="grid grid-cols-5 gap-4">
          {cfg_sampling_imgs.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <p>
          We observe that the quality of the generated images are way better
          than the non-CFG approach, with refined details. However, the
          diversity of the generated objects is limited, to compensate for the
          image quality. All the generated images have human figures in them.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1.7 Image-to-image Translation
        </h2>
        <p>
          Following the SDEdit algorithm, we can force a noisy image back onto
          the manifold of natural images by adding noise to a real image and
          then running the reverse diffusion process without conditioning. The
          amount of noise injected determines how much of the original structure
          is destroyed: starting denoising from earlier timesteps (lower{" "}
          <code>i_start</code>) results in stronger hallucination and larger
          edits, while starting from later timesteps preserves more of the
          original image and produces more faithful reconstructions. Below is a
          list of denoised images using the Berkeley Campanile.
        </p>
        <div className="grid grid-cols-6 gap-4">
          {sd_edit_campnile_imgs.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <p>
          Here are two test images of my own, one with two slices of cakes in
          it, another taken at a cocktail bar. I denoised these images following
          the same procedure.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {sd_edit_cake_imgs
            .slice(0, 1)
            .concat(sd_edit_cocktail_imgs.slice(0, 1))
            .map((img, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center group"
              >
                <Image src={img.path} alt="" width={200} height={200} />
                <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                  {img.name}
                </p>
              </div>
            ))}
        </div>
        <div className="grid grid-cols-6 gap-4">
          {sd_edit_cake_imgs.slice(1).map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-6 gap-4">
          {sd_edit_cocktail_imgs.slice(1).map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <p>
          We observe from both test images that the recovery process
          hallucinates severely until <code>i_start = 20</code>. This shows
          again that we are essentially just creating images that are similar to
          the original image, with a low-enough noise level.
        </p>

        <h2 className="text-xl font-semibold">
          1.7.1 Editing Hand-Drawn and Web Images
        </h2>
        <p>
          I then tried using nonrealistic images. Below are two hand-drawn
          images I created, and we denoised for noise levels [1, 3, 5, 7, 10,
          20].
        </p>

        {sd_edit_leaf_imgs.slice(0, 1).map((img, idx) => (
          <div key={idx} className="relative flex flex-col items-center group">
            <Image src={img.path} alt="" width={200} height={200} />
            <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
              {img.name}
            </p>
          </div>
        ))}

        <div className="grid grid-cols-6 gap-4">
          {sd_edit_leaf_imgs.slice(1).map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        {sd_edit_santa_imgs.slice(0, 1).map((img, idx) => (
          <div key={idx} className="relative flex flex-col items-center group">
            <Image src={img.path} alt="" width={200} height={200} />
            <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
              {img.name}
            </p>
          </div>
        ))}
        <div className="grid grid-cols-6 gap-4">
          {sd_edit_santa_imgs.slice(1).map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <p>
          At lower <code>i_start</code> values (SDEdit = [1, 3, 5]), a higher
          level of noise is added to the input image, which destroys much of the
          original structure. As a result, the denoising process produces more
          creative and heavily hallucinated outputs that are often less related
          to the original hand-drawn images. As the noise level decreases at
          larger
          <code>i_start</code> values (e.g., 10 and 20), more structural
          information is preserved, and the generated images more closely match
          the style and content of the original hand-drawn inputs.
        </p>
        {sd_edit_tree_imgs.slice(0, 1).map((img, idx) => (
          <div key={idx} className="relative flex flex-col items-center group">
            <Image src={img.path} alt="" width={200} height={200} />
            <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
              {img.name}
            </p>
          </div>
        ))}
        <p>
          I also used an image online to test the procedure out. We observe the
          same pattern that the less noisy the image is, more similar the
          denoised image is to the source image.
        </p>
        <div className="grid grid-cols-6 gap-4">
          {sd_edit_tree_imgs.slice(1).map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-semibold">1.7.2 Inpainting</h2>
        <p>
          We can use the same iterative denoise CFG approach to implement
          inpainting, so we only edit the image part where the mask value is 1.
          Below is an example of inpainting using the Campanile.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {inpaint_campanile.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <p>
          I then created binary masks for two of my own test images, carving out
          a chocolate cake and a cocktail glass. During the denoising process,
          the masked regions are filled in with new content inferred by the
          model. As a result, the chocolate cake is replaced by a mango cake
          with icing, and the cocktail glass is replaced with a different glass
          top, demonstrating how the model can plausibly hallucinate objects
          within specified masked areas.
        </p>
        <div className="grid grid-cols-4 gap-4">
          {inpaint_cake.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {inpaint_cocktail.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold">
          1.7.3 Text-Conditional Image-to-image Translation{" "}
        </h2>
        <p>
          We can also guide the projection of SDEdit with a text prompt. Using
          the Campanile image and a text prompt{" "}
          <code>A 2D cartoon character</code>, I created image-to-image
          tranlation at noise level [1, 3, 5, 7, 10, 20].
        </p>
        <div className="grid grid-cols-6 gap-4">
          {campanile_characters.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>

        <p>
          Using the prompt below, I was able to transform the image of the
          cocktail bar to an image with a 2D cartoon character in the bar.
        </p>
        <SyntaxHighlighter language="text">
          {`prompt = 2D animated, warm and inviting cartoon character in soft pastel colors, flat-vector style. Ethnically neutral, gender-neutral, wearing casual outdoorsy clothes with a backpack. One hand raised in a friendly wave, light gentle smile, relaxed and welcoming posture. Green hoodie, dark blue pants, brown boots, yellow backpack. Eyes looking forward naturally. clean smooth lines, minimal brush strokes, subtle shading, harmonious warm tones, cozy and playful feel, crisp edges, polished and simple, transparent background, full body, centered, game-ready style for animation sprites.`}{" "}
        </SyntaxHighlighter>
        <div className="grid grid-cols-6 gap-4">
          {cake_characters.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <p>
          Using the prompt below, I also transformed the image of cakes to an
          image with a slice of cake and a fancy drone.
        </p>
        <SyntaxHighlighter language="text">
          {`prompt = High-detail 3D sci-fi drone rendered in sleek hard-surface style. Metallic cool-tone palette (steel, gunmetal, silver) with subtle emissive blue accents. Compact spherical body with symmetrical quad rotors, glowing energy core at the center. Sharp, precise edges and reflective surfaces. Industrial-futuristic aesthetic inspired by AAA game concept art. Dynamic but stable hover pose. Soft studio lighting, crisp shadows, photorealistic reflections. No background (transparent), clean polished finish, centered, full object, production-ready for robotics concept visualization.`}{" "}
        </SyntaxHighlighter>
        <div className="grid grid-cols-6 gap-4">
          {cocktail_drones.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <p>
          We observe that the original image and the text prompt begin to
          visually merge at higher noise levels (around{" "}
          <code>i_start = 10</code> and <code>20</code>), because at lower noise
          levels the masked SDEdit images retain too much of the original
          structure, limiting the model’s ability to integrate the new prompt.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.8 Visual Anagrams</h2>
        <p>
          I created two paris of visual anagrams with diffuson models. To do
          this, we will denoise an image <InlineMath math={`x_t`} /> at step{" "}
          <InlineMath math={`t`} /> normally with the prompt{" "}
          <InlineMath math={`p_1`} />, to obtain noise estimate{" "}
          <InlineMath math={`\\epsilon_1`} />. But at the same time, we will
          flip <InlineMath math={`x_t`} /> upside down, and denoise with the
          prompt
          <InlineMath math={`p_2`} />, to get noise estimate{" "}
          <InlineMath math={`\\epsilon_2`} />. We can flip{" "}
          <InlineMath math={`\\epsilon_2`} />
          back, and average the two noise estimates. We can then perform a
          reverse diffusion step with the averaged noise estimate.
        </p>
        <p>
          I started with the example prompt pairs, and created a flipped visual
          anagram pair of an old man and people around a camp fire.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {anagram_old_man.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <p>I also created another pair with a queen and a christmas tree.</p>

        <div className="grid grid-cols-2 gap-4">
          {anagram_queen.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.9 Hybrid Images</h2>
        <p>
          We can create ahybrid images by creating a composite noise estimate,
          with two different text prompts. We combine low frequencies from one
          noise estimate with high frequencies of the other. It achives similar
          effects as hybrid images from Project 2, where the zoomed in and out
          versions of the images are different.
        </p>
        <p>
          Below are the two hybrid images I created, by combinig a house plant
          with the Statue of Liberty, and a polar bear with a dining table.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {hybrid_imgs.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="grid grid-cols-2 gap-6 items-center">
                <div className="flex flex-col items-center">
                  <Image src={img.path} alt="" width={260} height={260} />
                  <p className="mt-1 text-sm font-medium text-center">
                    Close up: {img.prompt2}
                  </p>
                </div>

                {/* Far away */}
                <div className="flex flex-col items-center">
                  <Image src={img.path} alt="" width={64} height={64} />
                  <p className="mt-1 text-sm font-medium text-center">
                    Far away: {img.prompt1}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-sm font-medium text-center">{img.name}</p>
            </div>
          ))}
        </div>
      </section>
      <h2 className="text-xl font-semibold">Part 2: Bells & Whistles</h2>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">More visual anagrams!</h2>
        <p>
          We can also create more transformations for visual anagrams than just
          flipping it upside down.
        </p>
        <h3 className="text-large font-semibold">Negative anagram</h3>
        <p>
          Compared to the flipped visual illusion, negative visual anagrams work
          by performing pixel-wise negation of the image. To compute the
          composite noise, I get the noise for the bright image and the dark
          image, as the dark image is just negativing every pixel in the bright
          image. Then I sum the absolute value of both noise to get the
          composite noise estimate. I then follow the same steps as the flipped
          image generation process, to get the final visual results.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {negative_anagrams.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
        <h3 className="text-large font-semibold">Skewed anagram</h3>
        <p>
          To create skewed visual anagrams, we follow the same process as the
          other visual anagrams. We also invert the permuted (skewed) view’s
          noise before averaging it with the original view. I manipulated the
          image by applying column-wise shifts, to roll parts of the image
          horizontally. This creates a rearranged structure within the image.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {skewed_anagrams.map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Design a course logo!</h2>
        <p>
          To design a course logo, I used text-conditioned image-to-image
          translation. I started with an image of Oski, and conditioned with the
          prompt below.
        </p>

        <div className="grid grid-cols-7 gap-4">
          {course_logo.slice(0, 7).map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
          <p className="col-span-7 mt-4 text-sm text-center">
            Prompt: a 2D animated University of California at Berkeley&apos;s
            bear Oski holding a camera
          </p>
        </div>
        <p>
          Then, I picked the best visual effect at i_start = 10, and upscaled
          the image to get the course logo.
        </p>
        <div>
          {course_logo.slice(7).map((img, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center group"
            >
              <Image src={img.path} alt="" width={200} height={200} />
              <p className="mt-2 text-sm font-medium text-center line-clamp-2 cursor-pointer">
                {img.name}
              </p>
            </div>
          ))}
        </div>
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

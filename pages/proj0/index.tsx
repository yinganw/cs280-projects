import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function Proj0() {
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

            <h1 className="text-3xl font-bold text-center">Project 0: Becoming Friends with Your Camera</h1>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Part 1: Selfie — The Wrong Way vs. The Right Way</h2>
                <Image
                    src="/media/proj0/img-selfie-compare.jpg"
                    alt="Selfie comparison"
                    width={500}
                    height={600}
                    className="rounded mx-auto"
                />
                <p>The photo on the right (taken from a distance with zoom) looks noticeably better than the close-up on the left. This difference is due to perspective distortion, which depends on the distance between the camera and the subject—not just the lens itself.</p>
                <p>In the left photo, the camera was very close and used a wide-angle lens (short focal length). This exaggerated features that were closer to the lens, like my nose, making my face appear distorted.</p>
                <p>In contrast, the right photo was taken from farther away with a longer focal length. By stepping back and zooming in to keep my face the same size in the frame, the perspective was flattened and my facial features appear more natural and proportional.</p>
                <p>Simply put: distance makes a huge difference.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Part 2: Architectural Perspective Compression</h2>
                <Image
                    src="/media/proj0/img-arch-perspective-compare.jpg"
                    alt="Architectural perspective"
                    width={500}
                    height={600}
                    className="rounded mx-auto"
                />
                <p>The first photo (taken with zoom from a distance) looks flattened or compressed, and the second photo (taken closer with no zoom) appears more natural or expansive.</p>
                <p>This difference is caused by perspective compression. When shooting from far away with a long focal length, the relative distances between foreground and background elements appear smaller, flattening the scene. When shooting up close with a wide-angle lens, the perspective exaggerates those distances. This shows that the camera position determines how space is rendered in a photo.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Part 3: The Dolly Zoom</h2>
                <div className='text-center'>
                    <Image
                        src="/media/proj0/gif-dolly-zoom.gif"
                        alt="Dolly Zoom"
                        width={300}
                        height={600}
                        className="rounded mx-auto"
                    />
                    <p className="text-gray-500 mt-2">Dolly zoom during sunset with Shiro from Crayon Shin-chan @ Grizzly Peak, Berkeley</p>
                </div>
            </section>
        </main>
    );
}
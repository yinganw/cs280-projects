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
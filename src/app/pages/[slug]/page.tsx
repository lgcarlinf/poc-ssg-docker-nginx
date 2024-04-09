import { Path } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
    params: { slug: string };
  }

export async function generateStaticParams(){
    return [
        {slug: 'bcp'},
        {slug: 'yape'}
    ]
}

export default async function PageSlug({ params }:Props) {
    const {slug} = params
    console.log(slug)
    if (Path[slug as keyof typeof Path]) {
        return <div>
                    <h1>{slug}</h1>
                    <Image 
                        src={`/${slug}.svg`} 
                        alt={slug} 
                        width={200}
                        height={200}
                    />
                </div>
    } else {
        return  notFound();
    }
}

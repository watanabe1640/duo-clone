import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { InfinityIcon } from 'lucide-react';

type Props = {
	activeCourse: { imageSrc: string; title:string; };
	hearts: number;
	points: number;
	hasActiveSubscription: boolean;
};

export function UserProgress({ 
	activeCourse,
	hearts,
	points,
	hasActiveSubscription
	}: Props) {
	return (
		<>
			<div className="flex items-center justify-between gap-x-2 w-full">
				<Link href="courses">
					<Button variant="ghost">
						<Image 
							src={activeCourse.imageSrc}
							alt={activeCourse.title}
							width={40}
							height={40}
							className='rounded-md border'
						/>
						{activeCourse.title}
					</Button>
				</Link>
				<Link href="/shop">
					<Button variant="ghost" className='text-orange-300'>
						<Image
							src={"/images/diamond.svg"}
							alt="Diamond"
							width={24}
							height={24}
							className='mr-2'
						/>
						{points}
					</Button>
				</Link>
				<Link href="/shop">
					<Button variant="ghost" className='text-rose-500'>
						<Image
							src={"/images/dino.svg"}
							alt="Dino"
							width={24}
							height={24}
							className='mr-2'
						/>
						{hasActiveSubscription ? <InfinityIcon className='h-4 w-4 stroke-[3]'/> : hearts}
					</Button>
				</Link>
			</div>
		</>
	);
};
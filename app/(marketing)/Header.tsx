import Image from 'next/image';
import { ClerkLoading, ClerkLoaded, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export default function Header() {
	return (
		<header className="h-20 w-full border-b-2 border-slate-200 px-4">
			<div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full ">
				<div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
					<Image
						src="/logo.png"
						alt="Logo"
						width={40}
						height={40}
					/>
					<h1 className='text-green-600 font-extrabold text-xl tracking-tight'>
						Duo-Clone
					</h1>
				</div>
				<ClerkLoading>
					<Loader className='h-5 w-5 text-muted-foreground animate-spin'></Loader>
				</ClerkLoading>
				<ClerkLoaded>
					<SignedIn>
						<UserButton
							afterSwitchSessionUrl='/'
						>

						</UserButton>
					</SignedIn>
					<SignedOut>
						<SignInButton
							mode='modal'
							forceRedirectUrl='/learn'
						>
							<Button variant="ghost">
								Login
							</Button>
						</SignInButton>
					</SignedOut>
				</ClerkLoaded>
			</div>
		</header>
	);
}
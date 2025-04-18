"use client";

import * as React from "react";

// @components
import { Card, Button, Typography, Input } from "@material-tailwind/react";

// @icons
// import { Wallet } from "iconoir-react";

export default function Login() {
	return (
		<Card variant="outline" color="secondary" className="max-w-lg mx-auto">
			<Card.Header className="p-8 m-0 w-full text-center">
				<Typography
					as="h2"
					type="h5"
					color="default"
					className="mb-2 mt-4"
				>
					Web3 Login Simplified
				</Typography>
				<Typography className="text-foreground max-w-lg [text-wrap:balance] mx-auto">
					Enjoy quick and secure access to your accounts on various
					Web3 platforms.
				</Typography>
			</Card.Header>
			<Card.Body className="p-8 space-y-4">
				<div className="w-full space-y-1.5">
					<Typography
						as="label"
						htmlFor="email"
						type="small"
						color="default"
						className="font-semibold"
					>
						Your Email
					</Typography>
					<Input
						size="lg"
						id="email"
						type="email"
						placeholder="name@mail.com"
					/>
				</div>
				<Button isFullWidth size="lg">
					Connect
				</Button>
				<Button
					isFullWidth
					size="lg"
					variant="outline"
					color="secondary"
					className="flex items-center gap-3"
				>
					<img
						src="https://v3.material-tailwind.com/icon/google.svg"
						alt="google"
						className="w-5 h-5"
					/>{" "}
					Sign in with Google
				</Button>
				<Button
					isFullWidth
					size="lg"
					variant="outline"
					color="secondary"
					className="flex items-center gap-3"
				>
					{/* <Wallet className="w-5 h-5 stroke-2" />  */}
					Wallet Authentication
				</Button>
			</Card.Body>
			<Card.Footer className="px-8 pb-8 pt-0">
				<Typography
					as="p"
					type="small"
					className="text-center block mx-auto max-w-xs text-foreground"
				>
					Upon signing in, you consent to abide by our{" "}
					<a href="#" className="text-black dark:text-white">
						Terms of Service
					</a>{" "}
					&{" "}
					<a href="#" className="text-black dark:text-white">
						Privacy Policy.
					</a>
				</Typography>
			</Card.Footer>
		</Card>
	);
}

import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="py-5 px-10 border-b flex justify-between items-center">
			<div></div>
			<div>
				<nav className="text-sm">
					<Link
						href="/articles/new"
						className="bg-orange-300 px-3 py-3 rounded-md"
					>
						New Post
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;

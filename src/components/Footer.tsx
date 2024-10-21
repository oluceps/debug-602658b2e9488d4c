import type { Component } from "solid-js";

const Footer: Component = () => {
	return (
		<div class="relative bottom-0 w-full justify-end text-[10px] group flex-nowrap">
			<div class="group-hover:block hidden">
				<div class="flex justify-end items-center mr-3 space-x-1 flex-nowrap">
					<p>Powered by SolidStart & UnoCSS</p>
				</div>
			</div>
		</div>
	);
};
export default Footer;
